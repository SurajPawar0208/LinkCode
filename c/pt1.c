#include <stdio.h>
int main()
{
    int k,p, n = 5;
    for (int i = 1; i <= n; i++)
    {
        p=i;
        k=n-1;
        for (int j = 1; j <= i; j++)
        {
            printf(" %d", p);
            p=p+k;
            k--;
        }
        printf("\n");
    }   
}
