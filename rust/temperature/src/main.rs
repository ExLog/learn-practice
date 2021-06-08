use std::io;

fn main() {
    println!("Please select the conversion method:");
    println!("1. Celcius to Fahrenheit");
    println!("2. Fahrenheit to Celcius");

    let mut conversion = String::new();
    let mut value = String::new();

    println!("Please enter the conversion method: ");
    io::stdin()
        .read_line(&mut conversion)
        .expect("Cannot read conversion method");

    println!("Please enter the temperature: ");
    io::stdin()
        .read_line(&mut value)
        .expect("Cannot read value");

    let value: f32 = value
        .trim()
        .parse()
        .expect("Cannot parse value. Value is not number");

    // Shadowing to trim the input result
    //read_line will also include the new line (\n)
    let conversion = conversion.trim();

    if conversion == "1" {
        println!("{}°C is: {}°F", value, convert_c_to_f(value));
    } else if conversion == "2" {
        println!("{}°F is: {}°C", value, convert_f_to_c(value));
    } else {
        println!("Invalid conversion method. Please select 1 or 2")
    }
}

fn convert_c_to_f(celcius: f32) -> f32 {
    (celcius * 1.8) + 32.0
}

fn convert_f_to_c(fahrenheit: f32) -> f32 {
    (fahrenheit - 32.0) / 1.8
}
