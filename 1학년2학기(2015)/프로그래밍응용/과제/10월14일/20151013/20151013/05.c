//#include <stdio.h>
//#include <stdlib.h>
//#include <time.h>
//
//void func(int *video);
//
//int main()
//{
//	int video[100]={0,}, i;
//
//	printf("초기화면\n");
//
//	for(i = 0; i < 100; i++)
//	{
//		video[i] = rand() % 9 + 1;
//
//		printf("%d ", video[i]);
//		
//		if((i + 1) % 10 == 0)
//			printf("\n");
//	 }
//
//	 printf("\n");
//
//	 printf("실행 후\n");
//
//	 func(video);
//
//	 return 0;
//}
//
//void func (int *video)
//{
//	int i;
//
//	for (i = 0; i < 100; i++)
//	{
//		*(video + i) = *(video + i) - 1;
//
//		printf("%d ", video[i]);
//
//		if((i + 1) % 10 == 0)
//			printf("\n");
//	}
//}