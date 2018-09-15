//// 301p 2번
//#include <stdio.h>
//#define STUDENTS 5
//#define NUM 3
//
//int main()
//{
//	int score[STUDENTS][NUM] = {0, };
//	int i, j, max, min, sum;
//
//	for (i = 0; i < 3; i++)
//	{
//		for (j = 0; j < 5; j++)
//		{
//			printf("학생 %d의 시험 #%d 점수: ", j+1, i+1);
//			scanf("%d", &score[j][i]);
//		}
//	}
//
//	// (a)
//	for (i = 0; i < 3; i++)
//	{
//		max = 0, min = 1000000, sum = 0;
//
//		for (j = 0; j < 5; j++)
//		{
//			if (score[j][i] < min)
//				min = score[j][i];
//			if (score[j][i] > max)
//				max = score[j][i];
//
//			sum += score[j][i];
//		}
//
//		printf("시험 #%d의 최고, 최저, 평균 점수는 %d, %d, %d입니다.\n", i+1, max, min, sum/5);
//	}
//
//	return 0;
//}