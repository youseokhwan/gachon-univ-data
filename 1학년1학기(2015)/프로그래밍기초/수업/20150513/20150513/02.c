/*
// 사용자로부터 메뉴 번호를 입력받아서 수행하는 프로그램을 작성하시오.
// 1. 홀수 짝수 확인
// 2. n까지의 합계 구하기
// 3. n 팩토리얼 구하기(n!)
// 0. 종료

#include <stdio.h>
int main(void)
{
	int select, n, i, j, sum1 = 0, sum2 = 1;

	while(1)
	{
		printf("1. 홀수 짝수 확인\n");
		printf("2. n까지의 합계 구하기\n");
		printf("3. n 팩토리얼 구하기\n");
		printf("0. 종료\n\n");
	
		printf("선택: ");
		scanf("%d", &select);
		
		if(select == 0)
		{
			printf("종료합니다.\n");
			break;
		}
		else
		{
			printf("정수를 입력하시오: ");
			scanf("%d", &n);

			if(select == 1)
			{
				if(n % 2 == 0)
					printf("n은 짝수입니다.\n\n");
				else
					printf("n은 홀수입니다.\n\n");
			}	
			else if(select == 2)
			{
				for(i = 1; i <= n; i++)
					sum1 += i;
				printf("1부터 n까지의 합은 %d입니다.\n\n", sum1);
			}
			else if(select == 3)
			{
				for(j = 1; j <= n; j++)
					sum2 *= j;
				printf("n 팩토리얼은 %d입니다.\n\n", sum2);
			}
		}
	}

	return 0;
}
*/