#include <stdio.h>
#include <stdlib.h>
struct node {
    int data;
    struct node* next;
};
struct node* head = NULL;
void insert(int value) {
    struct node* newNode = (struct node*)malloc(sizeof(struct node));
    newNode->data = value;
    newNode->next = NULL;
    if (!head) {
        head = newNode;
    } else {
        struct node* temp = head;
        while (temp->next) temp = temp->next;
        temp->next = newNode;
    }
}
void display() {
    struct node* temp = head;
    while (temp) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

void reverse() {
    struct node *prev = NULL, *curr = head, *next = NULL;
    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
}

    int main() {
        int choice, value;
        do {
            printf("\n1. Insert\n2. Display\n3. Reverse\n4. Exit\n");
            printf("Enter your choice: ");
            scanf("%d", &choice);
            switch (choice) {
                case 1:
                    printf("Enter value to insert: ");
                    scanf("%d", &value);
                    append(value);
                    break;
                case 2:
                    display();
                    break;
                case 3:
                    reverse();
                    printf("List reversed.\n");
                    break;
                case 4:
                    printf("Exiting...\n");
                    break;
                default:
                    printf("Invalid choice. Try again.\n");
            }
        } while (choice != 4);
        return 0;
    }
