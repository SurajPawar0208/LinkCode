#include<stdio.h>
int main(){
    int n, sum=0;
    printf("enter the number:");
    scanf("%d",&n);
    
    int square=n*n;
    while(square>0){
        int digit=square%10;
        sum+=digit;
        square/=10;
    }
    if(n==sum){
        printf("%d is neon number",n);
    }
    else{
        printf("%d id not neon number",n);
    }
}