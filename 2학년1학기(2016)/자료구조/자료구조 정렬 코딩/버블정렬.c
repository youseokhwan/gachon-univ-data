//#include <stdio.h>
//void main( )
//{
//	int list[8] = {69, 10, 30, 2, 16, 8, 31, 22};
//	int i, j, temp;
//
//	for(i = 7; i>=0; i--) {
//		for(j = 0; j<=i; j++) {
//			if(list[j-1]>list[j]) {
//				temp = list[j-1];
//				list[j-1] = list[j];
//				list[j] = temp;
//			}
//		}
//	}
//
//	for(i = 0; i<8; i++) {
//		printf("%3d", list[i]);
//	}
//}