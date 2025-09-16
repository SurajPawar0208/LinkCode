#include <stdio.h>
int main()
{
    int i, n, sum=0;
    printf("Enter The Number");
    scanf("%d", &n);
    while (n != 0)
    {
        int digit=n%10;
        if (digit % 2 == 0)
        {
            sum = sum + digit;
        }
        n = n / 10;
    }
}
