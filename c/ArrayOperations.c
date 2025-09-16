#include <stdio.h>
int main()
{

#define max 20

    int arr[max];
    int i, n, j, k, search, flag = 0, temp;
    int ch,ct,loc,value;

    while (1){
    
    printf("\n1. Create Array \n2.Display Array \n3.Search Array Element\n4.Sort Array\n5.Insert New Value\n6.Delete Value");
    printf("Enter Your Choice:\n");
    scanf("%d", &ch);
    switch (ch)
    {
    case 1: 
    printf("Enter How Many Numbers Want in Array");
    scanf("%d", &n);

     // Enter Elements I Array

    printf("Enter %d The Array Element", n);
    for (i = 0; i < 5; i++)
    {
        scanf("%d", &arr[i]);
    }

        break;

    case 2: // Display Elements In Array

    for (i = 0; i < 5; i++)
    {
        printf("%5d", arr[i]);
    }
        break;

    case 3: // Searching
    flag=0;

    printf("Enter The number to search");
    scanf("%d", &search);

    for (int i = 0; i < n; i++)
    {
        if (search == arr[i])
        {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
    {
        printf("Element found:");
    }
    else
    {
        printf("Not Found");
    }
        break;

    case 4:// Sorting

    for (i = 0; i < n - 1; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (arr[i] > arr[j])
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            printf("\n After %d Round \n", (i + 1));
            for (k = 0; k < n; k++)
            {
                printf("%5d", arr[k]);
            }
        }
    }
    printf("\nAfter Sorting ");

    for (i = 0; i < n; i++)
    {
        printf(" %5d", arr[i]);
    }
        break;
    
    case 5:
    printf("Enter The Location And New value");
    scanf("%d%d",&loc,&value);

    for ( i = n-1; i>loc-1; i--)
    {
        arr[i+1]=arr[i];
    }
    arr[i+1]=value;
    arr[loc-1]=value;
    n++;
    printf("\n %d Value inserted at %d location",value,loc);
    break;

    case 6:
    printf("Enter The location To Delete The  Value");\
    scanf("%d",&loc);
    n--;
    printf("\n %d Element Deleted FRom Array:\n",temp);
    break;
    }

    // End of Switch
    printf("Do you Want to Continuie press 1");
    scanf("%d",&ct);
    if(ct!=1){
        break;
    }
    
 }
}