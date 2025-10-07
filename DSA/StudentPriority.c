#include<stdio.h>
#include<stdlib.h>

struct student {
    int id;
    int marks;
    struct student* next;
} Student *start,*head,*temp;

void enqueue( int m, int p){
    struct student *newnode=malloc(sizeof(struct student));
    newstudent->id=m;
    newstudent->marks=p;
    newstudent->next=NULL;

     if (head->marks > p) {
        newstudent->next = head;
        head = newstudent;
    } else {
        while (start->next != NULL && start->next->marks <= p) {
            start = start->next;
        }
        newstudent->next = start->next;
        start->next = newstudent;
    }
}
    void dequeue() {
    temp = head;
    head = head->next;
    free(temp);
}
void display(){
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

