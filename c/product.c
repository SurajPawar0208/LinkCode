#include<stdio.h>
int main(){
     int pid,pqty,pprice;
     char pname[10];
     float cgst,sgst,finaltotal;
     int total;

     printf("Enter The product Id:");
     scanf("%d",&pid);

     printf("Enter Product Name:");
     scanf("%s",pname);

     printf("Enter the Product Price: ");
     scanf("%d",&pprice);

     printf("Enter The Product Qty:");
     scanf("%d",&pqty);

     total=pprice*pqty;
     cgst=total*0.06;
     sgst=total*0.06;
     finaltotal=total+cgst+sgst;

    printf("\n\t=======================BILL============================");
    printf("\n\t Product Id \t:\t%d",pid);
    printf("\n\t Product Name \t:\t%s",pname);
    printf("\n\t Product Price \t:\t%d",pprice);
    printf("\n\t Product Qty \t:\t%d",pqty);
    printf("\n\t Product CGST \t:\t%2f",cgst);
    printf("\n\t Product SGST \t:\t%2f",sgst);
    printf("\n\t Product Total \t:\t%d",total);
    printf("\n\t FinalTotal \t:\t%2f",finaltotal);
    printf("\n\t=====================Thank You============================");


}