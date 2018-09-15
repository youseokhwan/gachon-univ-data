//#include <iostream>
//using namespace std;
//int sum(int *pa, int size); // 함수의 원형 정의
//void main( )
//{
//	int a[ ] = {10,20,30,40,50,60};
//	int size = sizeof(a)/sizeof(a[0]); // 배열 원소의 개수를 구한다.
//
//	int s = sum(a, size); // 함수 호출배열의 시작 주소와 원소의 개수를 전달해 준다.
//
//	cout<<"합 = "<<s<<"\n";
//}
//int sum(int *pa, int size) // 함수의 정의
//{
//	int sum = 0;
//
//	for (int i = 0; i<size; i++)
//		sum += *(pa+i);
//
//	return sum;
//}