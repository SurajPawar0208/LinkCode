#include <stdio.h>
int main()
{
    int id,basicsalary;
    float hra,ta,ma,pf,grosssalary;
    char name[10];
printf("enter employee id");
scanf("%d",&id);
printf("enter employee name:");
scanf("%s",name);
printf("enter basic salary");
scanf("%d",&basicsalary);


if(basicsalary<10000)
 {
  hra=basicsalary*0.06;
  ta=basicsalary*0.05;
  ma=basicsalary*0.04;
  pf=basicsalary*0.07;
  grosssalary=basicsalary+hra+ta+ma-pf;
 }
 else if((basicsalary>=10000) && (basicsalary<20000))
 {
   hra=basicsalary*0.07;
  ta=basicsalary*0.06;
  ma=basicsalary*0.05;
  pf=basicsalary*0.08;
  grosssalary=basicsalary+hra+ta+ma-pf;
 }
 else{
  hra=basicsalary*0.08;
  ta=basicsalary*0.07;
  ma=basicsalary*0.06;
  pf=basicsalary*0.09;
  grosssalary=basicsalary+hra+ta+ma-pf;

 }
 printf("\n\t\tname :%s",name);
 printf("\n\t\tid :%d",id);
 printf("\n\t\tbasic salary :%d",basicsalary);
 printf("\n\t\thra :%f",hra);
 printf("\n\t\tta :%f",ta);
 printf("\n\t\tma :%f",ma);
 printf("\n\t\tpf :%f",pf);
 printf("\n\t\tgross salary %d",grosssalary);


}