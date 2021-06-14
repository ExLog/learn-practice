def make_readable(seconds):
    minutes = 0
    hours = 0

    while seconds >= 60:
        seconds -= 60
        minutes += 1
        if minutes >= 60:
            minutes -= 60
            hours += 1

    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"



seconds = 5
print(make_readable(seconds))