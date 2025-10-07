#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    int priority;
    struct node* next;
} Node;

Node* newNode(int d, int p) {
    Node* n =(Node*)malloc(sizeof(Node));
    n->data = d;
    n->priority = p;
    n->next = NULL;     
    return n;
}
void dequeue(Node* head) {
    Node* temp = head;
    head = head->next;
    free(temp);
}
void enqueue(Node** head, int d, int p) {
    Node* start = (*head);
    Node* n = newNode(d, p);
    if ((*head)->priority > p) {
        n->next = *head;
        (*head) = n;
    } else {
        while (start->next != NULL && start->next->priority <= p) {
            start = start->next;
        }
        n->next = start->next;
        start->next = n;
    }
}

int main(){
    int n;
    int ch,ct;
    do
    {
        printf("\n1.Enqueue\n2.Dequeue\n3.Display");
        printf("\nEnter Your choice: ");
        scanf("%d",&ch);

        switch (ch)
        {
        case 1:
            printf("\nEnter Element in Queue: ");
            scanf("%d",&n);
            enqueue(n);
            break;
        
        case 2:
            dequeue();
            break;

        case 3:
            display();
            break;
        }
        printf("\nDo you want to continue Press 1 or press 2 for exit...");
        scanf("%d",&ct);
    } while (ct==1);
}
