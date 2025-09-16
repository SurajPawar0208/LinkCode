#include<stdio.h>
int main(){

    int m;

    printf("Enter The Number");
    scanf("%d",&m);

    if (m%2==0)
    {
        printf("The %d is Even Number",m);
    }else if(m%2!=0){
        printf("The %d is Odd Number",m);
    }
    else{
        printf("Invalid NUmber");
    }
    
}