import sys
import random  # 난수


class UpDown:
    name = ''  # 유저의 이름
    target = 0  # 정답
    count = 0  # 시도 횟수

    def __init__(self, name):
        self.name = name
        self.target = random.randint(1, 100)  # 1부터 100 사이의 정수 반환

    def start(self):
        print('환영합니다', self.name, '님!')
        print('<<Up Down 게임>>')
        print('1부터 100까지 랜덤으로 지정된 숫자를 맞추는 게임입니다.')
        print('정답보다 낮은 숫자를 입력하면 UP!')
        print('정답보다 높은 숫자를 입력하면 DOWN!')

    def check(self, value):
        self.count = self.count + 1  # 시도 횟수 1 증가
        if value == self.target:  # 정답이면
            print('정답입니다!')
            print(self.count, '번 시도하셨습니다!')
            sys.exit(0)  # 강제 종료
        elif value < self.target:  # 입력 값이 정답보다 작으면
            print('UP!')
        else:  # 입력 값이 정답보다 크면
            print('DOWN!')


game = UpDown('석환')
game.start()
while True:
    print('값 입력 >> ', end='')
    num = int(input())
    game.check(num)
