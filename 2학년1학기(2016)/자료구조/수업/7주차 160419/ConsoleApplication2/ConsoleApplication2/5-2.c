//#include <stdio.h>
//#include <stdlib.h>
//
//typedef struct ListNode { // 다항식 리스트의 노드 구조 정의
//	float coef;
//	int expo;
//	struct ListNode* link;
//} ListNode;
//
//typedef struct ListHead { // 다항식 리스트의 헤더 노드 구조 정의
//	ListNode* head;
//} ListHead;
//
//ListHead* createLinkedList(void) // 공백 다항식 리스트 생성 연산
//{
//	ListHead* L;
//	L = (ListHead *)malloc(sizeof(ListHead));
//	L->head = NULL;
//	return L;
//}
//
//void addLastNode(ListHead* L, float coef, int expo)	// 다항식 리스트에 마지막 노드 삽입 연산
//{
//	ListNode* newNode;
//	ListNode* p;
//	newNode = (ListNode *)malloc(sizeof(ListNode));
//	newNode->coef = coef;
//	newNode->expo = expo;
//	newNode->link = NULL;
//	if (L->head==NULL) { // 현재 다항식 리스트가 공백인 경우,
//		L->head = newNode; // 삽입하는 새 노드를 리스트의 시작 노드로 설정한다.
//		return;
//	}
//	else { // 현재 다항식 리스트가 공백이 아닌 경우,
//		p = L->head;
//		while (p->link!=NULL) { // 리스트의 마지막 노드를 찾아서
//			p = p->link;
//		}
//		p->link = newNode; // 현재의 마지막 노드 뒤에 새 노드를 연결한다.
//	}
//}
//
//void addPoly(ListHead* A, ListHead* B, ListHead* C) // 두 다항식의 합을 구하는 연산
//{
//	ListNode* pA = A->head;
//	ListNode* pB = B->head;
//	float sum;
//
//	while (pA && pB) { // 두 다항식에 노드가 있는 동안 반복 수행
//		if (pA->expo==pB->expo) {
//			sum = pA->coef+pB->coef;
//		}
//	}
//}

#include <stdio.h>
#include <stdlib.h>

typedef struct listnode {
	float coef;
	int expo;
	struct listnode* link;
} listnode;

typedef struct listhead {
	listnode* head;
} listhead;

listhead* createlinkedlist(void)
{
	listhead* L;
	L = (listhead *)malloc(sizeof(listhead));
	L->head = NULL;
	return L;
}

void addlastnode(listhead* L, float coef, int expo)

{
	listnode* newnode;
	listnode* p;
	newnode = (listnode *)malloc(sizeof(listnode));
	newnode->coef = coef;
	newnode->expo = expo;
	newnode->link = NULL;
	if (L->head==NULL) {
		L->head = newnode;
		return;
	}

	else {
		p = L->head;
		while (p->link!=NULL) {
			p = p->link;
		}

		p->link = newnode;
	}
}

void addpoly(listhead* A, listhead* B, listhead* C)

{
	listnode* pA = A->head;
	listnode* pB = B->head;
	float sum;

	while (pA && pB) {
		if (pA->expo==pB->expo) {
			sum = pA->coef+pB->coef;
			addlastnode(C, sum, pA->expo);
			pA = pA->link; pB = pB->link;
		}

		else if (pA->expo > pB->expo) {
			addlastnode(C, pA->coef, pA->expo);
			pA = pA->link;
		}

		else {
			addlastnode(C, pB->coef, pB->expo);
			pB = pB->link;
		}
	}

	for (; pA!=NULL; pA = pA->link) {
		addlastnode(C, pA->coef, pA->expo);
	}

	for (; pB!=NULL; pB = pB->link) {
		addlastnode(C, pB->coef, pB->expo);
	}
}

void printpoly(listhead* L)
{
	listnode* p = L->head;
	for (; p; p = p->link) {
		printf("%3.0fx^%d", p->coef, p->expo);
	}
}

int main(void) {
	listhead *A, *B, *C;

	A = createlinkedlist( );
	B = createlinkedlist( );
	C = createlinkedlist( );

	addlastnode(A, 4, 3);
	addlastnode(A, 3, 2);
	addlastnode(A, 5, 1);
	printf("\n A(x)=");
	printpoly(A);

	addlastnode(B, 3, 4);
	addlastnode(B, 1, 3);
	addlastnode(B, 2, 1);
	addlastnode(B, 1, 0);
	printf("\n B(x)=");
	printpoly(B);

	addpoly(A, B, C);
	printf("\n C(x)=");
	printpoly(C);

	getchar( );
}