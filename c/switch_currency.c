#include<stdio.h>
int main(){

    int ch,ch2;
    float input,result;

    printf("\n1.Rupees \n2.Dollar \n3.Euro\n");
    printf("\n Enter Your Choice:\n");
    scanf("%d",&ch);

    switch (ch=1)
    {
    case 1://for Rupee
        printf("Enter Amount in rupees:\n");
        scanf("%f",&input);
        printf("Enter choice you want to convert:");
        printf("\n1.Rupees \n2.Dollar \n3.Euro\n");
        scanf("%d",&ch2);

        switch (ch2)
        {
        case 1:
            result=input;
            printf("The %.2f 2in Rupee is %.2f in Rupee:",input,result);
            break;
            
        case 2:
            result=input/86.55;
            printf("The %.2f in Rupee is %.2f in Dollar",input,result);
            break;
        
        case 3:
            result=input/0.0099;
            printf("The %.2f in Rupee is %.2f in Euro",input,result);
            break;
        }
       break;

    case 2://for Dollar
        printf("Enter Amount in rupees:\n");
        scanf("%f",&input);
        printf("Enter choice you want to convert:\n");
        printf("\n1.Rupees \n2.Dollar \n3.Euro\n");
        scanf("%d",&ch2);

        switch (ch2)
        {
        case 1:
            result=input*86.55;
            printf("The %.2f in Dollar is %.2f in Rupee",input,result);
            break;
            
        case 2:
            result=input;
            printf("The %.2f in Dollar is %.2f in Dollar",input,result);
            break;
        
        case 3:
            result=input*0.86;
            printf("The %.2f in Dollar is %.2f in Euro",input,result);
            break;
        }
       break;
       case 3://Euro
        printf("Enter Amount in rupees:\n");
        scanf("%f",&input);
        printf("Enter choice you want to convert:\n");
        printf("\n1.Rupees \n2.Dollar \n3.Euro\n");
        scanf("%d",&ch2);

        switch (ch2)
        {
        case 1:
            result=input*101.13;
            printf("The %.2f in Euro is %.2f in Rupee",input,result);
            break;
            
        case 2:
            result=input*1.17;
            printf("The %.2f in Euro is %.2f in Dollar",input,result);
            break;
        
        case 3:
            result=input;
            printf("The %.2f in Euro is %.2f in Euro",input,result);
            break;
        }
       break;
    }           
}