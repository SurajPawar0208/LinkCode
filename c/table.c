#include<stdio.h>
int main(){
    int a=1,n,b=1;
    printf("Enter the  number:");
    scanf("%d",&n);
    while(a<=n){
        b=1;
        while(b<=10){
            printf("%d ",b*a);
            b++;
        }
        printf(" \n");
        a++;
    }
    return 0;
}
