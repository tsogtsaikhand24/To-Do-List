import time
import sys

def printLyrics():
    RED = "\033[35m"
    RESET = "\033[0m"

    lines = [
        ("♪ Би хэт ягаан туяа ♪", 0.4),
        ("♪ Шинэ охин чинь миний хажууд мяа♪", 0.4),
        ("♪ Муур хулгана болж тоглоно чамайг хөөгөөд меов ♪", 0.4),
        ("♪ Менежэр байхгүй надаа хэрэггүй пи-ар ♪", 0.4),
        ("♪ Уралдааны машин миний хажууд киа ♪", 0.4),
        ("♪ Нарийхан бэлхүүстэй болохоор уудаггүй пиво ♪", 0.4),
        ("♪ Би гоё байна уу? ♪", 0.2),
        ("♪ Намайг чи ав ♪", 0.2),
        ("♪ Сүүлийн удаа хараад ав пока CIAO ♪", 0.4),
    ]

    for text, delay in lines:
        for char in text:
            sys.stdout.write(f"{RED}{char}{RESET}")
            sys.stdout.flush()
            time.sleep(0.04)
        print()
        time.sleep(delay)

if __name__ == "__main__":
    printLyrics()
