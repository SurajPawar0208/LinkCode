#include<stdio.h>
int main(){
    int n,a=2,flag=0;
    printf("Enter the Number:");
    scanf("%d",&n);

    while (a<n)
    {
        if(n%a==0){
        flag=1;
        break;
        }
        a++; 
    }
    if(flag)
    {
        printf("It is not a Prime number:");
    }else{
        printf("It is Prime Number");
    }    
}