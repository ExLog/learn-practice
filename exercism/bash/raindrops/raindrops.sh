#!/usr/bin/env bash

# attempt 1
main() {
    res=""
    # (( )) is an arithmetic operation
    if [ $(($1 % 3)) -eq 0 ]; then
        res="Pling"
    fi

    if [ $(($1 % 5)) -eq 0 ]; then
        res=$res"Plang"
    fi

    if [ $(($1 % 7)) -eq 0 ]; then
        res=$res"Plong"
    fi

    echo "${res:-$1}"

}

# # attempt 2
# main() {
#     res=""
#
#     if (($1 % 3 == 0)); then
#         res+="Pling"
#     fi
#
#     if (($1 % 5 == 0)); then
#         res+="Plang"
#     fi
#
#     if (($1 % 7 == 0)); then
#         res+="Plong"
#     fi
#
#     echo "${res:-$1}"
# }

main "$1"
