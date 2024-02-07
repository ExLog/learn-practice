#!/usr/bin/env bash

main() {
    # if [ -z "$1" ]; then
    #     echo "One for you, one for me."
    # else
    #     echo "One for $1, one for me."
    # fi

    # better solution
    # ${parameter:-word}
    # If parameter is unset or null, the expansion of word is substituted. Otherwise, the value of parameter is substituted.
    # https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html
    echo "One for ${1:-you}, one for me."

}

main "$1"
