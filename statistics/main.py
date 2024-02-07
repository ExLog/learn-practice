from itertools import combinations, permutations

members = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

print(list(permutations(members, 2)))
print()
print(list(combinations(members, 2)))
