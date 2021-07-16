struct Point<T> {
    x: T,
    y: T,
}

struct ComplexPoint<T, U> {
    x: T,
    y: U,
}

impl<T, U> ComplexPoint<T, U> {
    fn mixup<V, W>(self, other: ComplexPoint<V, W>) -> ComplexPoint<T, W> {
        ComplexPoint {
            x: self.x,
            y: other.y,
        }
    }
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

fn largest_i32(list: &[i32]) -> i32 {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn largest_char(list: &[char]) -> char {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}
// Some type might not implement std::cmp::PartialOrd>
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];

    for item in list {
        if item > largest {
            largest = item;
        }
    }

    &largest
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let result = largest(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];

    let result = largest(&char_list);
    println!("The largest char is {}", result);

    let _integer = Point { x: 9, y: 10 };
    let _float = Point { x: 1.0, y: 4.0 };

    let p = Point { x: 5, y: 10 };
    println!("p.x = {}", p.x());

    let p1 = ComplexPoint { x: 5, y: 10.4 };
    let p2 = ComplexPoint { x: "Hello", y: 'c' };

    let p3 = p1.mixup(p2);

    println!("p3.x = {}, p3.y = {}", p3.x, p3.y);
}
