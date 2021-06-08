fn main() {
    let s = String::from("Konpeko Nyahello");
    let first_word = first_word(&s);

    println!("First word: {}", first_word);

    let second_word = second_word(&s);
    println!("Second word: {}", second_word);
}

fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    // i : index, item: ascii code
    for (i, &item) in bytes.iter().enumerate() {
        // println!("i: {} item: {}", i, item);
        if item == b' ' {
            // return slicing 0 until index i
            return &s[..i];
        }
    }

    // slicing the whole string
    &s[..]
}

fn second_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    let mut found_first = false;
    let mut first_index: usize = 0;

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' && !found_first {
            first_index = i + 1;
            found_first = true;
        } else if item == b' ' && found_first {
            return &s[first_index..i];
        } else if found_first && i == bytes.len() - 1 {
            return &s[first_index..(bytes.len())];
        }
    }

    ""
}
