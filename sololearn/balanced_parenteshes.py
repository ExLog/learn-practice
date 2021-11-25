def balanced(expression):
    stack = []

    for ch in expression:
        if ch == "(":
            stack.insert(0, ch)
        elif ch == ")":
            try:
                stack.pop(0)
            except IndexError:
                return False

    if len(stack) == 0:
        return True

    return False


if __name__ == "__main__":
    print(balanced(input()))
