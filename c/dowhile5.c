// Factorial of a number using do while loop

#include<stdio.h>
int main(){
    int i=1,fact=1,n;
    printf("Enter The Number:");
    scanf("%d",&n);
    do
    {
        fact=fact*i;
        i++;
    } while (i<=n);   
    printf("%d",fact);    
}