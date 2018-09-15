//#include <stdio.h>
//#include <math.h>
//void quad_eqn (double a, double b, double c);
//int main (void)
//{
//	double a, b, c;
//
//	printf("ax^2 + bx + c = 0\n");
//	printf("a, b, c 입력: ");
//	scanf("%lf %lf %lf", &a, &b, &c);
//
//	quad_eqn (a, b, c);
//
//	return 0;
//}
//void quad_eqn (double a, double b, double c)
//{
//	int d;
//
//	d = sqrt(pow(b, 2.0) - 4 * a * c);
//
//	if (a == 0)
//		printf("근은 %lf입니다.\n", (-c)/b);
//	else if (d < 0)
//		printf("근이 존재하지 않습니다.\n");
//	else
//		printf("%lf, %lf\n", (((-b) + d) / 2 / a), (((-b) - d) / 2 / a));
//}