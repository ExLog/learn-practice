def to_jaden_case(string):
    ans = []
    words = string.split()
    for word in words:
        ans.append(word[0].upper() + word[1:])

    return " ".join(ans)


string = "konpeko konpeko konpeko"
print(to_jaden_case(string))