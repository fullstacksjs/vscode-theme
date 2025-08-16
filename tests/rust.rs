// syntax_highlight_test.rs
// This file is intentionally verbose to demonstrate most Rust keywords and syntax.

#![allow(unused)]
#![feature(generic_const_exprs)]

extern crate core;
use std::collections::{HashMap, HashSet};
use std::fmt::{self, Debug, Display};
use std::ops::{Add, Deref};

mod greetings {
    pub fn hello() {
        println!("Hello from module!");
    }

    pub mod nested {
        pub const PI: f64 = 3.14159;
    }
}

#[macro_export]
macro_rules! my_macro {
    ($val:expr) => {
        println!("Macro says: {}", $val);
    };
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
struct Point<T> {
    x: T,
    y: T,
}

impl<T: Add<Output = T> + Copy> Point<T> {
    pub fn add(&self, other: Point<T>) -> Point<T> {
        Point {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

impl<T> Default for Point<T>
where
    T: Default,
{
    fn default() -> Self {
        Point {
            x: Default::default(),
            y: Default::default(),
        }
    }
}

trait Speak {
    fn speak(&self);
}

impl Speak for String {
    fn speak(&self) {
        println!("{}", self);
    }
}

enum Direction {
    North,
    South,
    East,
    West,
}

enum OptionLike<T> {
    Some(T),
    None,
}

union MyUnion {
    int_val: i32,
    float_val: f32,
}

static GLOBAL_COUNT: i32 = 42;
const MAX_SIZE: usize = 1024;

fn async_example() -> impl std::future::Future<Output = i32> {
    async {
        let value = 10;
        value + 1
    }
}

fn pattern_matching_example(dir: Direction) {
    match dir {
        Direction::North => println!("Going up"),
        Direction::South => println!("Going down"),
        _ => println!("Going sideways"),
    }
}

fn control_flow() {
    let mut count = 0;
    'outer: loop {
        count += 1;
        if count > 5 {
            break 'outer;
        }
        if count % 2 == 0 {
            continue;
        }
    }

    for i in 0..5 {
        println!("for loop: {}", i);
    }

    let mut n = 5;
    while n > 0 {
        n -= 1;
    }
}

unsafe fn unsafe_example() {
    let u = MyUnion { int_val: 42 };
    println!("Union value: {}", unsafe { u.int_val });
}

fn generics_and_bounds<T, U>(t: T, _u: U)
where
    T: Display + Clone,
    U: Debug,
{
    println!("T is {}", t);
}

fn lifetimes<'a>(x: &'a str) -> &'a str {
    x
}

fn main() {
    greetings::hello();
    my_macro!("Highlight test!");

    let p1 = Point { x: 1, y: 2 };
    let p2 = Point { x: 3, y: 4 };
    let p3 = p1.add(p2);
    println!("p3 = {:?}", p3);

    let s = String::from("Hello");
    s.speak();

    let opt: OptionLike<i32> = OptionLike::Some(10);
    if let OptionLike::Some(v) = opt {
        println!("Value: {}", v);
    }

    let mut map: HashMap<String, i32> = HashMap::new();
    map.insert("one".to_string(), 1);

    let set: HashSet<i32> = HashSet::new();
    println!("Set length = {}", set.len());

    pattern_matching_example(Direction::East);
    control_flow();
    unsafe_example();
    generics_and_bounds(123, "debug me");
    println!("{}", lifetimes("life"));

    let future = async_example();
    let _ = futures::executor::block_on(future);

    println!("Global: {}, Max size: {}", GLOBAL_COUNT, MAX_SIZE);
}
