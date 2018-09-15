//#include <stdio.h>
//
//int add (int x, int y);
//int sub (int x, int y);
//int mul (int x, int y);
//int div (int x, int y);
//
//int main()
//{
//	int select, result;
//	int a, b;
//	int (*pf[4])(int, int) = {add, sub, mul, div};
//
//	printf("==========\n");
//	printf("0. µ¡¼À\n");
//	printf("1. »¬¼À\n");
//	printf("2. °ö¼À\n");
//	printf("3. ³ª´°¼À\n");
//	printf("4. Á¾·á\n");
//	printf("==========\n");
//	
//	printf("¸Þ´º ¼±ÅÃ: ");
//	scanf("%d", &select);
//	
//	printf("Á¤¼ö 2°³ ÀÔ·Â: ");
//	scanf("%d %d", &a, &b);
//
//	result = pf[select](a, b);
//
//	printf("¿¬»ê °á°ú: %d\n", result);
//
//	return 0;
//}
//
//int add (int x, int y)
//{
//	return x+y;
//}
//
//int sub (int x, int y)
//{
//	return x-y;
//}
//
//int mul (int x, int y)
//{
//	return x*y;
//}
//
//int div (int x, int y)
//{
//	return x/y;
//}
