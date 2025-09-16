#include <stdio.h>
int main()
{
    int ch, ch1, ch3, ch2, ch4, ch5, ch6, ch7, ch8;
    printf("\n1.Child(0-12 years)\n2.Teenagers (13-19 years)\n3.Adults(20-60 years)\n4.Seniors (60+ years)\n");
    printf("Enter The Choice:\n");
    scanf("%d", &ch);

    switch (ch)
    {
    case 1: // Child
        printf("=========Child============");
        printf("---Common Nutrition-Related Diseases:---\n");
        printf("\n1.Anemia\n2.Rickets\n3.Scurvy\n4.Kwashiorkor\n");
        printf("Enter The Disease:\n");
        scanf("%d", &ch1);
        switch (ch1)
        {
        case 1: // anemia
            printf("=======Anemia=========");
            printf("\n1.6-12 months\n2.1-3 years\n3.4-12 years\n");
            printf("Enter The Age:\n");
            scanf("%d", &ch2);
            switch (ch2)
            {
            case 1:
                printf("For Average Child Iron Should be 11mg/day");
                printf("\n1.Iron-fortified baby cereals");
                printf("\n2.Mashed lentils or beans");
                printf("\n3.Pureed meats (chicken, lamb, beef)");
                printf("\n4.Spinach and pepper omelet with lemon juice");
                printf("\n5.Oatmeal with crushed pumpkin seeds or nut butter");
                break;

            case 2:
                printf("For Average Child Iron Should be 7mg/day");
                printf("\n1.Ragi (finger millet) porridge or dosa");
                printf("\n2.Rajma (kidney beans) with rice");
                printf("\n3.Eggs (boiled, scrambled, or omelet)");
                printf("\n4.Dates and jaggery-based snacks");
                printf("\n5.Poha with peanuts and lemon");
                break;

            case 3:
                printf("For Average Child Iron Should be 13-27mg/day");
                printf("\n1.Lean red meat (beef, lamb)");
                printf("\n2.Chicken or turkey sandwiches");
                printf("\n3.Spinach paratha or dal");
                printf("\n4.Fortified cereals with fruit");
                printf("\n5.Pumpkin seeds, almonds, cashews");
                break;
            }
            break;

        case 2: // rickets
            printf("=======Rickets=========");
            printf("\n1.6-12 months\n2.1-3 years\n3.4-12 years\n");
            printf("Enter The Age:\n");
            scanf("%d", &ch3);
            switch (ch3)
            {
            case 1:
                printf("For Average Child Calcium Should be 270mg/day");
                printf("=========Calcium============");
                printf("\n1.Curd");
                printf("\n2.Fortified Cereals");
                printf("\n3.Sesame seed");
                printf("\n4.Almond(Powdered)");
                printf("For Average Child Vitamin D Should be 400IU/day");
                printf("\n1.Infant formula");
                printf("\n2.Fortified cereals");
                printf("\n3.Fortified cow’s milk");
                printf("\n4.salmon");
                break;

            case 2:
                printf("For Average Child Calcium Should be 700mg/day");
                printf("\n1.Ragi (finger millet)");
                printf("\n2.Ricotta cheese");
                printf("\n3.Whole milk");
                printf("\n4.Spinach (cooked)");

                printf("For Average Child Vitamin D Should be 400IU/day");
                printf("\n1.Fatty fish (salmon, sardines, mackerel)");
                printf("\n2.Orange juice");
                printf("\n3.Soy products (tofu, soy milk)");
                printf("\n4.Mushrooms");
                break;

            case 3:
                printf("For Average Child Calcium Should be 800mg/day");
                printf("\n1.Paneer");
                printf("\n2.Collard greens");
                printf("\n3.Spinach");
                printf("\n4.Ragi dosa");
                printf("For Average Child Vitamin D Should be 600IU/day");
                printf("\n1.Yogurt");
                printf("\n2.Fortified cereals");
                printf("\3.Fatty Fish (salmon, sardines, mackerel)");
                printf("\n4.Mushrooms (UV-exposed)");
                break;
            }
            break;

        case 3: // scurvy
            printf("=======Scurvy=========");
            printf("\n1.6-12 months\n2.1-3 years\n3.4-12 years\n");
            printf("Enter The Age:\n");
            scanf("%d", &ch4);
            switch (ch4)
            {
            case 1:
                printf("For Average Child Vitamin C Should be 50mg/day");
                printf("\n1.Papaya");
                printf("\n2.Broccoli");
                printf("\n3.Kiwi");
                printf("\n4.Amla");
                printf("\n5.Strawberries");
                break;

            case 2:
                printf("For Average Child Vitamin C Should be 15mg/day");
                printf("\n1.Oranges");
                printf("\n2.Guava");
                printf("\n3.Sweet Potatoes");
                printf("\n4.Mango");
                printf("\n5.Spinach");
                break;

            case 3:
                printf("For Average Child Vitamin C Should be 25-45mg/day");
                printf("\n1.Blackcurrants");
                printf("\n2.Parsley");
                printf("\n3.Lychees");
                printf("\n4.Cauliflower");
                printf("\n5.Brussels Sprouts");
                break;
            }
            break;

        case 4: // kwashiorkor
            printf("=======Kwashiorkor=========");
            printf("\n1.6-12 months\n2.1-3 years\n3.4-12 years\n");
            printf("Enter The Age:\n");
            scanf("%d", &ch5);
            switch (ch5)
            {
            case 1:
                printf("For Average Child Protein Should be 11g/day");
                printf("\n1.Mashed lentils");
                printf("\n2.Cooked and mashed egg yolk");
                printf("\n3.Sprouted ragi porridge");
                printf("\n4.Banana + pulses combo");
                break;

            case 2:
                printf("For Average Child Protein Should be 13g/day");
                printf("\n1.Boiled eggs");
                printf("\n2.Paneer cubes or bhurji");
                printf("\n3.Dal-chawal with ghee");
                printf("\n4.Curd and yogurt");
                break;

            case 3:
                printf("For Average Child Protein Should be 19-34g/day");
                printf("\n1.Peanut butter");
                printf("\n2.walnuts");
                printf("\n3.paneer");
                printf("\n4.chicken");
                break;
            }
            break;
        }
        break;

    case 2: // teenagers
        printf("=========Teenagers============");
        printf("Common Nutrition-Related Diseases:::\n");
        printf("\n1.Iron-deficiency Anemia\n2.Bulimia \n3.Anorexia\n");
        printf("Enter The Disease:\n");
        scanf("%d", &ch6);
        switch (ch6)
        {
        case 1: // Anemia
            printf("For Average Child iron Should be 11g/day");
            printf("\n1.lean meats");
            printf("\n2.fish");
            printf("\n3.lentils");
            printf("\n4.tofu");
            printf("\n4.leafy green vegetables");
            break;

        case 2: // Bulimia
            printf("It is Occur Due to genes ");
                printf("\n1.kimchi");
            printf("\n2.Bananas");
            printf("\n3.avocados");
            printf("\n4.Red meat");
            printf("\n5.leafy greens");
            printf("\n6.spinach");
            printf("\n7.legumes");
            printf("\n8.miso");
            printf("\n9.kefir");
            break;

        case 3: // Anorexia
            printf("It is a complex mental health disorder");
            printf("\n1.Peanut butter");
            printf("\n2.Brown rice");
            printf("\n3.Avocados");
            printf("\n4.Olive oil ");
            printf("\n5.Fortified plant milks");
            printf("\n6.spinach");
            printf("\n7.Red meat");
            printf("\n8.Fortified cereals");
            printf("\n9.Broths");
            break;
        }
        break;

    case 3: // adults
        printf("=========Adults============");
        printf("Common Nutrition-Related Diseases:::\n");
        printf("\n1.Hypertension\n2.Type 2 Diabetes\n3.High cholesterol\n4.Cardiovascular diseases\n5.Osteoporosis\n6.Metabolic syndrome");
        printf("Enter The Disease:\n");
        scanf("%d", &ch7);
        switch (ch7)
        {
        case 1://Hypertension
         printf("It is occur Due to access consumption of sodium and potassium ");
            printf("\n1.cantaloupe");
            printf("\n2.Swiss chard");
            printf("\n3.Spinach");
            printf("\n4.apricots ");
            printf("\n5.Root Vegetable");
            printf("\n6.Fatty Fish");
            printf("\n7.kefir");
            printf("\n8.Legumes");
            printf("\n9.Whole Grains");
            break;

        case 2://Type 2 Diabetes
         printf("It is occuer due to nutritional imbalances or deficiencies");
            printf("\n1. Leafy Greens ");
            printf("\n2.Low-Glycemic Fruits");
            printf("\n3.Legumes");
            printf("\n4.Fatty Fish ");
            printf("\n5.Whole Grains");
            printf("\n6.Healthy Fats");
            printf("\n7.Nuts & Seeds");
            printf("\n8.Plain Greek yogurt");
            printf("\n9.kefir");
            break;

        case 3://High cholesterol
         printf("It is cause due to Niacin,Omega-3 fat and magnesium");
         printf("For Average Adult Niacin Should be 17mg/day");
                printf("\n1.Peanuts ");
                printf("\n2.Tuna ");
                printf("\n3.Brown rice");
                printf("\n4.Fortified cereals");

                printf("For Average Adult Omega-3 Fat Should be 250-500mg/day");
                printf("\n1.Salmon ");
                printf("\n2.Mackerel");
                printf("\n3.Walnuts");
                printf("\n4.Sardines");

                printf("For Average Adult Magnesium Should be 400-420mg/day");
                printf("\n1.Quinoa ");
                printf("\n2.Black beans");
                printf("\n3.Pumpkin seeds ");
                printf("\n4.Spinach ");
            break;

        case 4://Cardiovascular diseases
         printf("It is cause due to Coenzyme Q10 ,Omega-3 fat and magnesium ");
            printf("For Average Adult Coenzyme Q10  Should be 30-100mg/day");
                printf("\n1.Peanuts ");
                printf("\n2.Soybeans ");
                printf("\n3.Spinach, broccoli");
                printf("\n4.Chicken");

                printf("For Average Adult Omega-3 Fat Should be 250-500mg/day");
                printf("\n1.Salmon ");
                printf("\n2.Mackerel");
                printf("\n3.Walnuts");
                printf("\n4.Sardines");

                printf("For Average Adult Magnesium Should be 400-420mg/day");
                printf("\n1.Quinoa ");
                printf("\n2.Black beans");
                printf("\n3.Pumpkin seeds ");
                printf("\n4.Spinach ");
            break;

        case 5://Osteoporosis
         printf("It is cause due to Calcium ,Protein and Magnesium ");
            printf("For Average Adult Calcium  Should be 1000mg/day");
                printf("\n1.Sardines with bones ");
                printf("\n2.Yogurt  ");
                printf("\n3.Fortified orange juice");
                printf("\n4.Kale, cooked");

                printf("For Average Adult Protein  Should be 0.8 grams per kg of body weight/day");
                printf("\n1.Chickpeas  ");
                printf("\n2.Cooked quinoa");
                printf("\n3.Lentils ");
                printf("\n4.Fish,Chicken Breast");

                printf("For Average Adult Magnesium Should be 400-420mg/day");
                printf("\n1.Quinoa ");
                printf("\n2.Black beans");
                printf("\n3.Pumpkin seeds ");
                printf("\n4.Spinach ");
            break;

        case 6://Metabolic syndrome
         printf("It is cause due to Coenzyme Q10 ,Omega-3 fat,Zinc and magnesium ");
            printf("For Average Adult Coenzyme Q10  Should be 30-100mg/day");
                printf("\n1.Peanuts ");
                printf("\n2.Soybeans ");
                printf("\n3.Spinach, broccoli");
                printf("\n4.Chicken");

            printf("For Average Adult Omega-3 Fat Should be 250-500mg/day");
                printf("\n1.Salmon ");
                printf("\n2.Mackerel");
                printf("\n3.Walnuts");
                printf("\n4.Sardines");

                printf("For Average Adult Zinc Should be 8-12mg/day");
                printf("\n1.Chickpeas  ");
                printf("\n2.Oysters ");
                printf("\n3.Fortified cereals");
                printf("\n4.Cashews ");

                printf("For Average Adult Magnesium Should be 400-420mg/day");
                printf("\n1.Quinoa ");
                printf("\n2.Black beans");
                printf("\n3.Pumpkin seeds ");
                printf("\n4.Spinach ");
            break;
        }
        break;

    case 4: // Seniors
        printf("=========Seniors============");
        printf("Common Nutrition-Related Diseases:::\n");
        printf("\n1.Osteoporosis\n2.Malnutrition\n3.Cognitive decline (linked to B12 deficiency)\n4.Digestive issues (due to reduced enzyme activity)");
        printf("Enter The Disease:\n");
        scanf("%d", &ch8);
        switch (ch8)
        {
        case 1://Osteoporosis 
        printf("It is cause due to Calcium ,Protein and Magnesium ");
            printf("For Average Senior Adult Calcium  Should be 1000mg/day");
                printf("\n1.Sardines with bones ");
                printf("\n2.Yogurt  ");
                printf("\n3.Fortified orange juice");
                printf("\n4.Kale, cooked");

                printf("For Average Senior Adult Protein  Should be 0.8 grams per kg of body weight/day");
                printf("\n1.Chickpeas  ");
                printf("\n2.Cooked quinoa");
                printf("\n3.Lentils ");
                printf("\n4.Fish,Chicken Breast");

                printf("For Average Senior Adult Magnesium Should be 400-420mg/day");
                printf("\n1.Quinoa ");
                printf("\n2.Black beans");
                printf("\n3.Pumpkin seeds ");
                printf("\n4.Spinach ");
            break;
        
        case 2://Malnutrition
         printf("It is cause due to Calcium ,Protein ,Zinc and Magnesium ");
            printf("For Average Adult Calcium  Should be 1000mg/day");
                printf("\n1.Sardines with bones ");
                printf("\n2.Yogurt  ");
                printf("\n3.Fortified orange juice");
                printf("\n4.Kale, cooked");

                printf("For Average Senior Adult Protein  Should be 0.8 grams per kg of body weight/day");
                printf("\n1.Chickpeas  ");
                printf("\n2.Cooked quinoa");
                printf("\n3.Lentils ");
                printf("\n4.Fish,Chicken Breast");

                printf("For Average Senior Adult Zinc Should be 8-12mg/day");
                printf("\n1.Chickpeas  ");
                printf("\n2.Oysters ");
                printf("\n3.Fortified cereals");
                printf("\n4.Cashews ");

                printf("For Average Senior Adult Magnesium Should be 400-420mg/day");
                printf("\n1.Quinoa ");
                printf("\n2.Black beans");
                printf("\n3.Pumpkin seeds ");
                printf("\n4.Spinach ");
            break;

        case 3://Cognitive decline (linked to B12 deficiency)
        printf("It is cause due to lack of B12 ");
        printf("For Average Senior Adult B12 Should be 2.4mcg/day");
                printf("\n1.Fortified cereals ");
                printf("\n2.Fortified plant-based milk");
                printf("\n3.B12 supplements ");
                printf("\n4.Multivitamins containing B12");
            break;
        
        case 4://Digestive issues (due to reduced enzyme activity)
        printf("It is cause due to lack of Zinc Magnesium and B12 ");
        printf("For Average Senior Adult Zinc Should be 8-12mg/day");
                printf("\n1.Chickpeas  ");
                printf("\n2.Oysters ");
                printf("\n3.Fortified cereals");
                printf("\n4.Cashews ");

                printf("For Average Senior Adult Magnesium Should be 400-420mg/day");
                printf("\n1.Quinoa ");
                printf("\n2.Black beans");
                printf("\n3.Pumpkin seeds ");
                printf("\n4.Spinach ");

                printf("For Average Senior Adult B12 Should be 2.4mcg/day");
                printf("\n1.Fortified cereals ");
                printf("\n2.Fortified plant-based milk");
                printf("\n3.B12 supplements ");
                printf("\n4.Multivitamins containing B12");
            break;
        }
        break;
    }
}