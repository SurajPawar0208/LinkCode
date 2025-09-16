// reverseLinkedList.c
// Simple singly linked list with iterative and recursive reverse functions
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* create_node(int value) {
    Node *n = (Node*)malloc(sizeof(Node));
    if (!n) {
        perror("malloc");
        exit(EXIT_FAILURE);
    }
    n->data = value;
    n->next = NULL;
    return n;
}

void append(Node **head, int value) {
    Node *n = create_node(value);
    if (*head == NULL) {
        *head = n;
        return;
    }
    Node *cur = *head;
    while (cur->next) cur = cur->next;
    cur->next = n;
}

void print_list(const Node *head) {
    const Node *cur = head;
    while (cur) {
        printf("%d", cur->data);
        if (cur->next) printf(" -> ");
        cur = cur->next;
    }
    printf("\n");
}

void free_list(Node *head) {
    while (head) {
        Node *tmp = head;
        head = head->next;
        free(tmp);
    }
}

// Iterative reverse
Node* reverse_iterative(Node *head) {
    Node *prev = NULL;
    Node *cur = head;
    while (cur) {
        Node *next = cur->next;
        cur->next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

// Recursive reverse helper: returns new head
Node* reverse_recursive(Node *head) {
    if (head == NULL || head->next == NULL) return head;
    Node *new_head = reverse_recursive(head->next);
    head->next->next = head;
    head->next = NULL;
    return new_head;
}

int main(void) {
    Node *head = NULL;

    // Build list 1->2->3->4->5
    for (int i = 1; i <= 5; ++i) append(&head, i);

    printf("Original list: ");
    print_list(head);

    head = reverse_iterative(head);
    printf("Reversed (iterative): ");
    print_list(head);

    head = reverse_recursive(head);
    printf("Reversed (recursive, back to original): ");
    print_list(head);

    free_list(head);
    return 0;
}
    