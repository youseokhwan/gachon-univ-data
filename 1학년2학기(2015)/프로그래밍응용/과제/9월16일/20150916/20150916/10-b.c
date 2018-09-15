//#include <stdio.h>
//void save(int amount);
//int main(void)
//{
//	int amount;
//
//	while (1)
//	{
//		printf("얼마를 저축하시겠습니까? (종료는 -1): ");
//		scanf("%d", &amount);
//
//		if (amount == -1)
//		{
//			printf("종료\n");
//			break;
//		}
//
//		else
//			save(amount);
//	}
//
//	return 0;
//}
//void save(int amount)
//{
//	static int total;
//
//	total += amount;
//	
//	printf("지금까지 총 저축액은 %d입니다.\n", total);
//}