#include<stdio.h>
#include<stdlib.h>

struct queue {
    int data;
    struct queue *addr;
    
}*front=NULL,*rear=NULL,*curr=NULL;

void enqueue(int n){//10  20
    struct queue *newnode=malloc(sizeof(struct queue));
    newnode->data=n;
    newnode->addr=NULL;

    if (front==NULL)
    {
        front=newnode;
        rear=newnode;
        printf("%d is Enqueue",front->data);
    }
    else{
        rear->addr=newnode;
        rear=newnode;
        printf("%d is Enqueue",rear->data);
    }
}
void dequeue(){
    if (front==NULL)
    {
        printf("\nQueue is Empty....");
    }
    else{
    curr=front;
    printf("%d is Dequeue",front->data);
    front=front->addr;
    free(curr);
    }
}

void display(){

    curr=front;
    
    if (front==NULL)
    {
        printf("\nQueue is Empty....");
    }
    else{
        while (curr!=NULL)
        {
            printf("\n%d",curr->data);
            curr=curr->addr;
        }
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