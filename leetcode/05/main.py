def is_palindrome(a: str):
    return a == a[::-1]


class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ""
        check = ""

        for i, char in enumerate(s):
            check = char

            next_same_char_idx = s.find(char, i + 1)
            while next_same_char_idx != -1:
                check = s[i : next_same_char_idx + 1]

                if is_palindrome(check) and len(check) > len(longest):
                    longest = check

                next_same_char_idx = s.find(char, next_same_char_idx + 1)

        if longest == "":
            return check

        return longest


if __name__ == "__main__":
    print(Solution().longestPalindrome("babad"))  # bab
    print(Solution().longestPalindrome("cbbd"))  # bb
    print(Solution().longestPalindrome("aacabdkacaa"))  # aca
    print(Solution().longestPalindrome("ccc"))  # ccc
    print(Solution().longestPalindrome("xaabacxcabaaxcabaax"))  # xaabacxcabaax
