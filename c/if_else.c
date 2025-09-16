#include<stdio.h>
int main(){
    int n;

    printf("Enter The Number : ");
    scanf("%d",&n);

    if(n>0){
        printf("The Number  %d Is Positive ",n);
    }else{
        printf("The Number %d is Negative ",n);
    }
}