#include<stdio.h>
int main()
{
    float base,height,area;

    printf("Enter the base:\n");
    scanf("%f",&base);
    printf("Enter the height:\n");
    scanf("%f",&height);

    area=0.5*base*height;

    printf("The Are of triangle is %f",area);

}