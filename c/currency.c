#include<stdio.h>
int main()
{
    int ch1,ch2;
    float input,result;

    printf("\n 1.Rupee \n 2.Dolar \n 3. Euro");
    printf("\nEnter your choice:");
    scanf("%d",&ch1);

    if(ch1==1){
        printf("Enter your amount in rupee");
        scanf("%f",&input);

        printf("in which currency you want to covernt");
        printf("\n 1.Rupee \n 2.Dolar \n 3. Euro");
        scanf("%d",&ch2);

        if(ch2==1)
        {
            result=input;
            printf("%f in rupee is %f",input,result);
        }
        else if(ch2==2)
        {
            result=input/86.36;
            printf("%f in dollar is %f",input,result);
        }
        else if(ch2==3)
        {
            result=input/101.36;
            printf("%f in euro is %f",input,result);
        }
       else
        {
            printf("invalid choice");
        }

    }
    else if(ch1==2)
    {
        printf("enter amount in dollar");
        scanf("%f",input);
         printf("in which currency you want to covernt");
        printf("\n 1.Rupee \n 2.Dolar \n 3. Euro");
        scanf("%d",ch2);
        if(ch2==1)
        {
            result=input*86;
            printf("%f in rupee is %f",input,result);
        }
        else if(ch2==2)
        {
            result=input;
            printf("%f in dollar is %f",input,result);
        }
        else if(ch2==3)
        {
            result=input*0.85;
            printf("%f in euro is %f",input,result);
        }
       else
        {
            printf("invalid choice");
        }


    
    }
    

}