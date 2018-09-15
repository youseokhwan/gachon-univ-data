//#include <stdio.h>
//void main( )
//{
//	int list[8] = {69, 10, 30, 2, 16, 8, 31, 22};
//	int i, j, temp, max;
//
//	for(i = 0; i<7; i++) {
//		max = i;
//		for(j = i+1; j<8; j++) {
//			if(list[j]>list[max])
//				max = j;
//		}
//		temp = list[i];
//		list[i] = list[max];
//		list[max] = temp;
//	}
//	
//	for(i = 0; i<8; i++) {
//		printf("%3d", list[i]);
//	}
//}