months = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12,
}


def convert_num_format(date):
    month, day, year = date.split("/")

    return f"{day}/{month}/{year}"


def convert_str_format(date):
    month, day, year = date.split()
    day = day.split(",")[0]

    return f"{day}/{months[month]}/{year}"


if __name__ == "__main__":
    date = input()

    if date[0].isalpha():
        print(convert_str_format(date))
    else:
        print(convert_num_format(date))
