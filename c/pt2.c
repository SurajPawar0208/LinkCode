#include<stdio.h>
int main(){
    int i,ch=65,j,n;
    printf("Enter The Number:");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
              for (int j = n; j>=i; j--)
        {
           printf(" ");
        }
          for( int k=1;k<=i;k++)
          {
            printf(" %c",(char)ch);
            ch++;
        }
        printf("\n");
        ch=65;
    }
}
