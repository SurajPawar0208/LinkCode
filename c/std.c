#include <stdio.h>
int main()
{
int s1,s2,s3,total;
printf("enter marks of subjects");
scanf("%d%d%d",&s1,&s2,&s3);
total=s1+s2+s3;
float perc=total/3;

if ((s1>=40)&&(s2>=40)&&(s3>=40))
{
       if(perc>=75) 
       {
        printf("A grade");
       }
       else if(perc>=60)
       {
        printf("B grade");
       }
       else
       {
        printf("C grade");
       }
}
else 
{
    printf("FAIL");
}
}