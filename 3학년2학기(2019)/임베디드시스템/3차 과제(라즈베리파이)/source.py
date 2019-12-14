import RPi.GPIO as GPIO
import time
import sys
sys.path.append('./keyboard/')
import keyboard
_red, _green, _blue, _blink, _modulation, _buzzer, _music = [False] * 8

GPIO.setmode(GPIO.BCM)
GPIO.setup(16, GPIO.OUT)  # R
GPIO.setup(20, GPIO.OUT)  # G
GPIO.setup(21, GPIO.OUT)  # B
GPIO.setup(24, GPIO.IN)  # PIR
GPIO.setup(12, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # Button
GPIO.setup(25, GPIO.IN)  # Buzzer
GPIO.setup(25, GPIO.OUT)  # Buzzer


def toggle_red():
    global _red

    if _red:
        GPIO.output(16, False)  # R light off
    else:
        GPIO.output(16, True)  # R light on

    _red = not _red  # toggle _red
    print('RED:', not _red, '->', _red)


def toggle_green():
    global _green

    if _green:
        GPIO.output(20, False)  # G light off
    else:
        GPIO.output(20, True)  # G light on

    _green = not _green  # toggle _green
    print('GREEN:', not _green, '->', _green)


def toggle_blue():
    global _blue

    if _blue:
        GPIO.output(21, False)  # B light off
    else:
        GPIO.output(21, True)  # B light on

    _blue = not _blue  # toggle _blue
    print('BLUE:', not _blue, '->', _blue)


def toggle_blink():
    global _blink
    _blink = not _blink
    print('BLINK:', not _blink, '->', _blink)


def toggle_modulation():
    global _modulation
    _modulation = not _modulation
    print('MODULATION:', not _modulation, '->', _modulation)


def toggle_buzzer():
    global _buzzer
    _buzzer = not _buzzer
    print('BUZZER:', not _buzzer, '->', _buzzer)


def toggle_music():
    global _music
    _music = not _music
    print('MUSIC:', not _music, '->', _music)


def buzz():
    pitch = 1000
    duration = 0.1
    period = 1.0 / pitch
    delay = period / 2
    cycles = int(duration * pitch)

    for i in range(cycles):
        GPIO.output(25, True)
        time.sleep(delay)
        GPIO.output(25, False)
        time.sleep(delay)


def music_buzz(__pitch, __duration):
    if __pitch == 0:
        time.sleep(__duration)
        return
    __period = 1.0 / __pitch
    __delay = __period / 2
    __cycles = int(__duration * __pitch)

    for i in range(__cycles):
        GPIO.output(25, True)
        time.sleep(__delay)
        GPIO.output(25, False)
        time.sleep(__delay)


def all_off():
    global _red, _green, _blue, _blink, _modulation, _buzzer, _music
    if _red:
        toggle_red()
    if _green:
        toggle_green()
    if _blue:
        toggle_blue()
    _blink = False
    _modulation = False
    _buzzer = False
    _music = False


keyboard.add_hotkey('r', toggle_red)  # R 입력
keyboard.add_hotkey('g', toggle_green)  # G 입력
keyboard.add_hotkey('b', toggle_blue)  # B 입력
keyboard.add_hotkey('m', toggle_modulation())  # M 입력
keyboard.add_hotkey('x', toggle_blink)  # X 입력
keyboard.add_hotkey('s', toggle_music)  # S 입력
keyboard.add_hotkey('o', all_off)  # O 입력


while True:  # 메인 루프
    try:
        # PIR 감지
        if GPIO.input(24):  # 움직임을 감지했을 때
            if _red:  # if RED on then Blink
                toggle_blink()
            else:  # RED on
                toggle_red()

        # M 입력
        if _modulation:
            if _green:
                toggle_green()
            if _blue:
                toggle_blue()
            if _red:
                toggle_red()

            pwm_led = GPIO.PWM(16, 500)
            pwm_led.start(0)
            for i in range(101):
                pwm_led.ChangeDutyCycle(i)
                time.sleep(0.02)
            pwm_led.stop()

        # Blink 구현
        if _blink:
            if _red:
                GPIO.output(16, False)
            if _green:
                GPIO.output(20, False)
            if _blue:
                GPIO.output(21, False)
            time.sleep(0.5)
            if _red:
                GPIO.output(16, True)
            if _green:
                GPIO.output(20, True)
            if _blue:
                GPIO.output(21, True)

        # Button 구현
        if not GPIO.input(12):  # 버튼이 눌렸을 때
            if _buzzer:  # if Buzzer on then All Off
                all_off()
            else:  # Buzzer on
                toggle_buzzer()

        # Buzzer 구현
        if _buzzer:
            buzz()

        # Music 구현
        if _music:
            # GPIO.setup(25, GPIO.OUT)
            x = 0
            pit = [262, 330, 392, 523, 1047]
            dur = [0.2, 0.2, 0.2, 0.2, 0.2, 0.5]

            for p in pit:
                music_buzz(p, dur[x])
                time.sleep(dur[x] * 0.5)
                x += 1
            # GPIO.setup(25, GPIO.IN)

        time.sleep(0.5)  # 버튼 입력 및 센서 감지 딜레이

    except KeyboardInterrupt:
        print('keyboard interrupt!')
        GPIO.cleanup()
