//#include <stdio.h>
//#include <string.h>
//
//struct table {
//	char word[100];
//	int freq;
//};
//
//struct table list[100];
//int limit = 0;
//
//void list_print();
//void list_put(char *p);
//
//int main(void)
//{
//	char seps[] = " ";
//	char *token;
//	char s[100];
//
//	printf("텍스트 입력: ");
//	gets(s);
//
//	token = strtok(s, seps);
//
//	while (token != NULL)
//	{
//		list_put(token);
//		token = strtok(NULL, seps);
//	}
//
//	list_print();
//
//	return 0;
//}
//
//void list_print()
//{
//	int i;
//
//	printf("단어   빈도\n");
//	for (i = 0; i < limit; i++)
//	{
//		printf("%s   %d\n", list[i].word, list[i].freq);
//	}
//}
//
//void list_put(char *p)
//{
//	int i;
//	int found = 0;
//
//	for (i = 0; i < limit; i++)
//	{
//		if (strcmp(p, list[i].word) == 0)
//		{
//			list[i].freq++;
//			found = 1;
//		}
//	}
//
//	if (found == 0)
//	{
//		strcpy(list[limit].word, p);
//		list[limit].freq = 1;
//		limit++;
//	}
//
//	return;
//}