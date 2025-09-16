#include<stdio.h>
int main(){
    int a=1,n;
    int first=0,second=1,third;
    printf("enter any length of series:");
    scanf("%d",&n);

    while(a<=n){
        printf("%d ", first);
        third=first+second;
        first=second;
        second=third;
        a++;
    }
}
  num=i;
        d=n-1;

        num+=d;
           d--;