//// 데이터의 빈도 (frequency)를 계산하는 프로그램
//#include <stdio.h>
//#define SIZE 101
//
//int main()
//{
//	int freq[SIZE] = {0, };
//	int i, score;
//
//	while (1)
//	{
//		printf("성적 입력(음수 입력시 종료): ");
//		scanf("%d", &score);
//
//		if (score < 0)
//			break;
//		else
//			freq[score]++;
//	}
//
//	for (i = 0; i < SIZE; i++)
//	{
//		if (freq[i] != 0)
//			printf("%d점 횟수: %d번\n", i, freq[i]);
//	}
//
//	return 0;
//}