#include<stdio.h>
#include<stdlib.h>


struct student_node{
    int rollno;
    char name[50];
    float per;
    struct node *addr ;
}*start,*curr;

int main(){
    int rno;
    char name[50];
    float perct;
    start=NULL;

    while (1)
    {  
 
    printf("1.Create Linked List\n2.Display Linked List\n");
    printf("Enter your choice:");
    scanf("%d",&ch);

    if(ch==1){
        printf("Enter Roll No, Name, Percentage:");
        scanf("%d %s %f",&rno,name,&perct);

        create(rno,name,perct);
   }
else if(ch==2){
    display();
}
    return 0;
}

void create(int n,char name[],int roll,float per){
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