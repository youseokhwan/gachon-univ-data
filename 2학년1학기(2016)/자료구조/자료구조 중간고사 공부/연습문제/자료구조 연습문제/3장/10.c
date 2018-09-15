//#include <stdio.h>
//
//int Fibonacci(int);
//
//void main( )
//{
//	int Fib_list[10];
//	int i;
//
//	for (i = 0; i<10; i++) {
//		Fib_list[i] = Fibonacci(i);
//	}
//
//	for (i = 0; i<10; i++) {
//		printf("%d ", Fib_list[i]);
//	}
//	printf("\n");
//}
//
//int Fibonacci(int num)
//{
//	int output;
//
//	if (num==0||num==1)
//		output = 1;
//	else
//		output = Fibonacci(num-2)+Fibonacci(num-1);
//
//	return output;
//}