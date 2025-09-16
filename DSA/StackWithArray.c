#include<stdio.h>
#define max 5

int stack[max];
int top = -1;
void push(int n)
{
    if(top == max-1)
    {
        printf("Stack isFull\n");
    }
    else
    {
        top++;
        stack[top] = n;
        printf("%d Pushed in stack\n", n);
    }
}
void pop(){
    if(top == -1)
    {
        printf("Stack isEmpty\n");
    }
    else
    {
        printf("%d Popped from stack\n", stack[top]);
        stack[top]=0;
        top--;
    }
}

void display(){
    if(top == -1)
    {
        printf("Stack isEmpty\n");
    }
    else
    {
        printf("Stack elements are:\n");
        for(int i=top; i>=0; i--)
        {
            printf("%d\n", stack[i]);
        }
    }
   
}
int main(){
    int ch,ct;
 do{
    printf("\n1.Push /n2.PoP /n3.Display");
    printf("\nEnter Your choice");
    scanf("%d",&ch);
    switch (ch)
    {            
    case 1:
        int n;
        printf("Enter The Element");
        scanf("%d",&n);
        push(n);
            break;
    
    case 2:
        pop();
        break;

    case 3:
        display();
        break;
        }
                printf("want to continue");
                scanf("%5d",&ct);
    }while(ct!=1) ;
    }