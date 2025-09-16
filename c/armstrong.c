#include<stdio.h>
int main(){
    int n, count=0,temp=n,a,pow=1,sum=0;
    printf("%d enter any number:");
    scanf("%d",&n);
    while(n>0){
        count++;
        n=n/10;
    }
    n=temp;
    while(n>0){
        int digit=n%10;

        a=1,pow=1;
        while(a<=count){
            pow*=digit;
            a++;
        }
        sum+=pow;
        n=n/10;
    }
    if(temp==sum){
        printf("%d is a armstrong number:",temp);
    }
    else{
         printf("%d is not armstrong number:",temp);
    }
}