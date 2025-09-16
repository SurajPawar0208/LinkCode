#include <stdio.h>
int main()
{
    int ch1, ch2, ct, total = 0, cnt = 00;
    float cgst, sgst, finaltotal;

Menu:
    printf("\n1.Starter \n2.Veg \n3.Desert\n ");
    printf("Enter Your Choice:\n");
    scanf("%d", &ch1);

    switch (ch1)
    {
    case 1:
    starter:

        printf("\n1.Paneer Tikka:200");
        printf("\n2.Masal Papad :150");
        printf("\n3.Manchurian:100");
        printf("\n Enter Your choice:\n");
        scanf("%d", &ch2);

        switch (ch2)
        {
        case 1:
            total = total + 200;
            cnt = cnt + 1;
            break;

        case 2:
            total = total + 150;
            cnt = cnt + 1;
            break;

        case 3:
            total = total + 100;
            cnt = cnt + 1;
            break;
        break;
        }
        printf("Your order %d is Successfully Placed:\n", ch2);
        printf("Do you want to order anything else in starter press 1 \n");
        scanf("%d", &ct);
        if (ct == 1)
        {
            goto starter;
        }
        else
        {
            goto Menu;
        }

    case 2:
    Veg:

        printf("\n1.Paneer Masala:250");
        printf("\n2.Masala RIce :120");
        printf("\n3.Manchurian RIce:150");
        printf("\n Enter Your choice:\n");
        scanf("%d", &ch2);
        switch (ch2)
        {
        case 1:
            total = total + 250;
            cnt = cnt + 1;

            break;

        case 2:
            total = total + 120;
            cnt = cnt + 1;

            break;

        case 3:
            total = total + 150;
            cnt = cnt + 1;
            break;
        }
        printf("Your order %d is Successfully Placed:\n", ch2);
        printf("Do you want to order anything else in Veg press 1 \n for menu press 2\n");
        scanf("%d", &ct);
        if (ct == 1)
        {
            goto Veg;
        }
        else if (ct = 2)
        {
            goto Menu;
        }
        else
        {
            printf("Exit:");
        }
        break;

    case 3:
    Desert:

        printf("\n1.Choclate Icecream:200");
        printf("\n2.Vanila Icecream :150");
        printf("\n3.ButterScotch:100");
        printf("\n Enter Your choice:\n");
        scanf("%d", &ch2);
        switch (ch2)
        {
        case 1:
            total = total + 200;
            cnt = cnt + 1;

            break;

        case 2:
            total = total + 150;
            cnt = cnt + 1;

            break;

        case 3:
            total = total + 100;
            cnt = cnt + 1;
            break;
        }
        printf("Your order %d is Successfully Placed:\n", ch2);
        printf("Do you want to order anything else in Desert press 1 \n for menu press 2\n");
        scanf("%d", &ct);
        if (ct == 1)
        {
            goto Desert;
        }
        else if (ct = 2)
        {
            goto Menu;
        }
        else
        {
            printf("Exit:");
        }

        break;
    }
    cgst = total * 0.06;
    sgst = total * 0.06;
    finaltotal = total + cgst + sgst;
    if (cnt > 0)
    {
        printf("\ntotal price\t\t:\t\t %d", total);
        printf("\nCGST \t\t\t:\t\t %f", cgst);
        printf("\nSGST \t\t\t:\t\t\t%f", sgst);
        printf("\nfinal bill\t\t:\t\t\t%f", finaltotal);
    }
    else
    {
        printf("no order is placed");
    }
}