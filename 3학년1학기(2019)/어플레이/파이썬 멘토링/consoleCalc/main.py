# 190502 Applay python study
# Simple console calculator program

import menu
import calc
import log

while True:
    menu.print_title()
    menu.print_menu_list()
    print('select >> ', end='')
    menuNum = input()
    print()

    if menuNum == '1':
        calc.calc()
    elif menuNum == '2':
        log.print_log()
    elif menuNum == '3':
        exit()
