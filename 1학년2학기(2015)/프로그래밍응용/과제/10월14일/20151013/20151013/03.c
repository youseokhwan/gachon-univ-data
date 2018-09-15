//#include <stdio.h>
//
//void func (int x, int y, int *num1, int *num2);
//
//int main()
//{
//	int x, y, n1, n2;
//
//	printf("정수 두 개 입력: ");
//	scanf("%d %d", &x, &y);
//
//	func(x, y, &n1, &n2);
//
//	printf("최소공배수: %d\n",n2);
//	printf("최대공약수: %d\n",n1);
//
//	return 0;
//}
//
//void func (int X, int Y, int *num1, int *num2)
//{
//	int x = X;
//	int y = Y;
//	int temp;
//
//	while(y != 0)
//	{
//		temp = y;
//		y = x % y;
//		x = temp;
//	}
//
//	*num1 = x;
//	*num2 = X * Y / *num1;
//}
