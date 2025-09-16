// All EVen Form 1 to N
#include <stdio.h>
int main()
{
    int n,a = 1;
    printf("ENter The Number :");
    scanf("%d", &n);

    do
    {
        if (a%2==0)
        {
            printf("%d", a); 
           
        } 
         a++;  
    } while (a <= n);
}