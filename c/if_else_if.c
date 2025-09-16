#include<stdio.h>
int main(){
    
    int n1,n2;

    printf("Enter Two Numbers");
    scanf("%d %d",&n1,&n2);

    if(n1<n2){
        printf("The %d is Greater Than %d",n2,n1);
    }
    else if(n1>n2){
        printf("The %d id Greater Than %d ",n1,n2);
    }
    else{
        printf("The Given Numbers Are Equal ");
    }
}