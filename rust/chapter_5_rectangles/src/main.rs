#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    // Associated function
    // use "::" example vvv
    // struct_name::associated_function(param)
    // Rectangle::square(size)
    fn square(size: u32) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}

// Multiple impl blocks
impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    // Refactoring with struct
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rectangle {
        width: 10,
        height: 40,
    };
    let rect3 = Rectangle {
        width: 60,
        height: 45,
    };

    // Method syntax
    println!(
        "(Struct) The area of rectangle is {} square pixels",
        rect1.area()
    );

    // println!("rect_struct = {}", rect_struct); // doesn't implement fmt::Display

    // doesn't implement fmt::Debug when there is no #[derive(Debug)]
    println!("rect_struct = {:?}", rect1);
    // Pretty print
    println!("rect_struct = {:#?}", rect1);

    println!();

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));

    let hip_to_be_square = Rectangle::square(42);

    println!("hip_to_be_square = {:?}", hip_to_be_square);
}

// fn area_struct(rectangle: &Rectangle) -> u32 {
//     rectangle.width * rectangle.height
// }
