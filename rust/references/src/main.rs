fn main() {
    let s1 = String::from("hello");

    let (s2, len) = calculate_length_takes_ownership(s1);
    println!("The length of '{}' is {}.", s2, len);

    let s3 = String::from("hello");
    let len2 = calculate_length(&s3);
    println!("The length of '{}' is {}.", s3, len2);

    let mut s4 = String::from("hello");
    // Reference is not mutable
    change_immutable(&s4);
    change_mutable(&mut s4);
    println!("s4 = {}", s4);
}

fn calculate_length_takes_ownership(s: String) -> (String, usize) {
    let length = s.len();

    (s, length)
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

fn change_immutable(_some_string: &String) {
    // some_string.push_str(", world"); // error
}

fn change_mutable(some_string: &mut String) {
    some_string.push_str(", world");
}
