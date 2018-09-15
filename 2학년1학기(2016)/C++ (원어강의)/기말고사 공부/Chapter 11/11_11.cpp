//#include <iostream>
//#include <string>
//using namespace std;
//class CStud {
//	char name[30];
//	char hphone[20];
//	char email[30];
//	static int cnt;
//public:
//	CStud(char *n = "성윤정", char *h = "017-777-7777", char *e = "pink@daum.net");
//	~CStud( );
//	void prn( );
//	static void prn_cnt( );
//};
//
//int CStud::cnt = 0;
//
//CStud::CStud(char *n, char *h, char *e)
//{
//	strcpy(name, n);
//	strcpy(hphone, h);
//	strcpy(email, e);
//	cnt++;
//}
//
//CStud::~CStud( )
//{
//	cnt--;
//}
//
//void CStud::prn( )
//{
//	cout<<"이름 : "<<name<<endl;
//	cout<<"핸드폰 : "<<hphone<<endl;
//	cout<<"이메일 : "<<email<<endl;
//}
//
//void CStud::prn_cnt( )
//{
//	cout<<"\n현재까지 등록된 인원수 : "<<cnt<<"\n\n";
//}
//
//void main( )
//{
//	CStud::prn_cnt( );
//
//	CStud man1("전수빈", "010-9087-0975", "subin@pride.com");
//	man1.prn( );
//	CStud man2("전원지", "017-9087-0975", "won@pride.com");
//	man2.prn( );
//	cout<<"\n# 중간에 인원수를 파악합니다.";
//	man2.prn_cnt( );
//	CStud man3;
//	man3.prn( );
//	cout<<"\n클래스의 할당된 메모리 사이즈 : "<<sizeof(CStud);
//	cout<<"\n";
//	CStud::prn_cnt( );
//}