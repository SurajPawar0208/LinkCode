#include<stdio.h>
int main(){

    int num1,num2,add,sub,mul;
    float div;
    int ch,ct;

    MENU:

    printf("Enter Two NUmbers:\n");
    scanf("%d%d",&num1,&num2);
    
    printf("\n1.Add \n2.Sub \n3.MUl \n4.Div");
    printf("\nEnter The CHoice:\n");
    scanf("%d",&ch);

    switch (ch) 
    {
    case 1:
       add=num1+num2;
       printf("Add of %d and %d is %d\n",num1,num2,add);
    break;

    case 2:
       sub=num1-num2;
       printf("Sub of %d and %d is %d\n",num1,num2,sub);
    break;

    case 3:
       mul=num1*num2;
       printf("MUl of %d and %d is %d\n",num1,num2,mul);
    break;
    
    case 4:
       div=num1/num2;
       printf("Div of %d and %d is %f\n",num1,num2,div);
    break;
    default:
       printf("Invalid CHoice");
    break;
    }
    printf("Want to Continuen press 1");
    scanf("%d",&ct);

    if(ct==1){
        goto MENU;
    }  
} 