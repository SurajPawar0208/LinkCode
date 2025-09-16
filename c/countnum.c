#include <stdio.h>
int main()
{
    int n, even = 0, odd = 0;
    printf("Enter The Number");
    scanf("%d", &n);

    while (n != 0)
    {
        int digit = n % 10;
        if (digit % 2 == 0)
        {
            even++;
        }
        else
        {
            odd++;
        }
        n = n / 10;
    }
    printf("Even Numbers are %d\n", even);
    printf("Odd Numbers are %d", odd);
}