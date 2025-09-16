#include<stdio.h>
int main (){
    int ch;
    printf("Enter  a number:");
    scanf("%d",&ch);

    switch(ch){

    case 1:
       printf("One");
    break;
    case 2:
        printf("Two");
    break;
    case 3:
        printf("Three");
    break;
    case 4:
        printf("Invalid");
    break;
} 
}