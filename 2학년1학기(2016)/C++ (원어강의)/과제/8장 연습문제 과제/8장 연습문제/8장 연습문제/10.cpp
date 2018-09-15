//#include <iostream>
//using namespace std;
//
//struct time { // 시, 분, 초를 하나로 묶어서 관리할 수 있는 구조체 정의
//	int hour, minute, second;
//};
//
//void get(time *list) { // 시, 분, 초를 입력받아 구조체 변수에 저장하는 get() 함수를 주소 호출 방식으로 정의
//	cout<<"시간을 입력하세요(시 분 초) >> ";
//	cin>>list->hour>>list->minute>>list->second;
//}
//
//void prn(time list) { // 시간을 출력하는 prn() 함수를 값 호출 방식으로 정의
//	cout<<list.hour<<"\t"<<list.minute<<"\t"<<list.second<<"\n";
//}
//
//void main( )
//{
//	// 구조체 배열을 선언하면서 초기화하라.
//	struct time list[3];
//	int i;
//
//	for (i = 0; i<3; i++) {
//		get(&list[i]);
//	}
//
//	for (i = 0; i<3; i++) {
//		prn(list[i]);
//	}
//}