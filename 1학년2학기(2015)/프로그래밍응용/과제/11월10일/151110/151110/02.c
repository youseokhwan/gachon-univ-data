//#include <stdio.h>
//#include <string.h>
//
//struct foods {
//	char name[10];
//	double calories;
//};
//
//int main(void)
//{
//	int i;
//	double total = 0;
//	struct foods list[3];
//
//	strcpy(list[0].name, "hamburger");
//	list[0].calories = 30;
//	strcpy(list[1].name, "chicken");
//	list[1].calories = 25;
//	strcpy(list[2].name, "pizza");
//	list[2].calories = 50;
//
//	for (i = 0; i < 3; i++)
//	{
//		printf("%d: %s, %lf\n", i + 1, list[i].name, list[i].calories);
//		total += list[i].calories;
//	}
//
//	printf("Total: %lfkcal\n", total);
//
//	return 0;
//}