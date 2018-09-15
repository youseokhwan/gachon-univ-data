//#include <stdio.h>
//
//void get(double num, int *n, double *f);
//int main()
//{
//	double num;
//	int n;
//	double f;
//
//	printf("실수 입력: ");
//	scanf("%lf", &num);
//
//	get(num, &n, &f);
//
//	printf("정수부분: %d\n", n);
//	printf("소수점부분: %lf\n", f);
//
//	return 0;
//}
//
//void get(double num, int *n, double *f)
//{
//	*n = (int) num;
//	*f = num - (int)num;
//}