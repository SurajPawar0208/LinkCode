#include<stdio.h>
int main(){
    int num,rev=0,k;
    printf("ENter A Number:");
    scanf("%d",&num);
    k=num;
    printf("Original Number Is %d\n",num);
    while (num!=0)
    {
        rev=rev*10+(num%10); //1  //2 //1
        num=num/10; //1
    }
    printf("Reverse number is:%d\n",rev);
    if(k==rev){
        printf("It Is Palindrome");
    }
    else{
        printf("No Palindrome");
    }

}