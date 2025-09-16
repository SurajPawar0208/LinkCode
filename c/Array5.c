#include<stdio.h>
#define max 20
int main(){

    int i,j,temp,n,k;
    int arr[max];
    printf("Enter How Many Array Element");
    scanf("%d",&n);

    for ( i = 0; i < n; i++)
    {
       scanf("%d",&arr[i]);
       }
   printf("Array Elements Are");
   for ( i = 0; i < n; i++)
   {
    printf("%5d",arr[i]);
   }
   for ( k = 1; k <=n; k++)
   {
    temp=arr[n-1];
    for ( j = i-1; j>=0; j--)
    {
        arr[j+1]=arr[j];
    }
    arr[j+1]=temp;
    printf("\n");
    for ( i = 0; i < n; i++)
    {
         printf("%5d",arr[i]);
    }
   }    
}