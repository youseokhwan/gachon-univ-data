#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct ListNode{ // 단순 연결 리스트의 노드 구조 정의
	char data[10];
	struct ListNode* link;
} listNode;

typedef struct{ // 리스트의 헤드 노드의 구조 정의
	listNode* head;
} linkedList_h;

linkedList_h* createLinkedList_h( );
void freeLinkedList_h(linkedList_h*);
void addLastNode(linkedList_h*, char*);
void reverse(linkedList_h*);
void deleteLastNode(linkedList_h*);
void printList(linkedList_h*);

linkedList_h* createLinkedList_h(){ // 공백 연결 리스트 생성 연산
	linkedList_h* L;
	L = (linkedList_h*)malloc(sizeof(linkedList_h)); // 헤드 노드 할당
	L->head = NULL;
	return L;
}

void addLastNode(linkedList_h* L, char* x) { // 리스트의 마지막 노드 삽입 연산
	listNode* newNode;
	listNode* p;
	newNode = (listNode*)malloc(sizeof(listNode)); // 삽입할 새 노드 할당
	strcpy(newNode->data, x); // 새 노드의 데이터 필드에 x 저장
	newNode->link = NULL;
	if (L->head==NULL) { // 현재 리스트가 공백인 경우
		L->head = newNode;
		return;
	}
	p = L->head;
	while (p->link!=NULL) p = p->link;
	p->link = newNode;
}

void reverse(linkedList_h* L) { // 리스트의 노드 순서를 역순으로 바꾸는 연산
	listNode* p;
	listNode* q;
	listNode* r;

	p = L->head;
	q = NULL;
	r = NULL;

	while (p!=NULL) { // 노드의 연결을 반대로 바꾸기
		r = q;
		q = p;
		p = p->link;
		q->link = r;
	}
	L->head = q;
}

void deleteLastNode(linkedList_h* L) { // 리스트의 마지막 노드 삭제 연산
	listNode* previous;
	listNode* current;
	if (L->head==NULL) return; // 공백 리스트인 경우, 삭제 연산 중단
	if (L->head->link==NULL) { // 리스트에 노드가 한 개만 있는 경우
		free(L->head); // 첫 번째 노드의 메모리를 해제
		L->head = NULL; // 리스트 시작 포인터를 null로 설정
		return;
	}
	else { // 리스트에 노드가 여러 개 있는 경우
		previous = L->head;
		current = L->head->link;
		while (current->link!=NULL) {
			previous = current;
			current = current->link;
		}
		free(current);
		previous->link = NULL;
	}
}

void freeLinkedList_h(linkedList_h* L) { // 리스트 전체 메모리 해제 연산
	listNode* p;
	while (L->head!=NULL) {
		p = L->head;
		L->head = L->head->link;
		free(p);
		p = NULL;
	}
}

void printList(linkedList_h* L) { // 노드 순서대로 리스트를 출력하는 연산
	listNode* p;
	printf("L = (");
	p = L->head;
	while (p!=NULL) {
		printf("%s", p->data);
		p = p->link;
		if (p!=NULL) printf(", ");
	}
	printf(")\n");
}

// 207p 107번째줄 할차례