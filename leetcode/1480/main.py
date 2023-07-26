#!/usr/bin/env python3

from typing import List


class Solution:
    # def runningSum(self, nums: List[int]) -> List[int]:
    #     ans = []
    #     for idx, num in enumerate(nums):
    #         ans.append(num + sum(nums[:idx]))
    #
    #     return ans

    # def runningSum(self, nums: List[int]) -> List[int]:
    #     running_sum = 0
    #     for idx in range(len(nums)):
    #         running_sum += nums[idx]
    #         nums[idx] = running_sum
    #
    #     return nums

    def runningSum(self, nums: List[int]) -> List[int]:
        for i in range(1, len(nums)):
            nums[i] = nums[i - 1] + nums[i]

        return nums

    def __init__(self):
        print(self.runningSum([1, 2, 3, 4]))
        print(self.runningSum([1, 1, 1, 1, 1]))
