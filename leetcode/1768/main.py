# Merge Strings Alternately
class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = ""
        for i in range(max(len(word1), len(word2))):
            try:
                result += word1[i]
            except IndexError:
                pass

            try:
                result += word2[i]
            except IndexError:
                pass

        return result


sol = Solution()
print(sol.mergeAlternately("abc", "pqr"))
print(sol.mergeAlternately("ab", "pqrs"))
print(sol.mergeAlternately("abcd", "pq"))
