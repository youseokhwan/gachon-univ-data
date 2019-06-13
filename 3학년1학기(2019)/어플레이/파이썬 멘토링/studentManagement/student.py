class Student:
    num = 0
    name = ""

    def __init__(self, num, name):
        self.num = num
        self.name = name

    def get_num(self):
        return self.num

    def set_num(self, num):
        self.num = num

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name