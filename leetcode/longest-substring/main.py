#!/usr/bin/env python3


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        count = 0
        for i in range(len(s)):

            increment = 1
            while not increment > len(s) + 1:
                substr = s[i:i+increment]
                set_substr = set(s[i:i+increment])
                increment += 1
                if len(set_substr) > count:
                    count = len(set_substr)

                if len(substr) > len(set_substr):
                    break


        return count



if __name__ == "__main__":
    solution = Solution()
    print(solution.lengthOfLongestSubstring("pwwkew"))
