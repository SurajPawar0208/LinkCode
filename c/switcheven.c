#include <stdio.h>
int main() {
    int ch;
    printf("Enter an number: ");
    scanf("%d",&ch);

    switch (ch % 2) {
        case 1:
            printf("%d is Even.\n", ch);
            break;
        case 2: 
            printf("%d is Odd.\n", ch);
            break;
        default:
            printf("Unexpected input.\n");
    }
}
