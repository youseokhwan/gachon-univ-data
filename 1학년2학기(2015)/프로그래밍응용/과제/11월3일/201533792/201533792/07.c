//#include <stdio.h>
//#include <conio.h>
//
//int main(void)
//{
//	char text_p[] = "_______";
//	char text_a[] = "hangman";
//	char answer;
//	int i;
//
//	printf("문제: ");
//	while (strcmp(text_p, text_a) != 0)
//	{
//		printf("%s\n", text_p);
//		printf("추측: ");
//		answer = getch();
//
//		for (i = 0; i < strlen(text_a); i++)
//		{
//			if (answer == text_a[i])
//				text_p[i] = answer;
//		}
//	}
//
//	printf("%s\n", text_p);
//
//	return 0;
//}