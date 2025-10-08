#include<stdio.h>
#include<stdlib.h>
#include<string.h>

// Define MAX length for the ticket request using preprocessor directive
#define MAX 256

// A structure to represent a single ticket's data
struct ticket_data {
    int id;
    char request[MAX]; // Renamed from 'description' to 'request'
};

// The queue node structure, using your variable names
struct queue {
    struct ticket_data data;
    struct queue *addr; // 'addr' holds the address of the next node
};

// Global pointers for the front and rear of the queue, and a temporary pointer
struct queue *front = NULL, *rear = NULL;
struct queue *curr = NULL; // 'curr' will be used for temporary node traversal

// Global counter for generating unique ticket IDs
int nextTicketId = 1;

// Function to add a new ticket to the queue (enqueue)
void enqueue(const char* request) {
    struct queue *newnode = malloc(sizeof(struct queue));
    if (newnode == NULL) {
        printf("Error: Memory allocation failed.\n");
        return;
    }

    // Populate the ticket data
    newnode->data.id = nextTicketId++;
    strncpy(newnode->data.request, request, MAX - 1);
    newnode->data.request[MAX - 1] = '\0'; // Ensure null-termination
    newnode->addr = NULL;

    if (front == NULL) { // Queue is empty
        front = newnode;
        rear = newnode;
    } else {
        rear->addr = newnode;
        rear = newnode;
    }
    printf("Ticket #%d has been created: \"%s\"\n", newnode->data.id, newnode->data.request);
}

// Function to process and remove a ticket from the front of the queue (dequeue)
void dequeue() {
    if (front == NULL) {
        printf("\nQueue is Empty....\n");
        return;
    }
    
    // Use a local variable for robustness, though a global variable can also be used as in your original code
    struct queue *temp = front;
    printf("Processing ticket #%d: \"%s\"\n", temp->data.id, temp->data.request);
    front = front->addr;
    
    if (front == NULL) { // If the last ticket was processed, update rear
        rear = NULL;
    }
    free(temp);
}

// Function to display all tickets in the queue
void display() {
    curr = front;
    
    if (front == NULL) {
        printf("\nQueue is Empty....\n");
        return;
    }
    
    printf("\n--- Current Ticket Queue ---\n");
    while (curr != NULL) {
        printf("Ticket #%d: \"%s\"\n", curr->data.id, curr->data.request);
        curr = curr->addr;
    }
    printf("----------------------------\n");
}

int main() {
    int ch, ct;
    char request[MAX];
    do {
        printf("\n1. Create New Ticket\n2. Process Next Ticket\n3. Display All Tickets\n");
        printf("\nEnter Your choice: ");
        scanf("%d", &ch);
        
        // Consume the newline character left in the buffer by scanf
        while (getchar() != '\n'); 

        switch (ch) {
            case 1:
                printf("\nEnter ticket request: ");
                fgets(request, MAX, stdin);
                // Remove the trailing newline from fgets
                request[strcspn(request, "\n")] = 0; 
                enqueue(request);
                break;
            case 2:
                dequeue();
                break;
            case 3:
                display();
                break;
            default:
                printf("\nInvalid choice. Please try again.\n");
                break;
        }
        printf("\nDo you want to continue? Press 1 to continue  ");
        scanf("%d", &ct);
    } while (ct == 1);
    
    return 0;
}
