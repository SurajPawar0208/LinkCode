#include<stdio.h>

int main(){
    int choice;
    printf("\n Enter the No of the month:");
    scanf("%d",&choice);

    switch (choice)
    {
    case 1:
           printf("\n Jan");
        break;

        case 2:
           printf("\n Feb");
        break;

        case 3:
           printf("\n Mar");
        break;

        case 4:
           printf("\n Apr");
        break;

        case 5:
           printf("\n May");
        break;

        case 6:
           printf("\n June");
        break;

        case 7:
           printf("\n July");
        break;

        case 8:
           printf("\n Aug");
        break;

        case 9:
           printf("\n Sep");
        break;

        case 10:
           printf("\n Oct");
        break;

        case 11:
           printf("\n Nov");
        break;

        case 12:
           printf("\n Dec");
        break;
    
    default:
    printf("\n Invalid choice");
        break;
    }
}