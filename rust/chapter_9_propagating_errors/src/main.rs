use std::error::Error;
use std::fs::{self, File};
use std::io::{self, Read};

fn main() -> Result<(), Box<dyn Error>> {
    Ok(())
}

fn _read_username_from_file_long_way() -> Result<String, io::Error> {
    let f = File::open("peko.txt");

    let mut f = match f {
        Ok(file) => file,
        Err(e) => return Err(e),
    };

    let mut s = String::new();

    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

fn _read_username_from_file_short_way() -> Result<String, io::Error> {
    let mut f = File::open("peko.txt")?;
    let mut s = String::new();
    f.read_to_string(&mut s)?;
    Ok(s)
}

fn _read_username_from_file_shorter_way() -> Result<String, io::Error> {
    let mut s = String::new();
    File::open("peko.txt")?.read_to_string(&mut s)?;
    Ok(s)
}

fn _read_username_from_file_shortest_way() -> Result<String, io::Error> {
    fs::read_to_string("peko.txt")
}
