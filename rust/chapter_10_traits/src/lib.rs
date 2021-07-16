use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}
pub trait Summary {
    fn summarize_author(&self) -> String;

    // without default implementation
    // fn summarize(&self) -> String;
    fn summarize(&self) -> String {
        format!("(Read more from {}...)", self.summarize_author())
    }
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

// use defualt implementation of summarize
impl Summary for NewsArticle {
    fn summarize_author(&self) -> String {
        format!("{}", self.author)
    }
}

// Override default trait implementation
// impl Summary for NewsArticle {
//     fn summarize(&self) -> String {
//         format!("{}, by {} ({})", self.headline, self.author, self.location)
//     }
// }

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize_author(&self) -> String {
        format!("@{}", self.username)
    }

    fn summarize(&self) -> String {
        format!("{}: {}", self.summarize_author(), self.content)
    }
}

// impl trait syntax
// pub fn notify(item: &impl Summary) {
//     println!("Breaking news! {}", item.summarize());
// }

// trait bound syntax
pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}

// can have different types
// in example NewsArticle and Tweet which both implement Summary
// pub fn notify(item: &impl Summary, item2: &impl Summary) {}

// have to be the same type
// Will specify the type first in example Tweet
// now T is Tweet
// which mean you can't use another type
// pub fn notify<T: Summary>(item: &T, item2: &T) {}

/*
must have 2 traits
*/

// multiple impl trait syntax
// pub fn notify(item: &(impl Summary + Display)) {}

// multiple trait bound syntax
// pub fn notify<T: Summary + Display>(item: &T) {}

// instead of writing like this
// fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {}

// use where clause, like this
// fn some_function<T, U>(t: &T, u: &U) -> i32
// where
//     T: Display + Clone,
//     U: Clone + Debug,
// {
// }

fn returns_summarizeable() -> impl Summary {
    Tweet {
        username: String::from("usadapekora"),
        content: String::from("konpeko!!!!!!!!"),
        reply: false,
        retweet: false,
    }
}
