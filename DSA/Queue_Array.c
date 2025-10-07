#include <stdio.h>
#include <stdlib.h>
#define max 5
int queue[max];
int front=-1;
int rear=-1;
void enqueue(int n)
{
    if(rear == max-1)
    {
        printf("Queue isFull\n");
    }
    else
    {
        if(front==-1)
        {
            front=0;
        }
        rear++;
        queue[rear] = n;
        printf("%d Enqueue in Queue\n", n);
    }
}
void dequeue(){
    if(front == -1 || front > rear)
    {
        printf("Queue isEmpty\n");
    }
    else
    {
        printf("%d Dequeue from Queue\n", queue[front]);
        front++;
    }
}

void display(){
    if(front == -1 || front > rear)
    {
        printf("Queue isEmpty\n");
    }
    else
    {
        printf("Queue elements are:\n");
        for(int i=front; i<=rear; i++)
        {
            printf("%d\n", queue[i]);
        }
    }
   
}
int main(){
    int ch,ct;
 do{
    printf("\n1.Enqueue /n2.Dequeue /n3.Display");
    printf("\nEnter Your choice");
    scanf("%d",&ch);
    switch (ch)
    {            
    case 1:
        int n;
        printf("Enter The Element");
        scanf("%d",&n);
        enqueue(n);
            break;
    case 2:
        dequeue();
        break;
    case 3:
        display();
        break;    
    default:
        printf("Invalid Choice");
        break;
    }
    printf("\nDo you want to continue(1/0): ");
    scanf("%d",&ct);
 }while(ct==1);
 return 0;
}