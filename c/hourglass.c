#include<stdio.h>
int main(){
    for (int i = 7; i >= 1; i--)
    {
        for (int j = 7; j>=i; j--)
        {
           printf(" ");
        }
        for( int j=1;j<=i;j++)
        {
            if(j==1 || j==i || i==7 )
            printf(" *");
            else
            printf("  ");
        }
       printf("\n"); 
    }
    for (int i = 2; i <= 7; i++)
    {
        for (int j = 7; j>=i; j--)
        {
           printf(" ");
        }
        for( int j=1;j<=i;j++)
        {
            if(j==1 || j==i  || i==7)
            printf(" *");
            else
            printf("  ");
        }
       printf("\n"); 
    }
   
}
