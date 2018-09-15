//#include <stdio.h>
//#include <math.h>
//
//int main(void)
//{
//	double a, b, c, d;
//
//	printf("계수 a를 입력하시오: ");
//	scanf("%lf", &a);
//	printf("계수 b를 입력하시오: ");
//	scanf("%lf", &b);
//	printf("계수 c를 입력하시오: ");
//	scanf("%lf", &c);
//
//	d = b * b - 4.0 * a * c;
//
//	if (a == 0)
//		printf("방정식의 근은 %lf입니다.\n", -c / b);
//
//	else if (sqrt(d) < 0.0)
//		printf("방정식의 근은 존재하지않습니다.\n");
//
//	else
//	{
//		printf("방정식의 근은 %lf입니다.\n", (-b + sqrt(d)) / (2.0 * a));
//		printf("방정식의 근은 %lf입니다.\n", (-b - sqrt(d)) / (2.0 * a));
//	}
//
//	return 0;
//}