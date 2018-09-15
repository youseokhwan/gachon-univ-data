/*
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(void)
{
	int answer;
	int guess;
	int tries = 0;

	srand(time(NULL));
	answer = rand();

	do
	{
		printf("정답을 추측하여 보시오: ");
		scanf("%d", &guess);
		tries++;
		
		if (guess > answer)
			printf("제시한 정수가 높습니다.\n");
		else if (guess < answer)
			printf("제시한 정수가 낮습니다.\n");
	} while (guess != answer);

	printf("축하합니다. 시도횟수 = %d\n", tries);

	return 0;
}
*/