#!/usr/bin/env bash

main() {
    # $# is argument counts
    if [ $# != 2 ]; then
        echo "Usage: hamming.sh <string1> <string2>"
        exit 1
    fi

    # ${#var} is length
    if [ ${#1} != ${#2} ]; then
        echo "strands must be of equal length"
        exit 1
    fi

    dna1="$1"
    dna2="$2"

    # hammign distance
    hd=0
    for ((i = 0; i < ${#1}; i++)); do
        l1="${dna1:i:1}"
        l2="${dna2:i:1}"

        if [[ "$l1" != "$l2" ]]; then
            ((hd++))
        fi
    done

    echo "$hd"
}

main "$@"
