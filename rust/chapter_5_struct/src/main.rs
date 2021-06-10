struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

// struct UserError {
//     username: &str, // Missing lifetime specifier.
//     email: &str,    // Missing lifetime specifier
//     sign_in_count: u64,
//     active: bool,
// }

fn main() {
    // Immutable struct
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("Nakiri"),
        active: true,
        sign_in_count: 1,
    };
    println!("user1: {}, {}", user1.email, user1.username);

    // Mutable struct and struct update syntax
    let mut user2 = User {
        email: String::from("someone@example.com"),
        username: String::from("exlog"),
        ..user1
    };
    user2.email = String::from("anotheremail@example.com");
    println!("user2: {}, {}", user2.email, user2.username);

    let test_user = build_user(String::from("test@test.com"), String::from("test"));
    println!("test_user: {}, {}", test_user.email, test_user.username);
}

fn build_user(email: String, username: String) -> User {
    User {
        email,
        username,
        active: true,
        sign_in_count: 1,
    }
}

fn tuple_structs() {
    struct Color(i32, i32, i32);
    struct Point(i32, i32, i32);

    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
