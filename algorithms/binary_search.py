# /usr/bin/env python3
import random


def binary_search(items, item):
    low = 0
    high = len(items) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = items[mid]
        print("Guessing", guess)

        if item == guess:
            return guess

        if guess < item:
            print("Too low!")
            low = mid + 1
        else:
            print("Too high!")
            high = mid - 1

        print("Low:", items[low])
        print("High:", items[high])
        print()

    return None


if __name__ == "__main__":
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    item = random.choice(items)
    print("Item:", item)
    print(binary_search(items, item))
