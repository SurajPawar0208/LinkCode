// sum of all numbers

#include <stdio.h>
int main()
{

    int n,sum=0,a=1;
    printf("ENter the Number:");
    scanf("%d" ,& n);//5
    do
    {
        sum=sum+a;
        a++;
    } while (a<=n);
     printf("%d",sum);
}
