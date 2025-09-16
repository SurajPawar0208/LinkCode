// Sum of All EVen Form 1 to N
#include <stdio.h>
int main()
{
    int n,a = 1,sum=0;
    printf("ENter The Number :");
    scanf("%d", &n);

    do
    {
        if (a%2==0)
        {
            sum=sum+a;    
        } 
         a++;  
    } while (a <= n);
    printf("%d",sum);
}