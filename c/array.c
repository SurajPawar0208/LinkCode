#include<stdio.h>
int main(){

    int i;
    int arr[5];

    printf("ENter the Numbers: ");
    for ( i = 0; i < 5; i++)
    {
        scanf("%d",&arr[i]);
    }
    for ( i = 0; i < 5; i++)
    {
        printf("%d \t %d\t %u \n",i,arr[i],&arr[i]);
    }
    
    printf("Reverse Order \n");
    for ( i = 4; i >= 0; i--)
    {
       printf("%d \t %d\t %u \n",i,arr[i],&arr[i]);
    }  
    
}