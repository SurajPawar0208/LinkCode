// N to 1 numbers using Do-while

#include <stdio.h>
int main()
{
    int a = 1, n;
    printf("Enter The Numer:");
    scanf("%d", &n);
    do
    {
        printf("%d\n", n);
        n--;
    } while (n >= a);
}