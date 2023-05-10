#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv)
{
    int *x = malloc(10 * sizeof(int));
    int a;
    printf("Please type a number!\n");
    scanf("%d", &a);
    x[15] = a;                                                                       // FIXME: write out of bounds
    printf("You typed %d! The number at the end of the array is %d\n", x[15], x[9]); // FIXME: read out of bounds and uninitialized value
    // FIXME: free(p)
    return 0;
}