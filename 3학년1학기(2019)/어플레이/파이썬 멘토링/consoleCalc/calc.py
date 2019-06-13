def calc():
    print('<< 1. Calc >>')
    while True:
        # 계산 종료하는 알고리즘 구현해야 함
        print('수식 입력 >> ', end='')
        num1, op, num2 = input().split()

        if op == '+':
            calc_sum(int(num1), int(num2))
        elif op == '-':
            calc_sub(int(num1), int(num2))
        elif op == '*':
            calc_mul(int(num1), int(num2))
        elif op == '//':
            calc_div(int(num1), int(num2))
        elif op == '%':
            calc_mod(int(num1), int(num2))
        else:
            print('error! 다시 입력해주세요')


def calc_sum(first, second):  # 덧셈 계산
    result = first + second
    print('=', result)


def calc_sub(first, second):  # 뺄셈 계산
    result = first - second
    print('=', result)


def calc_mul(first, second):  # 곱셈 계산
    result = first * second
    print('=', result)


def calc_div(first, second):  # 나눗셈 계산
    if second == 0:
        print('error! 0으로 나눌 수 없습니다')
        return

    result = first // second
    print('=', result)


def calc_mod(first, second):
    result = first % second
    print('=', result)
