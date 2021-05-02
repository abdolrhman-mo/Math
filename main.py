import math


def choose(choices):
    print()
    print("Choose from:")
    for i, choice in enumerate(choices):
        i = i + 1
        print(f"{i}. {choice}")
    print()
    answer = input()
    return int(answer) - 1


def convert(num, operation):
    operation = operation + 1
    if operation == 1:
        print(f"{num} degrees is {num * math.pi/180} radians")
    elif operation == 2:
        print(f"{num} radians is {num * 180/math.pi} degrees")


inp = int(input())

if choose(['convert']) == 0:
    convert(inp, choose(['degrees to radians', 'radians to degrees']))
