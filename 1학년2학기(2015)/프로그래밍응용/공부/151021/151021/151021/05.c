//#include <stdio.h>
//
//int add(int x, int y);
//int sub(int x, int y);
//int mul(int x, int y);
//int div(int x, int y);
//
//int main()
//{
//	int choice, a, b;
//	int (*pf[4])(int, int) = {add, sub, mul, div};
//
//	printf("0. µ¡¼À\n");
//	printf("1. »¬¼À\n");
//	printf("2. °ö¼À\n");
//	printf("3. ³ª´°¼À\n\n");
//	
//	printf("¸Þ´º ¼±ÅÃ: ");
//	scanf("%d", &choice);
//
//	printf("Á¤¼ö 2°³ ÀÔ·Â: ");
//	scanf("%d %d", &a, &b);
//
//	printf("°á°ú: %d\n", pf[choice](a, b));
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