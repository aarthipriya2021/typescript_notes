enum Directions{
    East, 
    West, 
    North,
    South
}

console.log("enum type - ", Directions.South);


enum StatusCode {
    Success = 200,
    Unauthorized = 401,
    ServerError = 500
}

enum StringDirections {
    East = "East",
    West = "West",
    North = "North",
    South = "South"
}

console.log("enum type - ", StringDirections.South);
 

export {}
