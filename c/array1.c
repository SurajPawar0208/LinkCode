#include<stdio.h>
int main()
{

    int arr[10];
    int sum=0,even=0,odd=0,e=0,o=0;
    for(int i=0;i<10;i++)
    {
        printf("Enter ten number: ");
        for( i = 0; i < 10; i++)
        {
           scanf("%d", &arr[i]);
           sum=sum+arr[i];

           if(arr[i]%2==0){
            even++;
            e=e+arr[i];
           }else{
            odd++;
            o=o+arr[i];
           }
        }
    }
    printf("Sum of ten Numers is: %d\n", sum);
    printf("Even numbers are: %d and sum is:%d\n", even,e);
    printf("Odd numbers are: %d and sum is :%d\n", odd,o);
}