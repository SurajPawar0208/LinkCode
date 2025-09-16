#include<stdio.h>
int main(){
    int a=1,n,first=0,second=1,third;

    printf("Enter A number:");
    scanf("%d",&n);
    while (a<=n)
    {
        printf("%d\t",first);
        third=first+second;
        first=second;
        second=third;
        a++;
    }
    
}