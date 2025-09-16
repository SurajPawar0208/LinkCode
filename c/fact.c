#include<stdio.h>
int main(){
    int i,fact=1,n;
    printf("Enter The Number");
    scanf("%d",&n);
    i=1;
    while (i<=n)
    {
        fact=fact*i;
        i++;
    }
    printf("%d",fact);    
}