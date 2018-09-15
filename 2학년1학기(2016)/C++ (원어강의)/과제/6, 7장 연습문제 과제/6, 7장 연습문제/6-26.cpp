//#include <iostream>
//#include <iomanip>
//using namespace std;
//void main( )
//{
//	int score[5][3] = {{90,75,50},{40,85,60},{50,50,40},{60,60,50},{80,80,70}};
//
//	int total_of_sub[3] = {0};
//	double avg_of_sub[3];
//	int max_of_sub[3], min_of_sub[3];
//
//	for (int i = 0; i<3; i++)
//		for (int j = 0; j<5; j++)
//			total_of_sub[i] += score[j][i];
//
//	for (int i = 0; i<3; i++)
//		avg_of_sub[i] = total_of_sub[i]/5;
//
//	for (int i = 0; i<3; i++)
//	{
//		max_of_sub[i] = score[0][i];
//		min_of_sub[i] = score[0][i];
//	}
//
//	for (int i = 0; i<3; i++)
//		for (int j = 0; j<5; j++)
//		{
//			if (score[j][i]>max_of_sub[i]) max_of_sub[i] = score[j][i];
//			if (score[j][i]<min_of_sub[i]) min_of_sub[i] = score[j][i];
//		}
//
//	cout<<"\t과목1\t과목2\t과목3\n";
//	cout<<"총점\t"<<total_of_sub[0]<<"\t"<<total_of_sub[1]<<"\t"<<total_of_sub[2]<<"\n";
//	cout<<"평균\t"<<avg_of_sub[0]<<"\t"<<avg_of_sub[1]<<"\t"<<avg_of_sub[2]<<"\n";
//	cout<<"최대\t"<<max_of_sub[0]<<"\t"<<max_of_sub[1]<<"\t"<<max_of_sub[2]<<"\n";
//	cout<<"최소\t"<<min_of_sub[0]<<"\t"<<min_of_sub[1]<<"\t"<<min_of_sub[2]<<"\n\n";
//
//	int total_of_student[5] = {0};
//	double avg_of_student[5];
//	int max_of_student[5], min_of_student[5];
//	int rank[5] = {1,1,1,1,1};
//
//	for (int i = 0; i<5; i++)
//		for (int j = 0; j<3; j++)
//			total_of_student[i] += score[i][j];
//
//	for (int i = 0; i<5; i++)
//		avg_of_student[i] = total_of_student[i]/3.0;
//
//	for (int i = 0; i<5; i++)
//	{
//		max_of_student[i] = score[i][0];
//		min_of_student[i] = score[i][0];
//	}
//
//	for (int i = 0; i<5; i++)
//		for (int j = 0; j<3; j++)
//		{
//			if (score[i][j]>max_of_student[i]) max_of_student[i] = score[i][j];
//			if (score[i][j]<min_of_student[i]) min_of_student[i] = score[i][j];
//		}
//
//	for (int i = 0; i<5; i++)
//		for (int j = 0; j<5; j++)
//			if (total_of_student[i]<total_of_student[j])
//				rank[i]++;
//
//	cout<<"학번\t총점\t평균\t\t최대\t최소\t등수\n";
//	for (int i = 0; i<5; i++)
//		cout<<i+1<<"\t"<<total_of_student[i]<<"\t"<<avg_of_student[i]<<"\t\t"<<max_of_student[i]<<"\t"<<min_of_student[i]<<"\t"<<rank[i]<<"\n";
//}