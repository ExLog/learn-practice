import string

def is_pangram(s):
    for char in string.ascii_lowercase:
        if char not in s.lower():
            return False

    return True


print(is_pangram("the quick brown fox jumps over the lazy dog"))