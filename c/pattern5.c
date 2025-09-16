#include<stdio.h>
int main(){
    // for(int i=6;i>=1;i--){
    //     for(int j=6;j>=i;j--){
    //         printf(" ");
    //     }
    //     for(int k=1;k<=i;k++)
    //     {
    //         printf("*");
    //     }
    //     printf("\n");
    // }
    for(int i=6;i>=1;i--){
        for(int j=6;j>=i;j--){
            printf(" ");
        }
        for(int k=1;k<=i;k++)
        {
            if(i==6|| k==1||k==6)
            printf(" *");
            else
            printf("");
        }
        printf("\n");
    }
}