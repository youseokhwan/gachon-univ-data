#include <stdio.h>
#include <string.h>

char s[] = "Man is immortal, because he has a soul";
char seps[] = " ,\t\n";
char *token;
char *토큰[10] = { NULL };
int i = 0;

int main(void)
{
	token = strtok(s, seps);

	while (token != NULL)
	{
		printf("토큰: %s\n", token);
		토큰[i] = token;
		i++;
		token = strtok(NULL, seps);
	}

	for (i = 0; i < 8; i++)
		printf("%s\n", 토큰[i]);
	
	return 0;
}