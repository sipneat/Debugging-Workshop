#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv)
{
    int *x = malloc(10 * sizeof(int));
    char *str = "Your number:";
    int a;
    printf("Please type a number!\n");
    scanf("%d", &a);
    *(str + 1) = a;                                                      // FIXME: Cannot modify a string literal
    printf("%s! The number at the end of the array is %d\n", str, x[9]); // FIXME: read from uninitialized memory
    // FIXME: free(x);
    return 0;
}