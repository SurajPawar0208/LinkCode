#include<stdio.h>
int main()
{
    int rollno;
    char sname[10];
    int sub1,sub2,sub3,total;
    float per;


    printf("Enter The RollNo:\t");
    scanf("%d",&rollno);

    printf("enter The student Name:\t");
    scanf("%s",sname);

    printf("Enter Marks of 3 subjects:\t");
    scanf("%d%d%d",&sub1,&sub2,&sub3);

    total=sub1+sub2+sub3;
    per=total/3;

    printf("\n\t=================Result=================")
    printf("\n\t\tRollNo\t\t:\t%d",rollno);
    printf("\n\t\tStudent Name\t:\t%s",sname);
    printf("\n\t\tSubject 3\t:\t%d",sub1);
    printf("\n\t\tSubject 2\t:\t%d",sub2);
    printf("\n\t\tSubject 1\t:\t%d",sub3);
    printf("\n\t\tTotal\t\t:\t%d",total);
    printf("\n\t\tPercentage\t:\t%f",per);
    printf("\n\t==================================")
         
}