#!/usr/bin/env bash

main() {
    IFS="$IFS-_*"
    acr=""
    for word in $@; do
        char=${word:0:1}
        acr+=${char^}
    done

    echo "$acr"
}

main "$@"
