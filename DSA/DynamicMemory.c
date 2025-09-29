// DynamicMemory.c
// Demonstrates malloc, calloc, realloc and free in C
#include<stdio.h>

#include <stdlib.h>

typedef struct {
    int id;
    char name[32];
} Item;

int main(void) {
    // malloc: allocate array of 5 ints
    int *arr = (int*)malloc(5 * sizeof(int));
    if (!arr) {
        perror("malloc");
        return EXIT_FAILURE;
    }
    for (int i = 0; i < 5; ++i) arr[i] = (i+1) * 10;
    printf("malloc array: ");
    for (int i = 0; i < 5; ++i) printf("%d ", arr[i]);
    printf("\n");

    // realloc: grow to 8 ints
    int *tmp = (int*)realloc(arr, 8 * sizeof(int));
    if (!tmp) {
        free(arr);
        perror("realloc");
        return EXIT_FAILURE;
    }
    arr = tmp;
    for (int i = 5; i < 8; ++i) arr[i] = (i+1) * 10;
    printf("after realloc to 8: ");
    for (int i = 0; i < 8; ++i) printf("%d ", arr[i]);
    printf("\n");

    free(arr);

    // calloc: allocate and zero-initialize array of 4 Items
    Item *items = (Item*)calloc(4, sizeof(Item));
    if (!items) {
        perror("calloc");
        return EXIT_FAILURE;
    }
    for (int i = 0; i < 4; ++i) {
        items[i].id = i + 1;
        snprintf(items[i].name, sizeof(items[i].name), "Item-%d", items[i].id);
    }
    printf("calloc items:\n");
    for (int i = 0; i < 4; ++i) printf("  id=%d name=%s\n", items[i].id, items[i].name);

    free(items);

    return 0;
}
