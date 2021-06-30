use std::{collections::HashMap, io};

fn main() {
    let mut employees: HashMap<String, Vec<String>> = HashMap::new();

    loop {
        let mut command = String::new();

        println!("Enter your command:");
        println!("1. Insert name to department");
        println!("2. Retrieve name");
        println!("3. Exit");

        io::stdin()
            .read_line(&mut command)
            .expect("Failed to read command");

        let command: &str = command.trim();

        if command == "1" {
            println!("Valid input: Add <name> to <deparment name>");
            let mut add_command = String::new();

            io::stdin()
                .read_line(&mut add_command)
                .expect("Failed to read command");

            let mut words = add_command.split_whitespace();

            let name = match words.nth(1) {
                Some(name) => name,
                None => {
                    println!("Invalid input (name)");
                    continue;
                }
            };

            let department = match words.nth(1) {
                Some(department) => department,
                None => {
                    println!("Invalid input (department)");
                    continue;
                }
            };

            println!(
                "Successfully added '{}' to department '{}'",
                name, department
            );

            let e = employees.entry(department.to_string()).or_insert(vec![]);
            e.push(name.to_string());
        } else if command == "2" {
            let mut retrieve_command = String::new();
            println!("Please input existing department name, or else it will show all departments");
            io::stdin()
                .read_line(&mut retrieve_command)
                .expect("Failed to read command");

            // TODO
            continue;
        } else if command == "3" {
            println!("Program stopped");
            break;
        } else {
            println!("Invalid command!");
            continue;
        }
    }
}
