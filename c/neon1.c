#include<stdio.h>
int main(){
    int n,sq,sum=0;
    printf("Enter a number:");
    scanf("%d",&n);
    sq=n*n;
    while (sq!=0)
    {
       int  digit=sq%10;//1
       sum=sum+digit;
       sq=sq/10;
    }
    if(n==sum){
        printf("The Number Is neon Number");
    }
    else{
        printf("The Number Is not a neon Number");
    }
    
}