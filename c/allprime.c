#include <stdio.h>
int main()
{
    int n, a = 1, b = 2;
    printf("Enter The Number:\n");
    scanf("%d", &n);

    while (a <= n)
    {
        int flag = 0;
        b = 2;
        while (b < a)
        {
            if (a % b == 0)
            {
                flag = 1;
                break;
            }
            b++;
        }
        if (flag == 0)
        {
            printf("%d \t", a);
        }
        a++;
    }
}