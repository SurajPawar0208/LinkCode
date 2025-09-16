#include <stdio.h>

int main()
{
    int n,r,b,h,l,area;
    proitf("1-area of circle\n 2-area of triangle\n 3-area of rectangle");
    printf("enter your choice");
    scanf("%d",&n);
    
    if(n==1)
    { 
        printf("area of circle");
        printf("\nenter radius");
        scanf("%d",&r);
        area=3.14*r*r;
        printf("area of circle is %d",area);
    }
    else if(n==2)
    {
        printf("area of triangle");
        printf("\nenter base and height");
        scanf("%d%d",&b,&h);
        area=0.5*b*h;
        printf("area of triangle is %d",area);
    }
   else if(n==3)
    {
        printf("area of rectangle");
        printf("\nenter lenght and breadth");
        scanf("%d%d",&l,&b);
        area=l*b;
        printf("area of rectangle is %d",area);

    }
    else 
    {
        printf("invalid choice");
    }

}