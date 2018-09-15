//#include <iostream>
//using namespace std;
//
//int calculator(int a, int b, char op);
//
//void main( )
//{
//	int a, b, c;
//	char op;
//	cout<<"두 정수와 +,-,*,/중 하나의 연산자를 입력하세요(3+5) -> ";
//	cin>>a>>op>>b;
//	c = calculator(a, b, op);
//	cout<<c<<endl;
//}
//
//int calculator(int a, int b, char op)
//{
//	if (op=='+')
//		return a+b;
//	else if (op=='-')
//		return a-b;
//	else if (op=='*')
//		return a*b;
//	else if ((op=='/')&&(b!=0))
//		return a/b;
//	else
//	{
//		cout<<"잘못된 수식입니다.\n";
//		exit(1);
//	}
//}