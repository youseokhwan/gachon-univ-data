//#include <stdio.h>
//
//int total = 0;
//void save(int amount);
//void draw(int amount);
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
//		else if (amount >= 0)
//			save(amount);
//
//		else if (amount < 0)
//			draw(amount);
//	}
//
//	return 0;
//}
//void save(int amount)
//{
//	total += amount;
//	
//	printf("지금까지 총 저축액은 %d입니다.\n", total);
//}
//void draw(int amount)
//{
//	total += amount;
//	
//	printf("지금까지 총 저축액은 %d입니다.\n", total);
//}