#include<stdio.h>

int main()
{
	int x=0, nextx=0;
	x=0;
	nextx=++x;
	printf("nextx=%d, x=%d\n", nextx, x);

	x=0;
	nextx=x++;
	printf("nextx=%d, x=%d\n", nextx, x);

	x=0;
	nextx=--x;
	printf("nextx=%d, x=%d\n", nextx, x);

	x=0;
	nextx=x--;
	printf("nextx=%d, x=%dn", nextx, x);

	return 0;
}