#!/usr/bin/env python3

from typing import List


class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        richest = 0
        for account in accounts:
            wealth = sum(account)
            # richest = max(richest, wealth) # alternative
            if wealth > richest:
                richest = wealth


        return richest

    # oneliner
    # def maximumWealth(self, accounts: List[List[int]]) -> int:
    #     return max(map(sum, accounts))

    def __init__(self):
        print(self.maximumWealth([[1, 2, 3], [3, 2, 1]]))


Solution()
