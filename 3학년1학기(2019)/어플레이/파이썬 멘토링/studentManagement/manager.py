import student


class Manager:
    list = []

    def register(self):
        print('--- 학생 등록 ---')
        print('학번 : ', end='')
        num = int(input())
        print('이름 : ', end='')
        name = input()
        self.list.append(student.Student(num, name))
        print('등록되었습니다.')

    def name_search(self):
        print('이름 검색: ', end='')
        name = input()
        for i in self.list:
            if name == i.get_name():
                print('학번은', i.get_num())
                return
        print('없습니다.')

    def print_all(self):
        if len(self.list) == 0:
            print('등록된 학생이 없습니다.')
            return

        for i in self.list:
            print('학번:', i.get_num(), '이름:', i.get_name())


manager = Manager()
while True:
    print('1 전체목록 조회, 2 추가, 3 검색 >> ', end='')
    num = int(input())
    if num == 1:
        manager.print_all()
    elif num == 2:
        manager.register()
    elif num == 3:
        manager.name_search()
    else:
        print('다시 입력해주세요')