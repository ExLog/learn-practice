use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Guess the number!");

    // Generating random number
    let mut guessed: u32 = 0;

    let secret_number = rand::thread_rng().gen_range(1..101);

    loop {
        println!("Please input your guess.");
        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = guess.trim().parse().expect("Please input a number");

        match guess.cmp(&secret_number) {
            Ordering::Less => {
                println!("Too small!")
            }
            Ordering::Greater => println!("Too Big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
        guessed += 1;
    }
    println!("You guessed {} times!", guessed)
}
