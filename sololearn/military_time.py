# Input Format:
# A string that includes the time, then a space and the indicator for AM or PM.
#
# Output Format:
# A string that includes the time in a 24 hour format (XX:XX)
#
# Sample Input:
# 1:15 PM
#
# Sample Output:
# 13:15
def convert_to_military(time):
    period = time[-2:]  # last 2 characters
    time = time.split()[0]
    if period == "PM" and not time.startswith("12"):
        hour, minute = time.split(":")
        hour = int(hour) + 12
        return f"{hour}:{minute}"
    elif period == "AM" and time.startswith("12"):
        return "00:00"
    else:
        return time


if __name__ == "__main__":
    time = input()
    print(convert_to_military(time))
