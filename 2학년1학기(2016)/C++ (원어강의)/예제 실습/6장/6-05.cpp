//#include <iostream>
//using namespace std;
//void main( )
//{
//	int a[3][4] = {{10,20,30,40},{20,40,60,80},{10,30,50,70}};
//	int b[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};
//	int c[3][4];
//	int row, col; // int r, c;로 선언하면 오류 (교재 오류)
//	for (row = 0; row<3; row++)
//		for (col = 0; col<4; col++)
//			c[row][col] = a[row][col]+b[row][col];
//
//	cout<<" 두 행렬의 합을 출력하기";
//	cout<<"\n=========================\n";
//	for (row = 0; row<3; row++) {
//		for (col = 0; col<4; col++)
//			cout<<" "<<c[row][col];
//		cout<<"\n";
//	}
//}