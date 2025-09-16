#include <stdio.h>

int main() {
    float cgst, sgst, finaltotal;
    int ch, ch1, orderNo,cnt, total = 0;

menu:
    printf("\n------ MENU ------");
    printf("\n1. Starter");
    printf("\n2. Veg Menu");
    printf("\n3. Non-Veg");
    printf("\n4. Bill");
    printf("\nEnter your choice: ");
    scanf("%d", &ch);

    if (ch == 1) {
    starter:
        printf("\n--- Starter Menu ---");
        printf("\n1. Paneer Tikka : 200");
        printf("\n2. Masala Papad : 150");
        printf("\n3. Manchurian   : 100");
        printf("\nEnter your choice: ");
        scanf("%d", &orderNo);

        switch (orderNo) {
            case 1: total += 200; break;
            case 2: total += 150; break;
            case 3: total += 100; break;
            default:
                printf("Invalid Order\n");
                goto starter;
        }

        printf("Your %d order is successfully placed.\n",cnt);
        if()
      

        printf("Do you want to order anything else? (press 1)\nFor main menu press 2: ");
        scanf("%d", &ch1);

        if (ch1 == 1) {
            goto starter;
        } else if (ch1 == 2) {
            goto menu;
        }

    } else if (ch == 2) {
        // Veg Menu - You can implement similar to Starter
    } else if (ch == 3) {
        // Non-Veg Menu - You can implement similar to Starter
    } else if (ch == 4) {
        // Calculate GST and final total
        cgst = total * 0.06f;
        sgst = total * 0.06f;
        finaltotal = total + cgst + sgst;

        printf("\n-------- BILL --------");
        printf("\nTotal Price       : %d", total);
        printf("\nCGST (6%%)         : %.2f", cgst);
        printf("\nSGST (6%%)         : %.2f", sgst);
        printf("\nFinal Bill Amount : %.2f\n", finaltotal);
    } else {
        printf("Invalid choice! Returning to menu.\n");
        goto menu;
    }

    return 0;
}
