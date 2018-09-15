//#include <stdio.h>
//#include <stdlib.h>
//#include <time.h>
//#define SIZE 10
//
//int main()
//{
//   int freq[SIZE] = {0, };
//   int random_num, i;
//   int max = 0;
//   
//   srand((unsigned)time(NULL));
//
//   for (i = 0; i < 100; i++)
//   {
//      random_num = (rand() % 10);
//      freq[random_num]++;
//   }
//
//   max = 0;
//   
//   for (i = 0; i < SIZE; i++)
//   {
//      if (freq[i] != 0)
//         printf("%d의 빈도: %d\n", i+1, freq[i]);
//      if (freq[i] > freq[max])
//         max = i;
//   }
//
//   printf("\n최빈값은 %d입니다.\n", max+1);
//
//   return 0;
//} 