#include<stdio.h>
int main(){
    int age;

    printf("Enter The Age: ");
    scanf("%d",&age);

    if(age<0){
        age=-age;
    }
    if (age=0){
        printf("Invalid Age");
    }if(age>0)
    {
         printf("Your Age Is %d",age);
    }
    
}