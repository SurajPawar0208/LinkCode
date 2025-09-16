#include<stdio.h>
#include<stdlib.h>
struct node{
    int data;
    struct node *addr ;
}*start *curr;

void create (int n){
    struct node *newnode;
    newnode->data;
    newnode->addr=NULL;
    newnode=malloc(sizeof(struct node));
    
    if(start=NULL){
        start=newnode;
    }else{
        curr=start;
    }
    while(curr->addr!=NULL)
    {
        curr=curr->addr;
    }
    curr->addr=newnode;
    }
}
void dispaly(){
    curr=start;
    while(curr!=NULL){
        printf("%d",curr->data);
        curr=curr->addr;
    }
}

void reverse(){
    struct node *prev=NULL;
    struct node *next=NULL;
    curr=start;
    while(curr!=NULL){
        next=curr->addr;
        curr->addr=prev;
        prev=curr;
        curr=next;
    }
    start=prev;
     
}
int main(){
    int n;
    printf("1.Create Linked List\n2.Display Linked List\n3.Reverse Linked List\n");
    scanf("%d",&n);
    create(n);
    display();
    reverse();
    display();
    return 0;
}
