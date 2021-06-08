use std::io;

fn main() {
    println!("Enter the n:");

    let mut n = String::new();

    io::stdin().read_line(&mut n).expect("Cannot read value");

    // Shadowing
    let n: i32 = n.trim().parse().expect("Cannot parse n");

    fibonacci(n);
}

fn fibonacci(n: i32) {
    let mut starting_number: (i32, i32) = (0, 1);
    let mut now: i32;
    for _ in 1..n + 1 {
        now = starting_number.0 + starting_number.1;
        starting_number.0 = starting_number.1;
        starting_number.1 = now;

        println!("{}", now)
    }
}
