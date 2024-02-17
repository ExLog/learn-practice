#!/usr/bin/env bash

main() {
    result=0
    for ((i = 0; i < ${#1}; i++)); do
        tmp=$((${1:i:1} ** ${#1}))
        result=$((result + tmp))
    done

    [[ $result -eq $1 ]] && echo true || echo false
}

main "$@"
