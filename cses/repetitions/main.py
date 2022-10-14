n = input()

count = 0

prev = None
prev_count = 0

for ch in n:
    if ch != prev:
        if prev_count > count:
            count = prev_count
        prev_count = 0

    prev_count += 1

    prev = ch

# for the last time, check the prev count
if prev_count > count:
    count = prev_count

print(count)
