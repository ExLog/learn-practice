use std::collections::HashMap;
use std::thread;
use std::time::Duration;
use std::fmt::Display;

struct Cacher<T, U>
where
    T: Fn(U) -> U,
    U: Display
{
    calculation: T,
    value: HashMap<U, U>,
}

impl<T, U> Cacher<T, U>
where
    T: Fn(U) -> U,
    U: Display
{
    fn new(calculation: T) -> Cacher<T, U> {
        Cacher {
            calculation,
            value: HashMap<U, U>::new(),
        }
    }

    fn value(&mut self, arg: U) -> U {
        match self.value.get(&arg) {
            Some(v) => *v,
            None => {
                let calculation_result = (self.calculation)(arg);

                self.value.insert(arg, calculation_result);
                calculation_result
            }
        }
    }
}

fn generate_workout<T>(intensity: T, random_number: u32) {
    let mut expensive_result = Cacher::new(|num| {
        println!("calculating slowly...");
        thread::sleep(Duration::from_secs(2));
        num
    });

    if intensity < 25 {
        println!("Today, do {} pushups!", expensive_result.value(intensity));
        println!("Next, do {} situps!", expensive_result.value(intensity))
    } else {
        if random_number == 3 {
            println!("Take a break today! Remember to stay hydrated!");
        } else {
            println!(
                "Today, run for {} minutes!",
                expensive_result.value(intensity)
            );
        }
    }
}

fn main() {
    let simulated_user_specified_value = 10;
    let simulated_random_number = 7;

    generate_workout(simulated_user_specified_value, simulated_random_number);
}

#[test]
fn call_with_different_values() {
    let mut c = Cacher::new(|a| a);

    let _v1 = c.value(1);
    let v2 = c.value(2);
    let _v3 = c.value(2);
    let _v4 = c.value(2);

    assert_eq!(v2, 2);
}
