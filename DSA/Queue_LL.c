#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node* next;
}*front = NULL,*rear = NULL,*curr = NULL;

void enqueue(int n){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = n;
    newNode->next = NULL;
    if(front == NULL && rear == NULL){
        front = rear = newNode;
    }
    rear->next = newNode;
    rear = newNode;
}

void dequeue(){
     curr = front;
    if(front == NULL){
        printf("Queue is empty\n");
        return;
    }
    if(front == rear){
        front = rear = NULL;
    }else{
        front = front->next;
    }
    free(temp);
}
void display(){
    curr = front;
    if(front == NULL){
        printf("Queue is empty\n");
        return;
    }
    while(temp != NULL){
        printf("%d ",temp->data);
        temp = temp->next;
    }
    printf("\n");
}