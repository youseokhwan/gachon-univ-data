//#include <stdio.h>
//
//void menu();
//int add(int x, int y);
//int sub(int x, int y);
//int mul(int x, int y);
//int div(int x, int y);
//
//int main()
//{
//	int choice, result, x, y;
//	int (*pf[4])(int, int) = {add, sub, mul, div};
//
//	while(1) 
//	{
//		menu();
//
//		printf("¸Þ´º ¼±ÅÃ: ");
//		scanf("%d", &choice);
//
//		if(choice < 0 || choice >= 4)
//			break;
//
//		printf("Á¤¼ö 2°³ ÀÔ·Â: ");
//		scanf("%d %d", &x, &y);
//
//		result = pf[choice](x, y);
//
//		printf("¿¬»ê °á°ú = %d\n", result);
//	}
//
//	return 0;
//}
//
//void menu()
//{
//	printf("==================\n");
//	printf("0. µ¡¼À\n");
//	printf("1. »¬¼À\n");
//	printf("2. °ö¼À\n");
//	printf("3. ³ª´°¼À\n");
//	printf("4. Á¾·á\n");
//	printf("==================\n");
//}
//
//int add(int x, int y)
//{
//	return x + y;
//}
//
//int sub(int x, int y)
//{
//	return x - y;
//}
//
//int mul(int x, int y)
//{
//	return x * y;
//}
//
//int div(int x, int y)
//{
//	return x / y;
//}
