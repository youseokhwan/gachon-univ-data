//#include <iostream>
//using namespace std;
//
//struct score {
//	char name[10];
//	int kor, eng, mat, tot;
//	double ave;
//};
//
//void init(score *s);
//void prn(score *s);
//
//void main( )
//{
//	score s[5];
//
//	for (int i = 0; i<5; i++)
//		init(&s[i]);
//
//	cout<<"\n이름\t국어\t영어\t수학\t총점\t평균\n";
//	cout<<"-----------------------------------------------\n";
//	for (int i = 0; i<5;i++)
//		prn(&s[i]);
//}
//
//void init(score *s)
//{
//	cout<<"이름을 입력하시오 -> ";
//	cin>>s->name;
//	cout<<"국어 점수를 입력하시오 -> ";
//	cin>>s->kor;
//	cout<<"영어 점수를 입력하시오 -> ";
//	cin>>s->eng;
//	cout<<"수학 점수를 입력하시오 -> ";
//	cin>>s->mat;
//
//	s->tot = s->kor+s->eng+s->mat;
//	s->ave = s->tot/3.0;
//}
//
//void prn(score *s)
//{
//	cout<<s->name<<"\t"<<s->kor<<"\t"<<s->eng<<"\t"<<s->mat<<"\t"<<s->tot<<"\t"<<s->ave<<"\n";
//}