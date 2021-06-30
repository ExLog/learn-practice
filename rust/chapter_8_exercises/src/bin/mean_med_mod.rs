use std::collections::HashMap;

fn main() {
    let mut nums = vec![1, 1, 1, 4, 5, 2, 4, 4, 5, 1];

    nums.sort_unstable();
    let average = average(&nums);
    let mode = mode(&nums);
    let median = median(&nums);

    println!("average: {}", average);
    println!("mode: {}", mode);
    println!("median: {}", median);
}

fn average(nums: &[i32]) -> f64 {
    let length = nums.len();
    let mut total = 0;

    for num in nums {
        total += num;
    }

    total as f64 / length as f64
}

fn median(nums: &[i32]) -> f64 {
    let length = nums.len();

    if length % 2 == 0 {
        (nums[(length / 2)] + nums[(length / 2) - 1]) as f64 / 2.0
    } else {
        nums[length / 2] as f64
    }
}

fn mode(nums: &[i32]) -> i32 {
    let mut mode = (0, 0);
    let mut total_count = HashMap::new();

    for num in nums {
        let count = total_count.entry(num).or_insert(0);
        *count += 1;
        if count > &mut mode.1 {
            mode.0 = *num;
            mode.1 = *count;
        }
    }

    mode.0
}
