//#include <iostream>
//using namespace std;
//void main()
//{
//	int num1, num2, result;
//	char op; // operator
//
//	cout << "두 정수와 +,-,*,/중 하나의 연산자를 입력하되\n";
//	cout << "정수 연산자 정수 순으로 입력하세요(3 + 4) : ";
//	cin >> num1 >> op >> num2;
//
//	if (op == '+')
//		result = num1 + num2;
//	else if (op == '-')
//		result = num1 - num2;
//	else if (op == '*')
//		result = num1 * num2;
//	else if (op == '/' && num2 != 0)
//		result = num1 / num2;
//
//	if (op == '/' && num2 == 0)
//		cout << "0으로 나눌 수 없습니다.\n";
//	else
//		cout << num1 << op << num2 << " = " << result << "\n";
//}