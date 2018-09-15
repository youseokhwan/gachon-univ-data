//#include <iostream>
//#include <iomanip>
//using namespace std;
//void sub(int(*pa)[4], int(*pb)[4], int(*pc)[4]); // 두 행렬에 대한 차를 구하는 함수의 원형 정의
//void main( )
//{
//	int a[3][4] = {{10,20,30,40},{20,40,60,80},{10,30,50,70}};
//	int b[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};
//	int c[3][4];
//	int row, col;
//	sub(a, b, c);
//	cout<<"두 행렬의 차를 출력하기";
//	cout<<"\n=================\n";
//	for (row = 0; row<3; row++) {
//		for (col = 0; col<4; col++)
//			cout<<setw(7)<<c[row][col];
//		cout<<"\n";
//	}
//}
//void sub(int(*pa)[4], int(*pb)[4], int(*pc)[4]) //두 행렬에 대한 차를 구하는 함수 정의
//{
//	for (int i = 0; i<3; i++)
//		for (int j = 0; j<4; j++)
//			*(*(pc+i)+j) = *(*(pa+i)+j)-*(*(pb+i)+j);
//}