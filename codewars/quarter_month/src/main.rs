fn quarter_of(month: u8) -> u8 {
    let month: f64 = month as f64;
    (month / 3.0).ceil() as u8
}

fn main() {
    println!("{}", quarter_of(11))
}
