//typedef struct { // 행렬 원소를 저장하기 위한 구조체 term 정의
//	int row;
//	int col;
//	int value;
//} term;
//
//void smTranspose(term a[], term b[]) {
//	int m, n, v, i, j, p;
//	m = a[0].row; // 희소행렬 a의 행 수
//	n = a[0].col; // 희소행렬 b의 행 수
//	v = a[0].value; // 희소행렬 a에서 0이 아닌 원소 수
//	b[0].row = n; // 전치행렬 b의 행 수
//	b[0].col = m; // 전치행렬 b의 열 수
//	b[0].value = v; // 전치행렬 b의 원소 수
//	if (v > 0) {
//		p = 1;
//		for (i = 0; i < n; i++) // 희소행렬 a의 열별로 전치 반복 수행
//			for (j = 1; j <= v;j++) // 0이 아닌 원소 수에 대해서만 반복 수행
//				if (a[j].col == i) { // 현재의 열에 속하는 원소가 있으면 b[]에 삽입
//					b[p].row = a[i].col;
//					b[p].col = a[j].row;
//					b[p].value = a[j].value;
//					p++;
//				}
//	}
//}