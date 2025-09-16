#include<stdio.h>
int main(){
    
    float circle,tri,rect,r,b,h,w,l;
    int ch,ct;

    MENU:

    printf("\n1.cirlce \n2.triangle \n3.Rectangle ");
    printf("\nEnter The CHoice:\n");
    scanf("%d",&ch);

    switch (ch) 
    {
    case 1:
       printf("\nEnter The Radius:");
       scanf("%f",&r);
       circle=3.14*r*r;
       printf("Area of Circle is %f:\n",circle);
    break;

    case 2:
       printf("\nEnter The Base And Height:");
       scanf("%f%f",&b,&h);
       tri=0.5*b*h;
       printf("Area of Triangle is %f:\n",tri);
    break;

    case 3:
       printf("\n Enter The Width And Length:");
       scanf("%f%f",&w,&l);
       rect=w*l;
       printf("Area of Rectangle Is %f:\n",rect);
    break;
    default:
       printf("Invalid CHoice");
    break;
    }
    printf("Want to Continue press 1");
    scanf("%d",&ct);

    if(ct==1){
        goto MENU;
    }  
}