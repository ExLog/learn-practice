def find_outlier(integers):
    odd = []
    even = []

    for integer in integers:
        if integer % 2 != 0:
            even.append(integer)
        else:
            odd.append(integer)

    # Forgive me, my future self.
    # my code sucks
    if len(even) > len(odd):
        return odd[0]
    else:
        return even[0]


integers = [1, 3, 7, 19, 25, 20]
print(find_outlier(integers))