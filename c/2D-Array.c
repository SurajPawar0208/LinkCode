
#include <stdio.h>
int main()
{
    int i, j;
    int arr[3][3] = { {10, 20, 30},
                      {40, 50, 60},
                      {70, 80, 90}};
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            printf("%5d",arr[i][j]);
        }    printf("\n");

    }

}