fn main() {
    let some_u8_value: Option<u8> = Some(0);

    // match some_u8_value {
    //     Some(3) => println!("three"),
    //     _ => println!("not three"),
    // };

    // Equivelant of code above
    if let Some(3) = some_u8_value {
        println!("three");
    } else {
        println!("not three")
    };
}
