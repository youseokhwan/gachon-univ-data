////301p 7번
//#include <stdio.h>
//#include <stdlib.h>
//#include <time.h>
//#define DOTS 6
//
//int main()
//{
//	int dice[DOTS] = {0, };
//	int i;
//
//	srand((unsigned)time(NULL));
//
//	for (i = 0; i < 60000; i++)
//	{
//		dice[rand()%6]++;
//	}
//
//	printf("주사위면 빈도\n");
//	for (i = 0; i < DOTS; i++)
//	{
//		printf("%2d\t%d\n", i+1, dice[i]);
//	}
//
//	return 0;
//}