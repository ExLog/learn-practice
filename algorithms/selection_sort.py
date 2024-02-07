#!/usr/bin/env python3

from typing import List


def selection_sort(nums: List[int]):
    new = []

    while len(nums):
        smallest = min(nums)
        new.append(smallest)
        nums.remove(smallest)

    return new


def get_smallest_idx(nums: List[int], searched_idx: int):
    smallest = 0
    for i in range(len(nums)):
        if nums[i] < nums[smallest]:
            smallest = i

    return smallest + searched_idx


def selection_sort_2(nums: List[int]):
    for i in range(len(nums)):
        smallest_idx = get_smallest_idx(nums[i:], i)
        nums[i], nums[smallest_idx] = nums[smallest_idx], nums[i]

    return nums


def selection_sort_3(nums: List[int]):
    for i in range(len(nums)):
        #
        min_idx = i
        for j in range(i, len(nums)):
            if nums[j] < nums[min_idx]:
                min_idx = j

        nums[i], nums[min_idx] = nums[min_idx], nums[i]

    return nums


if __name__ == "__main__":
    nums = [9, 1, 8, 2, 7, 3, 6, 4, 5]

    result = selection_sort_3(nums)

    print(result)
