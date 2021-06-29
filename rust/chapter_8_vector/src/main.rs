fn main() {
    // Explicily declaring the type
    // let v: Vec<i32> = Vec::new();

    // Vec with initial value
    // let v = vec![1, 2, 3];

    let mut v = Vec::new();
    v.push(5);
    v.push(6);
    v.push(7);
    v.push(8);

    let v = vec![1, 2, 3, 4, 5];

    let third: &i32 = &v[2];
    println!("The third elementt is {}", third);

    match v.get(3) {
        Some(num) => println!("The third element is {}", num),
        None => println!("There is no third element"),
    }

    loop_over_vector();
    vector_of_enums();
}

// fn immutable_borrow() {
//     let mut v = vec![1, 2, 3, 4, 5];

//     let first = v[0];

//     v.push(6);

//     println!("The first element is {}", first);
// }

fn loop_over_vector() {
    // immutable
    let v = vec![100, 32, 57];
    for i in &v {
        println!("{}", i);
    }

    let mut v = vec![100, 32, 57];
    for i in &mut v {
        *i += 50;
    }

    println!("v is now: {:?}", v);
}

fn vector_of_enums() {
    #[derive(Debug)]
    enum SpreadsheetCell {
        Int(i32),
        Float(f64),
        Text(String),
    }

    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("Blue")),
        SpreadsheetCell::Float(10.12),
    ];

    for i in row {
        println!("{:?}", i)
    }
}
