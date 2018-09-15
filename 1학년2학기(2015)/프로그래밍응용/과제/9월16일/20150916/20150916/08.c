//#include <stdio.h>
//
//void print_menu();
//int get_menu_number(int num);
//
//int main (void)
//{
//	int num;
//
//	print_menu();
//	scanf("%d", &num);
//
//	get_menu_number(num);
//
//	if (num == 1)
//		printf("1번을 선택하셨습니다.\n");
//	else if (num == 2)
//		printf("2번을 선택하셨습니다.\n");
//	else if (num == 3)
//		printf("3번을 선택하셨습니다.\n");
//	else if (num == 4)
//		printf("종료합니다.\n");
//
//	return 0;
//}
//
//void print_menu()
//{
//	printf("1. 햄버거\n");
//	printf("2. 치즈버거\n");
//	printf("3. 샌드위치\n");
//	printf("4. 종료\n");
//	printf("원하는 메뉴를 선택하세요: ");
//}
//
//int get_menu_number(int num)
//{
//	if (num < 1 || num > 4)
//	{
//		print_menu();
//		scanf("%d", &num);
//
//		return num;
//	}
//	
//	else
//		return;
//}