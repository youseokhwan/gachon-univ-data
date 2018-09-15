//#include <iostream>
//using namespace std;
//
//char convert(char ch);
//
//void main( )
//{
//	char data1, data2;
//	cout<<"문자 입력 -> ";
//	cin>>data1;
//	data2 = convert(data1);
//	cout<<data2<<endl;
//}
//
//char convert(char ch)
//{
//	if (ch>=65&&ch<=90) { // 대문자
//		ch += 32;
//		return ch;
//	}
//	else if (ch>=97&&ch<=122) { // 소문자
//		ch -= 32;
//		return ch;
//	}
//	else {
//		cout<<"알파벳이 아닙니다.\n";
//		exit(1);
//	}
//}