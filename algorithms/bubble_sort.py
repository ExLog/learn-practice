#!/usr/bin/env python3

from typing import List


def bubble_sort(nums: List[int]):
    itt = 0

    for _ in range(0, len(nums)):
        # 4 iterations
        itt += 1
        for j in range(0, len(nums) - 1):
            # 4 iterations
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]

    # 4 * 4 = 16 iterations
    # print(itt)
    return nums


if __name__ == "__main__":
    nums = [5, 7, 3, 1]

    result = bubble_sort(nums)

    print(result)
