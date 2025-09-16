//1 to N numbers using Do-while

#include<stdio.h>
int main(){
    int a=1,n;
    printf("Enter The Numer:");
    scanf("%d",&n);
    do
    {
        printf("%d",a);
        a++;
    } while (a<=n);

    
}