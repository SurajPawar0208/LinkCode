#include<stdio.h>
int main(){
    int num,rev=0;
    printf("ENter A Number:");
    scanf("%d",&num);
    printf("Original Number Is %d\n",num);
    while (num!=0)
    {
        rev=rev*10+(num%10);
        num=num/10;
    }
    printf("Reverse number is:%d",rev);

}