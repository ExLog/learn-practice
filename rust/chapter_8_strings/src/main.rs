fn main() {
    // Mutable empty String
    // let mut s = String::new();

    // let data = "initial contents";
    // let s = data.to_string();
    // or directly
    let s = "initial contents".to_string();

    let hello = String::from("こんぺここんぺここんぺこー");
    println!("hello: {}", hello);

    // let mut s2 = String::from("foo");
    // s2.push_str("bar");

    let mut s1 = String::from("foo");
    let s2 = "bar";
    s1.push_str(s2);
    println!("s1 is {}", s1);

    let mut s3 = String::from("lo");
    s3.push('l');
    concat_string();

    iter_over_strings();
}

fn concat_string() {
    let s1 = String::from("Hello,");
    let s2 = String::from("world!");

    let s3 = s1 + &s2;

    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");

    // let s = s1 + "-" + &s2 + "-" + &s3;
    let s = format!("{}-{}-{}", s1, s2, s3);

    println!("s is: {}", s);
}

fn iter_over_strings() {
    for b in "こ".chars() {
        println!("{}", b);
    }
}
