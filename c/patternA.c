#include<stdio.h>

int main(){
   int a,b,choice;

   printf("\n Enter the Your numbers:");
   scanf("%d",&a);

   printf("\n Enter the Your numbers:");
   scanf("%d",&b);

   printf("\n Enter your choice:");
   printf("\n1:Add\n2:Sub\n3:div\n4:mul\n5:reminder\n");
   scanf("%d",&choice);

   switch (choice)
   {
   case 1:
     printf("Addition is:%d",(a+b));
    break;
   case 2:
     printf("Subtraction is:%d",(a-b));
    break;
    case 3:
     printf("Divsion is:%d",(a/b));
    break;
    case 4:
     printf("Multiplication is:%d",(a*b));
    break;
    case 5:
     printf("Reminder is:%d",(a%b));
    break;
   default:
    break;
   }
    
}