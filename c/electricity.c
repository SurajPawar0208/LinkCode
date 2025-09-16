#include<stdio.h>
int main()
{
    int cno,units,rate,gst,total=0;
    char cname[20];
    float totalbill;
   

    printf("Enter Customer No:");
    scanf("%d",&cno);
    printf("Enter Name:");
    scanf("%s",cname);
    printf("Enter No of units");
    scanf("%d",&units);

    if(units<=100)
     {
       total=units*3.33;
      
     }
     else if((units>100) && (units<300))
     {
        total=(100*3.33)+(units-100)*5.55;
      
     }
     else if((units>300) && (units<500))
     {
        total=(100*3.33)+(200*5.55)+(units-300)*7.77;
       
     }
     else if(units>500)
     {
         total=(100*3.33)+(200*5.55)+(200*7.77)+(units-500)*11.11;
     }
     else 
     {
        printf("invalid units");
     }
     total=total+500;
     gst=total*0.12;
     totalbill=total+gst;
     printf("your bill is %d",total);
    

    printf("\n============================================================================================");
    printf("\n\t\tconsumer id\t\t :\t\t %d",cno);
    printf("\n\t\tconsumer name\t\t :\t\t %s",cname);
    printf("\n\t\tno of units\t\t :\t\t %d",units);
    printf("\n\t\ttotal\t\t\t :\t\t %d",total);
    printf("\n\t\tgst\t\t\t :\t\t %d",gst);
    printf("\n\t\ttotalbill\t\t :\t\t %2f",totalbill);
    printf("\n============================================================================================");

    }



