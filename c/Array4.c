#include<stdio.h>
int main(){
    int i,j,k,temp;
    int arr[5];

    printf("Enter The Numbers in Array:");
    for ( i = 0; i < 5; i++)
    {
        scanf("%d",&arr[i]);
    }

    for ( i = 0; i < 5-1 ; i++)
    {
        for ( j = i+1; j < 5; j++)
        {
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
            printf("\n After %d Round \n",(i+1));
            for ( k = 0; k < 5; k++)
            {
                printf("%5d",arr[k]);
            }
            
        }
        
    }
        printf("\nAfter Sorting ")   ;

    for ( i = 0; i < 5; i++)
    {   
    printf(" %5d",arr[i])   ;
    } 
}