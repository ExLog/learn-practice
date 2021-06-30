use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();

    scores.insert(String::from("Peko"), 10);
    scores.insert(String::from("Miko"), 50);

    let team_name = String::from("Peko");
    let score = scores.get(&team_name);

    match score {
        Some(score) => println!("{}'s score is {}", team_name, score),
        None => println!("None"),
    }

    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }

    overwriting_a_value();
    only_if_no_value();
    update_value_based_on_old_value();
}

fn vectors_to_hashmap() {
    let teams = vec![String::from("Peko"), String::from("Miko")];
    let initial_scores = vec![10, 50];

    let mut scores: HashMap<_, _> = teams.into_iter().zip(initial_scores.into_iter()).collect();
}

fn overwriting_a_value() {
    let mut scores = HashMap::new();

    scores.insert(String::from("Peko"), 10);
    scores.insert(String::from("Peko"), 25);

    println!("{:?}", scores);
}

fn only_if_no_value() {
    let mut scores = HashMap::new();

    scores.insert(String::from("Peko"), 10);

    scores.entry(String::from("Miko")).or_insert(50);
    scores.entry(String::from("Peko")).or_insert(50);

    println!("{:?}", scores);
}

fn update_value_based_on_old_value() {
    let text = "konpeko konpeko konpeko usada pekora peko";

    let mut map = HashMap::new();

    for word in text.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        *count += 1;
    }

    println!("{:?}", map);
}
