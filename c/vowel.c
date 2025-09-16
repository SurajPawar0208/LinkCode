#include<stdio.h>
int main(){
    char ch;
    printf("enter any charcter:");
    scanf("%c,",&ch);
     if((ch>=65) && (ch<=90) )
     {
        if ((ch=='A')||(ch=='E')||(ch=='I')||(ch=='O')||(ch=='U')) 
        {
            printf("Its Capital vowel");
        }
    else
        {
        printf("%c is capital char",ch);
         }
    }
    else if((ch>=97) && (ch<=122))
    {
        if ((ch=='a')||(ch=='e')||(ch=='i')||(ch=='o')||(ch=='u')) 
        {
            printf("its small vowel");
        }
         else
        {
              printf("%c is small charcter",ch);
         }
        }
else if((ch>=48) && (ch<=58))
{
    printf("%c is a number",ch);

}
    else 
    {
    printf("it is a other character");
    }
    
    printf("\n Ascii value for %c is %d",ch,ch);
}