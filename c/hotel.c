#include<stdio.h>
int main()
{
float cgst,sgst,finaltotal; 
int ch,ch1,orderNo,total=0,count=0;
menu:

printf("\n1.Starter \n2.VegMenu \n3. NonVeg \n4.Bill");
printf("\n Enter Your choice:\n");
scanf("%d",&ch);

if(ch==1)
{
    starter:
    printf("\n1.Paneer Tikka:200");
    printf("\n2.Masal Papad :150");
    printf("\n3.Manchurian:100");
    printf("\n Enter Your choice:\n");
    scanf("%d",&orderNo);
  
     if(orderNo==1)
     {
        total=total+200;
     }
    else if(orderNo==2)
     {
        total=total+150;
     }
     else if(orderNo==3)
     {
        total=total+100;
     }
     else{
        printf("Invalid Order");

     }
     if(orderNo>=1 && orderNo<=3)
     {
        count++;
        printf("Your Order no %d is Successfully placed\n\n",count);
     }
  printf("Do you want to order anything else in starter press 1 \n for menu press 2\n");
  scanf("%d",&ch1);

  if(ch1==1)
  {
     goto starter;
  }
  else if(ch1==2)
  { 
    goto menu;
   }
}
else if(ch==2)
{
    VegMenu:
    printf("\n1.Paneer Masala:250");
    printf("\n2.Tanduri Paneer :350");
    printf("\n3.Manchurian Rice:120");
    printf("\n Enter Your choice:\n");
    scanf("%d",&orderNo);
  
     if(orderNo==1)
     {
        total=total+250;
     }
    else if(orderNo==2)
     {
        total=total+350;
     }
     else if(orderNo==3)
     {
        total=total+120;
     }
     else{
        printf("Invalid Order");

     }
     if(orderNo>=1 && orderNo<=3)
     {
        count++;
        printf("Your Order no %d is Successfully placed\n\n",count);
     }
  printf("Do you want to order anything else in veg press 1 \n for menu press 2\n");
  scanf("%d",&ch1);
  if(ch1==1)
  {
     goto VegMenu;
  }
  else if(ch1==2)
  { 
    goto menu;
   }

}
else if(ch==3)
{
  NonVeg:
    printf("\n1.Chicken Curry:250");
    printf("\n2.Fish Curry:350");
    printf("\n3.Chicken Biryani:220");
    printf("\n Enter Your choice:\n");
    scanf("%d",&orderNo);
    
  
     if(orderNo==1)
     {
        total=total+250;
     }
    else if(orderNo==2)
     {
        total=total+350;
     }
     else if(orderNo==3)
     {
        total=total+220;
     }
     else{
        printf("Invalid Order");

     }
     if(orderNo>=1 && orderNo<=3)
     {
        count++;
        printf("Your Order no %d is Successfully placed\n\n",count);
     }
  printf("Do you want to order anything else in nonveg press 1 \n for menu press 2\n");
  scanf("%d",&ch1);\

  if(ch1==1)
  {
     goto NonVeg;
  }
  else if(ch1==2)
  { 
    goto menu;
   }
}
else if(ch==4){

  cgst=total*0.06;
  sgst=total*0.06;
  finaltotal=total+cgst+sgst;
  if(count>0)
   {
  printf("\ntotal price\t\t:\t\t %d",total);
  printf("\nCGST \t\t\t:\t\t %f",cgst);
  printf("\nSGST \t\t\t:\t\t\t%f",sgst);
  printf("\nfinal bill\t\t:\t\t\t%f",finaltotal);
}
else
{
    printf("no order is placed");
}

}
}
