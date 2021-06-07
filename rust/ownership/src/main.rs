fn main() {
    let s = String::from("hello");

    takes_ownership(s);
    // println!("{}", s); // no longer valid. will cause an error

    let x = 5;

    makes_copy(x);
    println!("x = {}", x); // valid here

    let s1 = gives_ownership();
    let s2 = String::from("hello");
    // s2 is moved into
    // takes_and_gives_back, which also
    // moves its return value into s3
    let s3 = takes_and_gives_back(s2);

    println!("s1 = {}", s1);
    // println!("{}", s2); // error
    println!("s2 = {}", s3);
}

fn takes_ownership(some_string: String) {
    println!("some_string = {}", some_string);
}

fn makes_copy(some_integer: i32) {
    println!("some_integer = {}", some_integer);
}

fn gives_ownership() -> String {
    let some_string = String::from("hello");
    some_string
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string
}
