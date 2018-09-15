//// 5개의 성적을 입력받고 그 중 최저 성적을 찾아보자
//#include <stdio.h>
//
//int main()
//{
//	int num[5] = {0, };
//	int i, min;
//
//	for (i = 0; i < 5; i++)
//	{
//		printf("%d번째 학생 성적 입력: ", i+1);
//		scanf("%d", &num[i]);
//	}
//	
//	min = num[0];
//
//	for (i = 1; i < 5; i++)
//		if (num[i] < min)
//			min = num[i];
//
//	printf("최저 성적: %d\n", min);
//
//	return 0;
//}