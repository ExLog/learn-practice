use std::fs::File;
use std::io::ErrorKind;

fn main() {
    unwrap_with_action();
    expect_with_action();

    let f = File::open("peko.txt");

    let f = match f {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("peko.txt") {
                Ok(f) => f,
                Err(e) => panic!("Problem creating the file: {}", e),
            },
            other_error => panic!("Problem opening the file: {:?}", other_error),
        },
    };

    // A more seasoned Rustacean might write this
    let f = File::open("peko.txt").unwrap_or_else(|error| {
        if error.kind() == ErrorKind::NotFound {
            File::create("peko.txt").unwrap_or_else(|error| {
                panic!("Problem creating the file: {}", error);
            })
        } else {
            panic!("Problem opening the file: {}", error);
        }
    });
}

fn unwrap_with_action() {
    let f = File::open("peko.txt").unwrap();
}

fn expect_with_action() {
    let f = File::open("peko.txt").expect("Failed to open peko.txt");
}
