/**
 * Task Management Application
 * Built with Vanilla JavaScript, HTML5, and CSS3
 * Features: CRUD operations, local storage, drag & drop, keyboard shortcuts
 */

class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = "all";
        this.selectedTaskId = null;
        this.editingTaskId = null;
        this.draggedElement = null;
        this.nextId = 1;

        // DOM elements
        this.elements = {};

        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.cacheDOMElements();
        this.loadTasksFromStorage();
        this.bindEvents();
        this.setupKeyboardShortcuts();
        this.render();

        // Initialize Feather icons
        if (typeof feather !== "undefined") {
            feather.replace();
        }

        // Focus the title input on load
        this.elements.taskTitle.focus();
    }

    /**
     * Cache DOM elements for better performance
     */
    cacheDOMElements() {
        this.elements = {
            // Form elements
            taskForm: document.getElementById("task-form"),
            taskTitle: document.getElementById("task-title"),
            taskDescription: document.getElementById("task-description"),
            taskDueDate: document.getElementById("task-due-date"),
            taskPriority: document.getElementById("task-priority"),
            submitBtn: document.getElementById("submit-btn"),
            submitText: document.getElementById("submit-text"),
            titleError: document.getElementById("title-error"),

            // Filter elements
            filterBtns: document.querySelectorAll(".filter-btn"),
            clearCompletedBtn: document.getElementById("clear-completed"),

            // Task list elements
            tasksContainer: document.getElementById("tasks-container"),
            tasksList: document.getElementById("tasks-list"),
            emptyState: document.getElementById("empty-state"),

            // Stats elements
            activeCount: document.getElementById("active-count"),
            completedCount: document.getElementById("completed-count"),

            // Modal elements
            confirmationModal: document.getElementById("confirmation-modal"),
            modalTitle: document.getElementById("modal-title"),
            modalMessage: document.getElementById("modal-message"),
            modalCancel: document.getElementById("modal-cancel"),
            modalConfirm: document.getElementById("modal-confirm"),

            // Other elements
            shortcutsHelp: document.getElementById("shortcuts-help"),
            toastContainer: document.getElementById("toast-container"),
        };
    }

    /**
     * Bind all event listeners
     */
    bindEvents() {
        // Form submission
        this.elements.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // Input validation
        this.elements.taskTitle.addEventListener("input", () => {
            this.validateTitle();
        });

        // Auto-resize textarea
        this.elements.taskDescription.addEventListener("input", (e) => {
            this.autoResizeTextarea(e.target);
        });

        // Filter buttons
        this.elements.filterBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Clear completed button
        this.elements.clearCompletedBtn.addEventListener("click", () => {
            this.clearCompletedTasks();
        });

        // Modal events
        this.elements.modalCancel.addEventListener("click", () => {
            this.hideModal();
        });

        this.elements.modalConfirm.addEventListener("click", () => {
            this.confirmModalAction();
        });

        // Click outside modal to close
        this.elements.confirmationModal.addEventListener("click", (e) => {
            if (e.target === this.elements.confirmationModal) {
                this.hideModal();
            }
        });

        // Task list click delegation
        this.elements.tasksList.addEventListener("click", (e) => {
            this.handleTaskListClick(e);
        });

        // Task list change delegation (checkboxes)
        this.elements.tasksList.addEventListener("change", (e) => {
            if (e.target.classList.contains("task-checkbox")) {
                const taskId = parseInt(
                    e.target.closest(".task-item").dataset.taskId,
                );
                this.toggleTaskComplete(taskId);
            }
        });

        // Drag and drop events
        this.setupDragAndDrop();
    }

    /**
     * Setup drag and drop functionality
     */
    setupDragAndDrop() {
        this.elements.tasksList.addEventListener("dragstart", (e) => {
            if (e.target.classList.contains("task-item")) {
                this.draggedElement = e.target;
                e.target.classList.add("dragging");
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/html", e.target.outerHTML);
            }
        });

        this.elements.tasksList.addEventListener("dragend", (e) => {
            if (e.target.classList.contains("task-item")) {
                e.target.classList.remove("dragging");
                this.draggedElement = null;
                // Remove all drag-over classes
                document.querySelectorAll(".drag-over").forEach((el) => {
                    el.classList.remove("drag-over");
                });
            }
        });

        this.elements.tasksList.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";

            const afterElement = this.getDragAfterElement(
                this.elements.tasksList,
                e.clientY,
            );
            const dragging = document.querySelector(".dragging");

            if (afterElement == null) {
                this.elements.tasksList.appendChild(dragging);
            } else {
                this.elements.tasksList.insertBefore(dragging, afterElement);
            }
        });

        this.elements.tasksList.addEventListener("drop", (e) => {
            e.preventDefault();
            this.reorderTasks();
        });
    }

    /**
     * Get the element after which the dragged element should be inserted
     */
    getDragAfterElement(container, y) {
        const draggableElements = [
            ...container.querySelectorAll(".task-item:not(.dragging)"),
        ];

        return draggableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            { offset: Number.NEGATIVE_INFINITY },
        ).element;
    }

    /**
     * Reorder tasks based on current DOM order
     */
    reorderTasks() {
        const taskElements =
            this.elements.tasksList.querySelectorAll(".task-item");
        const newOrder = [];

        taskElements.forEach((element) => {
            const taskId = parseInt(element.dataset.taskId);
            const task = this.tasks.find((t) => t.id === taskId);
            if (task) {
                newOrder.push(task);
            }
        });

        this.tasks = newOrder;
        this.saveTasksToStorage();
        this.showToast("Tasks reordered successfully", "success");
    }

    /**
     * Setup keyboard shortcuts
     */
    setupKeyboardShortcuts() {
        document.addEventListener("keydown", (e) => {
            // Don't trigger shortcuts when typing in inputs
            if (
                e.target.tagName === "INPUT" ||
                e.target.tagName === "TEXTAREA"
            ) {
                return;
            }

            switch (e.key) {
                case "?":
                    this.toggleShortcutsHelp();
                    break;
                case "n":
                case "N":
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.elements.taskTitle.focus();
                    }
                    break;
                case "e":
                case "E":
                    if ((e.ctrlKey || e.metaKey) && this.selectedTaskId) {
                        e.preventDefault();
                        this.editTask(this.selectedTaskId);
                    }
                    break;
                case "Delete":
                    if (this.selectedTaskId) {
                        e.preventDefault();
                        this.deleteTask(this.selectedTaskId);
                    }
                    break;
                case " ":
                    if (this.selectedTaskId) {
                        e.preventDefault();
                        this.toggleTaskComplete(this.selectedTaskId);
                    }
                    break;
                case "Escape":
                    this.cancelEditing();
                    this.hideModal();
                    this.hideShortcutsHelp();
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    this.selectPreviousTask();
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    this.selectNextTask();
                    break;
            }
        });
    }

    /**
     * Handle form submission (create/update task)
     */
    handleFormSubmit() {
        if (!this.validateForm()) {
            return;
        }

        const formData = this.getFormData();

        if (this.editingTaskId) {
            this.updateTask(this.editingTaskId, formData);
        } else {
            this.createTask(formData);
        }

        this.resetForm();
    }

    /**
     * Validate the entire form
     */
    validateForm() {
        let isValid = true;

        if (!this.validateTitle()) {
            isValid = false;
        }

        return isValid;
    }

    /**
     * Validate task title
     */
    validateTitle() {
        const title = this.elements.taskTitle.value.trim();
        const errorElement = this.elements.titleError;

        if (!title) {
            errorElement.textContent = "Task title is required";
            this.elements.taskTitle.classList.add("error");
            return false;
        }

        if (title.length > 100) {
            errorElement.textContent = "Title must be less than 100 characters";
            this.elements.taskTitle.classList.add("error");
            return false;
        }

        errorElement.textContent = "";
        this.elements.taskTitle.classList.remove("error");
        return true;
    }

    /**
     * Get form data
     */
    getFormData() {
        return {
            title: this.elements.taskTitle.value.trim(),
            description: this.elements.taskDescription.value.trim(),
            dueDate: this.elements.taskDueDate.value,
            priority: this.elements.taskPriority.value,
        };
    }

    /**
     * Create a new task
     */
    createTask(taskData) {
        const task = {
            id: this.nextId++,
            title: taskData.title,
            description: taskData.description,
            dueDate: taskData.dueDate,
            priority: taskData.priority,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        this.tasks.unshift(task); // Add to beginning of array
        this.saveTasksToStorage();
        this.render();
        this.showToast("Task created successfully", "success");
    }

    /**
     * Update an existing task
     */
    updateTask(taskId, taskData) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex === -1) {
            this.showToast("Task not found", "error");
            return;
        }

        this.tasks[taskIndex] = {
            ...this.tasks[taskIndex],
            ...taskData,
            updatedAt: new Date().toISOString(),
        };

        this.saveTasksToStorage();
        this.render();
        this.showToast("Task updated successfully", "success");
        this.editingTaskId = null;
    }

    /**
     * Delete a task
     */
    deleteTask(taskId) {
        const task = this.tasks.find((t) => t.id === taskId);
        if (!task) {
            this.showToast("Task not found", "error");
            return;
        }

        this.showModal(
            "Delete Task",
            `Are you sure you want to delete "${task.title}"? This action cannot be undone.`,
            () => {
                this.tasks = this.tasks.filter((t) => t.id !== taskId);
                this.selectedTaskId = null;
                this.saveTasksToStorage();
                this.render();
                this.showToast("Task deleted successfully", "success");
            },
        );
    }

    /**
     * Toggle task completion status
     */
    toggleTaskComplete(taskId) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex === -1) {
            this.showToast("Task not found", "error");
            return;
        }

        this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
        this.tasks[taskIndex].updatedAt = new Date().toISOString();

        this.saveTasksToStorage();
        this.render();

        const status = this.tasks[taskIndex].completed
            ? "completed"
            : "marked as active";
        this.showToast(`Task ${status}`, "success");
    }

    /**
     * Edit a task
     */
    editTask(taskId) {
        const task = this.tasks.find((t) => t.id === taskId);
        if (!task) {
            this.showToast("Task not found", "error");
            return;
        }

        this.editingTaskId = taskId;
        this.elements.taskTitle.value = task.title;
        this.elements.taskDescription.value = task.description;
        this.elements.taskDueDate.value = task.dueDate;
        this.elements.taskPriority.value = task.priority;
        this.elements.submitText.textContent = "Update Task";

        this.elements.taskTitle.focus();
        this.elements.taskTitle.select();

        // Scroll to form
        this.elements.taskForm.scrollIntoView({ behavior: "smooth" });
    }

    /**
     * Cancel editing
     */
    cancelEditing() {
        if (this.editingTaskId) {
            this.editingTaskId = null;
            this.resetForm();
        }
    }

    /**
     * Reset the form
     */
    resetForm() {
        this.elements.taskForm.reset();
        this.elements.submitText.textContent = "Add Task";
        this.elements.titleError.textContent = "";
        this.elements.taskTitle.classList.remove("error");
        this.editingTaskId = null;

        // Reset textarea height
        this.elements.taskDescription.style.height = "auto";
    }

    /**
     * Set filter
     */
    setFilter(filter) {
        this.currentFilter = filter;

        // Update active filter button
        this.elements.filterBtns.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.filter === filter);
        });

        this.render();
    }

    /**
     * Clear all completed tasks
     */
    clearCompletedTasks() {
        const completedCount = this.tasks.filter(
            (task) => task.completed,
        ).length;

        if (completedCount === 0) {
            this.showToast("No completed tasks to clear", "warning");
            return;
        }

        this.showModal(
            "Clear Completed Tasks",
            `Are you sure you want to delete ${completedCount} completed task${completedCount > 1 ? "s" : ""}?`,
            () => {
                this.tasks = this.tasks.filter((task) => !task.completed);
                this.selectedTaskId = null;
                this.saveTasksToStorage();
                this.render();
                this.showToast(
                    `${completedCount} completed task${completedCount > 1 ? "s" : ""} cleared`,
                    "success",
                );
            },
        );
    }

    /**
     * Handle task list clicks
     */
    handleTaskListClick(e) {
        const taskItem = e.target.closest(".task-item");
        if (!taskItem) return;

        const taskId = parseInt(taskItem.dataset.taskId);

        if (e.target.classList.contains("edit-btn")) {
            this.editTask(taskId);
        } else if (e.target.classList.contains("delete-btn")) {
            this.deleteTask(taskId);
        } else if (!e.target.classList.contains("task-checkbox")) {
            this.selectTask(taskId);
        }
    }

    /**
     * Select a task
     */
    selectTask(taskId) {
        this.selectedTaskId = taskId;
        this.render();
    }

    /**
     * Select previous task
     */
    selectPreviousTask() {
        const visibleTasks = this.getFilteredTasks();
        if (visibleTasks.length === 0) return;

        if (!this.selectedTaskId) {
            this.selectedTaskId = visibleTasks[visibleTasks.length - 1].id;
        } else {
            const currentIndex = visibleTasks.findIndex(
                (task) => task.id === this.selectedTaskId,
            );
            const previousIndex =
                currentIndex > 0 ? currentIndex - 1 : visibleTasks.length - 1;
            this.selectedTaskId = visibleTasks[previousIndex].id;
        }

        this.render();
        this.scrollToSelectedTask();
    }

    /**
     * Select next task
     */
    selectNextTask() {
        const visibleTasks = this.getFilteredTasks();
        if (visibleTasks.length === 0) return;

        if (!this.selectedTaskId) {
            this.selectedTaskId = visibleTasks[0].id;
        } else {
            const currentIndex = visibleTasks.findIndex(
                (task) => task.id === this.selectedTaskId,
            );
            const nextIndex =
                currentIndex < visibleTasks.length - 1 ? currentIndex + 1 : 0;
            this.selectedTaskId = visibleTasks[nextIndex].id;
        }

        this.render();
        this.scrollToSelectedTask();
    }

    /**
     * Scroll to selected task
     */
    scrollToSelectedTask() {
        const selectedElement = document.querySelector(
            `[data-task-id="${this.selectedTaskId}"]`,
        );
        if (selectedElement) {
            selectedElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }

    /**
     * Get filtered tasks based on current filter
     */
    getFilteredTasks() {
        switch (this.currentFilter) {
            case "active":
                return this.tasks.filter((task) => !task.completed);
            case "completed":
                return this.tasks.filter((task) => task.completed);
            default:
                return this.tasks;
        }
    }

    /**
     * Render the entire application
     */
    render() {
        this.renderTasks();
        this.renderStats();
        this.updateClearCompletedButton();
    }

    /**
     * Render tasks list
     */
    renderTasks() {
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            this.elements.emptyState.style.display = "block";
            this.elements.tasksList.style.display = "none";
            return;
        }

        this.elements.emptyState.style.display = "none";
        this.elements.tasksList.style.display = "block";

        this.elements.tasksList.innerHTML = filteredTasks
            .map((task) => this.createTaskHTML(task))
            .join("");

        // Re-initialize Feather icons for new elements
        if (typeof feather !== "undefined") {
            feather.replace();
        }

        // Make task items draggable
        this.elements.tasksList
            .querySelectorAll(".task-item")
            .forEach((item) => {
                item.draggable = true;
            });
    }

    /**
     * Create HTML for a single task
     */
    createTaskHTML(task) {
        const isSelected = task.id === this.selectedTaskId;
        const dueInfo = this.getDueDateInfo(task.dueDate);

        return `
            <li class="task-item ${task.completed ? "completed" : ""} ${isSelected ? "selected" : ""} slide-in" 
                data-task-id="${task.id}"
                tabindex="0">
                <div class="task-header">
                    <input type="checkbox" 
                           class="task-checkbox" 
                           ${task.completed ? "checked" : ""}>
                    <div class="task-content">
                        <h3 class="task-title">${this.escapeHtml(task.title)}</h3>
                        ${task.description ? `<p class="task-description">${this.escapeHtml(task.description)}</p>` : ""}
                        <div class="task-meta">
                            ${
                                task.dueDate
                                    ? `
                                <span class="task-due-date ${dueInfo.class}">
                                    <i data-feather="calendar"></i>
                                    ${dueInfo.text}
                                </span>
                            `
                                    : ""
                            }
                            <span class="task-priority ${task.priority}">
                                <i data-feather="flag"></i>
                                ${task.priority}
                            </span>
                        </div>
                    </div>
                    <div class="task-actions">
                        <button class="task-btn edit-btn" title="Edit task">
                            <i data-feather="edit"></i>
                        </button>
                        <button class="task-btn delete-btn" title="Delete task">
                            <i data-feather="trash-2"></i>
                        </button>
                    </div>
                </div>
            </li>
        `;
    }

    /**
     * Get due date information
     */
    getDueDateInfo(dueDate) {
        if (!dueDate) return { text: "", class: "" };

        const due = new Date(dueDate);
        const now = new Date();
        const diffMs = due.getTime() - now.getTime();
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        let text = due.toLocaleDateString();
        let className = "";

        if (diffMs < 0) {
            text += " (Overdue)";
            className = "overdue";
        } else if (diffDays <= 1) {
            text += " (Due soon)";
            className = "due-soon";
        }

        return { text, class: className };
    }

    /**
     * Render stats
     */
    renderStats() {
        const activeCount = this.tasks.filter((task) => !task.completed).length;
        const completedCount = this.tasks.filter(
            (task) => task.completed,
        ).length;

        this.elements.activeCount.textContent = activeCount;
        this.elements.completedCount.textContent = completedCount;
    }

    /**
     * Update clear completed button state
     */
    updateClearCompletedButton() {
        const completedCount = this.tasks.filter(
            (task) => task.completed,
        ).length;
        this.elements.clearCompletedBtn.disabled = completedCount === 0;
    }

    /**
     * Save tasks to local storage
     */
    saveTasksToStorage() {
        try {
            localStorage.setItem(
                "taskManager_tasks",
                JSON.stringify(this.tasks),
            );
            localStorage.setItem("taskManager_nextId", this.nextId.toString());
        } catch (error) {
            this.showToast("Failed to save tasks to storage", "error");
            console.error("Local storage error:", error);
        }
    }

    /**
     * Load tasks from local storage
     */
    loadTasksFromStorage() {
        try {
            const tasksJson = localStorage.getItem("taskManager_tasks");
            const nextIdStr = localStorage.getItem("taskManager_nextId");

            if (tasksJson) {
                this.tasks = JSON.parse(tasksJson);
            }

            if (nextIdStr) {
                this.nextId = parseInt(nextIdStr);
            } else {
                // Calculate next ID based on existing tasks
                this.nextId =
                    this.tasks.length > 0
                        ? Math.max(...this.tasks.map((t) => t.id)) + 1
                        : 1;
            }
        } catch (error) {
            this.showToast("Failed to load tasks from storage", "error");
            console.error("Local storage error:", error);
            this.tasks = [];
            this.nextId = 1;
        }
    }

    /**
     * Show modal dialog
     */
    showModal(title, message, onConfirm) {
        this.elements.modalTitle.textContent = title;
        this.elements.modalMessage.textContent = message;
        this.modalConfirmCallback = onConfirm;

        this.elements.confirmationModal.classList.add("show");
        this.elements.modalCancel.focus();
    }

    /**
     * Hide modal dialog
     */
    hideModal() {
        this.elements.confirmationModal.classList.remove("show");
        this.modalConfirmCallback = null;
    }

    /**
     * Confirm modal action
     */
    confirmModalAction() {
        if (this.modalConfirmCallback) {
            this.modalConfirmCallback();
        }
        this.hideModal();
    }

    /**
     * Show toast notification
     */
    showToast(message, type = "info") {
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;

        let icon = "info";
        switch (type) {
            case "success":
                icon = "check-circle";
                break;
            case "error":
                icon = "x-circle";
                break;
            case "warning":
                icon = "alert-triangle";
                break;
        }

        toast.innerHTML = `
            <i data-feather="${icon}"></i>
            <span class="toast-message">${this.escapeHtml(message)}</span>
            <button class="toast-close" title="Close">
                <i data-feather="x"></i>
            </button>
        `;

        this.elements.toastContainer.appendChild(toast);

        // Initialize Feather icons for toast
        if (typeof feather !== "undefined") {
            feather.replace();
        }

        // Show toast
        setTimeout(() => toast.classList.add("show"), 100);

        // Auto hide after 4 seconds
        const autoHideTimer = setTimeout(() => this.hideToast(toast), 4000);

        // Manual close
        toast.querySelector(".toast-close").addEventListener("click", () => {
            clearTimeout(autoHideTimer);
            this.hideToast(toast);
        });
    }

    /**
     * Hide toast notification
     */
    hideToast(toast) {
        toast.classList.remove("show");
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }

    /**
     * Toggle shortcuts help
     */
    toggleShortcutsHelp() {
        this.elements.shortcutsHelp.classList.toggle("visible");
    }

    /**
     * Hide shortcuts help
     */
    hideShortcutsHelp() {
        this.elements.shortcutsHelp.classList.remove("visible");
    }

    /**
     * Auto-resize textarea
     */
    autoResizeTextarea(textarea) {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    window.taskManager = new TaskManager();
});

// Handle page visibility change to save data
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && window.taskManager) {
        window.taskManager.saveTasksToStorage();
    }
});

// Handle beforeunload to save data
window.addEventListener("beforeunload", () => {
    if (window.taskManager) {
        window.taskManager.saveTasksToStorage();
    }
});
