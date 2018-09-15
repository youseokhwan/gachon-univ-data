//#include <stdio.h>
//#define SIZE 5
//
//int main(void)
//{
//	int buffer[SIZE];
//	FILE *fp = NULL;
//	int i;
//
//	fp = fopen("binary.bin", "rb");
//
//	if (fp == NULL)
//	{
//		fprintf(stderr, "binary.bin 파일을 열 수 없습니다.\n");
//
//		return 1;
//	}
//
//	for (i = 0; i < SIZE; i++)
//	{
//		fread(&buffer[i], sizeof(int), 1, fp);
//		printf("%d ", buffer[i]);
//	}
//
//	printf("\n");
//
//	return 0;
//}