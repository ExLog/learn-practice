def title_case(title, minor_words=''):
    minor_words = [word.lower() for word in minor_words.split(' ')]
    title_case = title.title().split(' ')
    for i in range(len(title_case)):
        if i == 0:
            continue

        if title_case[i].lower() in minor_words:
            title_case[i] = title_case[i].lower()

    return " ".join(title_case)


title = "a bc"
minor_words = "bc"
print(title_case(title, minor_words))