// Linear Search

// Search  element one by one

#include <stdio.h>
int main()
{
    int i, arr[10];
    int search;
    int flag = 0;

    printf("Enter the ten numbers:");
    for (i = 0; i < 10; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("Enter The number to search");
    scanf("%d", &search);

    for (int i = 0; i < 10; i++)
    {
        if (search == arr[i])
        {
            flag = 1;
            break;
        }
    }
        if(flag==1){
            printf("Element found:");
        }
        else
        {
            printf("Not Found");
        }
    }