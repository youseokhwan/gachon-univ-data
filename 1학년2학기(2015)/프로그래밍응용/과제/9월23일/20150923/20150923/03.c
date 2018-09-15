//#include <stdio.h>
//#include <math.h>
//#define SIZE 20
//
//int main(void)
//{
//	int i;
//	double data[SIZE];
//	double sum = 0.0, m, v;
//
//	for(i=0; i < SIZE; i++)
//	{
//		printf("실수를 입력하시오: ");
//		scanf("%lf", &data[i]);
//	}
//	sum = 0.0;
//
//	for(i=0; i < SIZE; i++)
//	{
//		sum += data[i];
//	}
//	m = sum / SIZE;
//
//	printf("평균:%lf\n", m);
//	sum = 0.0;
//
//	for(i=0; i < SIZE; i++)
//	{
//		sum += (data[i]-m) * (data[i]-m);
//	}
//
//	v = sum / SIZE;
//	printf("표준편차: %lf\n", sqrt(v));
//	
//	return 0;
//}
