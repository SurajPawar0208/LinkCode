#include<stdio.h>
int main (){
 int ch,ch1,ch2,total_Km,Amount,Total_Amount;
ola:
printf("\n=============================\tWelcome to OLA\t=====================================\n");


printf("\n1.Auto \n2.Cab \n3.SUV\n");
printf("Enter Your Choice:");
scanf("%d",&ch);
printf("Enter total_KM:");
scanf("%d",&total_Km);

if(ch==1)
{
    Amount=total_Km*10;
    printf("amount for auto is %d",Amount);
    printf("\n1.Day \n2.Night");
    printf("\nEnter Choice:\n");
    scanf("%d",&ch1);
    
    if(ch1==1){
    Total_Amount=Amount;
    printf("total amount for auto is %d",Amount);
    }
    else{
    Total_Amount=Amount+total_Km*5;
    printf("total amount for auto is %d",Total_Amount);
    }
}
else if(ch==2)
{
    Amount=total_Km*20;
    printf(" amount for cab is %d",Amount);
    printf("\n1.Day \n2.Night");
    printf("\nEnter Choice:\n");
    scanf("%d",&ch1);
    
    if(ch1==1){
    Total_Amount=Amount;
    printf("total amount for cab is %d",Amount);
}
 else{
    Total_Amount=Amount+total_Km*10;
    printf("total amount for Cab is %d",Total_Amount);
    }
}
else if(ch==3)
{
    Amount=total_Km*30;
     printf(" amount for SUV is %d",Amount);
    printf("\n1.Day \n2.Night");
    printf("\nEnter Choice:\n");
    scanf("%d",&ch1);
    
    if(ch1==1){
    Total_Amount=Amount;
    printf("total amount for SUV is %d",Amount);
}
else{
    Total_Amount=Amount+total_Km*15;
    printf("total amount for SUV is %d",Total_Amount);
    }
}
else {
    printf("Invalid Choice");
}
printf("\nWant to Continue type 1:");
scanf("%d",&ch);
if(ch==1)
{
    goto ola;
}
else{
    printf("\n=============================\tThanks For Visiting\t=====================================\n");

}
}