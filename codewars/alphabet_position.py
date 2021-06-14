import string

def alphabet_position(text):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    ans = []

    for char in text:
        if char in string.ascii_letters:
            ans.append(f"{alphabet.index(char.lower())+1}")

    return " ".join(ans)


text = "The sunset sets at twelve o' clock."
print(alphabet_position(text))