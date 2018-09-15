//#include <iostream>
//using namespace std;
//struct namecard {
//	char name[20];
//	char job[30];
//	char tel[20];
//	char email[40];
//};
//void main( )
//{
//	namecard x = {"전수빈","치과의사","356-0868","eldy@naver.com"};
//	namecard y = {"전원지","디자이너","345-0876","onejee@naver.com"};
//	namecard *p;
//	p = &x;
//	cout<<"이름\t직업\t\t연락처\t\t이메일";
//	cout<<"\n===============================================================";
//	cout<<"\n"<<(*p).name<<"\t"<<(*p).job<<"\t"<<(*p).tel<<"\t"<<(*p).email;
//	p = &y;
//	cout<<"\n"<<p->name<<"\t"<<p->job<<"\t"<<p->tel<<"\t"<<p->email;
//	cout<<"\n===============================================================";
//
//	cout<<"\nsizeof(x) => "<<sizeof(x);
//	cout<<"\nsizeof(p) => "<<sizeof(p)<<"\n";
//}