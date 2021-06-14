def solution(string, ending):
    if ending == "":
        return True
    len_ending = len(ending)

    return string[-len_ending:] == ending


string = "abcde"
ending = "cde"
print(solution(string, ending))