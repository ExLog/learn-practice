fn main() {
    // Tuples
    let tup = (500, 6.4, 1);

    // let (x, y, z) = tup;

    let x = tup.0;
    let y = tup.1;
    let z = tup.2;
    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);
    println!("The value of z is: {}", z);

    // Array :fixed size

    let months: [&str; 12] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
}
