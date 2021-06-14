def solution(s):
    ans = []
    if s == "":
        return ans

    i = 0

    while(i <= len(s)-1):
        char = s[i]
        next_char = s[i+1] if len(s)-1 > i else "_"
        ans.append(f"{char}{next_char}")
        i += 2

    return ans


s = "abc"
print(solution(s))
