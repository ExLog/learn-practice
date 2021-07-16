use chapter_10_traits::notify;
use chapter_10_traits::{NewsArticle, Summary, Tweet};

fn main() {
    let tweet = Tweet {
        username: String::from("usadapekora"),
        content: String::from("konpeko!!!!!!!!"),
        reply: false,
        retweet: false,
    };

    println!("1 new tweet: {}", tweet.summarize());

    let article = NewsArticle {
        headline: String::from("Coco graduated from HoloLive!"),
        location: String::from("Japan"),
        author: String::from("YAGOO"),
        content: String::from("Oh no kiryukai.."),
    };

    println!("New article available! {}", article.summarize());

    // Trait as parameter
    notify(&article);
    notify(&tweet);
}
