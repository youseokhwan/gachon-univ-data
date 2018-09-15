//#include <stdio.h>
//#define SIZE 5
//
//int main (void)
//{
//	int grade[SIZE];
//	int i, min, max;
//
//	for (i = 0; i < SIZE; i++)
//	{
//		printf("성적을 입력하시오: ");
//		scanf("%d", &grade[i]);
//	}
//
//	min = grade[0];
//	max = grade[0];
//
//	for (i = 1; i < SIZE; i++)
//	{
//		if (grade[i] < min)
//			min = grade[i];
//	}
//
//	for (i = 1; i < SIZE; i++)
//	{
//		if (grade[i] > max)
//			max = grade[i];
//	}
//
//	printf("최솟값은 %d입니다.\n", min);
//	printf("최댓값은 %d입니다.\n", max);
//
//	return 0;
//}