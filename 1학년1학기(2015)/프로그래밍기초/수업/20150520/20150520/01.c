/* 약수를 출력하는 프로그램

#include <stdio.h>

int input;

int get_divisor();
int main(void)
{
	printf("수 입력: ");
	scanf("%d", &input);

	get_divisor();

	return 0;
}

int get_divisor()
{
	int i;

	printf("약수: ");

	for(i = 1; i <= input; i++)
	{
		if(input % i == 0)
			printf("%d ", i);
	}

	printf("\n");
}
*/