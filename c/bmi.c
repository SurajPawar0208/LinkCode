#include<stdio.h>
int main()
{
    int age ,height,weight,ch ;
    float bmi,cm,calorie,quantity;
    char item;

    printf("\n\t\t============================================================Welcome to Calorie Counter============================================\t\t\n");
    Calorie:
    printf("\n1.Roti \n2.Rice\n3.Dal\n");
    printf("Enter the Item:\n");
    scanf("%d",&item);
     if(item==1){
        printf("Enter the quantity in Grams:\n");
        scanf("%f",&quantity);
        calorie=item*quantity*4;
        printf("total calorie of %d is %2f\n",item,calorie);
    }
    else if(item==2){
        printf("Enter the quantity in Grams:\n");
        scanf("%f",&quantity);
        calorie=quantity*item*3.55;
        printf("Total calorie for %d is %2f\n\n",item,calorie);
    }
    else if(item==3){
        printf("Enter the quantity in Grams:\n");
        scanf("%f",&quantity);
        calorie=quantity*item*1.8;
        printf("Total calorie for %d is %2f\n\n",item,calorie);
    }
    else{
        printf("Enter Valid choice\n");
    }
    printf("For Calories Enter 1   For BMI Enter 2   For Exit Enter 3\n");
    scanf("%d",&ch);
    if(ch==1){
        goto Calorie;
    }
    else if(ch==2){
        goto BMI;
    }
    else if(ch==3){
        goto Exit;
    }
    else{
        printf("Invalid Choice\n");
        goto Exit;
    }
        printf("\n\t\t=======================================================================Welcome to BMI Counter=================================================\t\t\n");

    BMI:
    printf("Enter your age :");
    scanf("%d",&age);
    printf("Enter your height in Cm :");
    scanf("%d",&height);
    printf("Enter your weight in KG :");
    scanf("%d",&weight);
    cm=height*0.01;
    bmi=weight/(cm*cm);

    printf("\n\t\tyour age is \t\t: %d years ",age);
    printf("\n\t\tyour height is \t\t: %d cm",height);
    printf("\n\t\tyour weight is \t\t: %d kg",weight);
    printf("\n\t\tyour BMI is \t\t: %2f",bmi);
    if(bmi<18.5)
    {
        printf("\n\n\t\tYou are underweight\n\n");
    }
    else if((bmi>18.5) && (bmi<24.9))
    {
        printf("\n\n\t\tNormal weight\n\n");
    }

    else if((bmi>24.9) && (bmi<30))
    {
        printf("\n\n\t\tYou are overweight\\nn");
    }
    else
    {
        printf("\n\n\t\tYou are obese\n\n");
    }
    printf("For Calories Enter 1    For BMI Enter 2    For Exit Enter 3\n");
    scanf("%d",&ch);
    if(ch==1){
        goto Calorie;
    }
    else if(ch==2){
        goto BMI;
    }
    else if(ch==3){
        goto Exit;
    }
    else{
        printf("Invalid Choice");
    }
    Exit:
    printf("\n\t\t===========================================================Thank You ============================================================\t\t\n");
}