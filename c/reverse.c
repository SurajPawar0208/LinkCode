#include<stdio.h>
int main(){
    int n;
    printf("ENter A Number:\n");
    scanf("%d",&n);
    while (n!=0)
    {
        int digit=n%10;// 3 2 
        printf("%d\n",digit);
        n=n/10;
    }
    
}