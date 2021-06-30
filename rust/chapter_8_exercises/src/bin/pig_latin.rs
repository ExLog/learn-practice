fn main() {
    let text = "konpeko peko peko oi oi".to_string();

    println!("{}", pig_latin(&text));
}

fn pig_latin(text: &str) -> String {
    const VOWELS: [&str; 5] = ["a", "i", "u", "e", "o"];
    let mut latin: Vec<String> = Vec::new();

    for word in text.split_whitespace() {
        let (first, rest) = word.split_at(1);
        if VOWELS.contains(&first) {
            latin.push(format!("{}-hay", word))
        } else {
            latin.push(format!("{}-{}ay", rest, first))
        }
    }

    latin.join(" ")
}
