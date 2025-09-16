#include<stdio.h>
int main(){
    for(int i=1;i<=11;i++){
        for(int j=1;j<=11;j++){
            if(j==1 || j==11 || i==1 || i==11  || j==6 ||i==6 || i==j||i+j==12)
            printf(" *");
            else
            printf("  ");
        }
        printf("\n");
    }
}