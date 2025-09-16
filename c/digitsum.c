#include<stdio.h>
int main(){
    int n,sum=0;

    printf("Enter a Number:");
    scanf("%d",&n);
    while (n!=0)
    {
        int digit=n%10;
        sum=sum+digit;
        n=n/10;

        printf("the Number %d",sum);

    }
    
}