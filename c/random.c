#include<stdio.h>
int main(){
     int j;
    for(int i=6;i>=1;i--){
        for(int j=6;j>=i;j--){
            if(j==6||j==i||i==1)
            printf(" *");
            else
            printf("  ");
        }
        for(int k=2;k<=i;k++)
        {
            if(i==6 ||k==i||k==1)
            printf(" *");
            else 
            printf("  ");
        }
        printf("\n");
    }  
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 6; j>=i; j--)
        {
            if(j==6||i==j)
           printf(" *");
           else
           printf("  ");
        }
          for( int k=2;k<=i;k++)
          {
            if(k==i||k==1||i==6)
            printf(" *");
            else
            printf("  ");
        }
       printf("\n"); 

    }
     for (int i = 1; i <= 5; i++)
    {
        for (int j = 6; j>=i; j--)
        {
            if(j==6||i==j)
           printf(" *");
           else
           printf("  ");
        }
          for( int k=2;k<=i;k++)
          {
            if(k==i||k==1||i==6)
            printf(" *");
            else
            printf("  ");
        }
       printf("\n"); 

    }
    for(int i=6;i>=1;i--){
        for(int j=6;j>=i;j--){
            if(j==6||j==i||i==1)
            printf(" *");
            else
            printf("  ");
        }
        for(int k=2;k<=i;k++)
        {
            if(i==6 ||k==i||k==1)
            printf(" *");
            else 
            printf("  ");
        }
        printf("\n");
    } 
}
   


