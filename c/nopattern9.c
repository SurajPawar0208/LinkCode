#include<stdio.h>
int main(){
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j<=5; j++)
        {
           printf(" %d",(j+i)%2==1? 0:1 ); 
        //  printf("%d",i%2==0?(j%2==0? 0:1));
        }
       printf("\n"); 
    }
}
