#include<stdio.h>
int main(){
    int num1=10;
    int num2=20;

    printf("Before num1=%d,num2=%d",num1,num2);
    num1=num1+num2;
    num2=num1-num2;
    num1=num2-num1;
     printf("After num1=%d,num2=%d",num1,num2);
}