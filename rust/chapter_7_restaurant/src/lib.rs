mod back_of_house;
mod front_of_house;

// with self
// use self::front_of_house::hosting;

// re-exporting names with pub use
pub use crate::front_of_house::hosting;

use back_of_house::Appetizer;
use back_of_house::Breakfast;

fn _serve_order() {}

pub fn eat_at_restaurant() {
    // Absolute path
    // crate::front_of_house::hosting::add_to_waitlist();
    // crate::front_of_house::hosting::add_to_waitlist();

    // use keywoard
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();

    // Relative path
    front_of_house::hosting::add_to_waitlist();

    let mut meal = Breakfast::summer("Rye");

    meal.toast = String::from("Wheat");
    println!("I'd like {} toast please", meal.toast);

    let _order1 = Appetizer::Soup;
    let _order2 = Appetizer::Salad;
}
