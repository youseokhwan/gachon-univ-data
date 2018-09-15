//#include <stdio.h>
//
//void func (double num, int *n, double *f);
//
//int main()
//{
//	double num;
//	int n;
//	double f;
//
//	printf("실수 입력: ");
//	scanf("%lf", &num);
//
//	func (num, &n, &f);
//
//	return 0;
//}
//
//void func (double num, int *n, double *f)
//{
//	*n = (int) num;
//	*f = num - (int) num;
//
//	printf("정수: %d\n", *n);
//	printf("소수점: %lf\n", *f);
//}