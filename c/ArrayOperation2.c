#include <stdio.h>
#define max 20
int main()
{
    int arr[max];
    int n,i,j,k,evencnt,oddcnt,evensum,oddsum;
    int evenarr[max],oddarr[max];

    evencnt=0;
    oddcnt=0;
    evensum=0;
    oddsum=0;
    j=0;
    k=0;

    printf("\n How Many Elements Do You Want in Array");
    scanf("%d",&n);

    printf("Enter Element in Array");
    for ( i = 0; i < n; i++)
    {
        scanf("%d",&arr[i]);
        if(arr[i]%2==0){
            evenarr[j]=arr[i];
            evensum=evensum+arr[i];
            evencnt++;
            j++;
        }else{
            oddarr[k]=arr[i];
            k++;
            oddsum=oddsum+arr[i];
            oddcnt++;
        }
    }
    printf("\n TOtal Even Numbers are %d and sum of even Number is: %d\n",evencnt,evensum);
    for ( i = 0; i < j; i++)
    {
        printf("%5d",evenarr[i]);
    }
    printf("\n TOtal odd Numbers are %d and sum of odd Number is: %d\n",oddcnt,oddsum);
    for ( i = 0; i < k; i++)
    {
        printf("%5d",oddarr[i]);
    }
}