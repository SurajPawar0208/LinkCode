#include<stdio.h>
int main(){
    int arr[10],i;
    int min,max,avg,sum=0;

    printf("Enter The Ten Numbers: ");
    for(i=0;i<10;i++)
    {
        scanf("%d",&arr[i]);
        sum=sum+arr[i];
        avg=sum/10;
    }
    min=arr[0];
    max=arr[0];
    

    for ( i = 1; i < 10; i++)
    {
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
    printf("The Min Number Is %d \n",min);
    printf("The max Number Is %d \n ",max);
    printf("The SUm of ten Numbers is %d \n",sum);
    printf("The Avg is %d",avg);

    
}