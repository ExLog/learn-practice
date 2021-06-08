fn main() {
    // let x = 5;
    // let y = &x;

    // let s = "hello";
    // let s2 = String::from("hello");

    // println!("x is {}", x);
    // println!("y is {}", y);

    let s = String::from("Hello");
    some_function2(s);
    // S borrowed because some_function2 takes the ownership
    // println!("{}", s); // Error

    let s2 = String::from("Hello");
    // some_function3 will take the ownership but return the ownership back
    // because it returns the string back
    let s3 = some_function3(s2);

    println!("{}", s3);

    // Copy trait
    // This will not take the ownership because the data type is i32
    // i32 is stored in stack, and not heap
    let x = 5;
    some_function(x);

    println!("x = {}", x);
}

fn some_function(num: i32) -> i32 {
    num
}

fn some_function2(str: String) {
    println!("{}", str);
}

fn some_function3(str: String) -> String {
    str
}
