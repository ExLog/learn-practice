import re

def increment_string(strng):
    pattern = r"\d+$"

    result = re.search(pattern, strng)

    if result is None:
        strng += "1"
        return strng

    len_result = len(result[0])
    inc = int(result[0]) + 1
    ans = strng.replace(result[0], str(inc).zfill(len_result))

    return ans


print(increment_string("shikopi0045"))