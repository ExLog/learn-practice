#!/usr/bin/env python3

from typing import List


def bubble_sort(nums: List[int]):
    for _ in range(0, len(nums)):
        for j in range(0, len(nums) - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]

    return nums


def bubble_sort_2(nums: List[int]):
    for i in range(0, len(nums)):
        for j in range(0, len(nums) - i - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]

    return nums


if __name__ == "__main__":
    nums = [9, 1, 8, 2, 7, 3, 6, 4, 5]

    result = bubble_sort_2(nums)

    print(result)
