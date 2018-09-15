/*
// 사용자로부터 정수 n을 입력받아
// - 1부터 n까지의 합은 for문
// - 1부터 n까지의 홀수의 합은 while문
// - 1부터 n까지의 짝수의 합은 do while문으로 작성하시오

#include <stdio.h>
int main(void)
{
	int n, i, j, k, sum1, sum2, sum3;

	printf("정수 n 입력: ");
	scanf("%d", &n);

	sum1 = 0;
	for(i = 1; i <= n; i++)
		sum1 += i;
	printf("1부터 n까지의 합은 %d입니다.\n", sum1);

	sum2 = 0;
	j = 1;
	while(j <= n)
	{
		if(j % 2 == 0)
			j++;
		else
		{
			sum2 += j;
			j++;
		}
	}
	printf("1부터 n까지의 홀수의 합은 %d입니다.\n", sum2);

	sum3 = 0;
	k = 1;
	do
	{
		if(k % 2 == 0)
		{
			sum3 += k;
			k++;
		}
		else
			k++;
	}while(k <= n);
	printf("1부터 n까지의 짝수의 합은 %d입니다.\n", sum3);

	return 0;
}
*/