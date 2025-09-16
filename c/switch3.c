#include<stdio.h>

int main(){
    int choice,n=0;
    printf("\n Enter the No of the month:");
    scanf("%d",&choice);

    switch (choice)
    {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 12:
      printf("\n 31 Days");
      break;

      case 4:
      case 6:
      case 9:
      case 10:
      case 11:
      printf("\n 30 Days");
      break;

      case 2:
      printf("\n 28-29 Days");
      break;

    }
    
    
    

}