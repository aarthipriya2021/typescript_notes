var Directions;
(function (Directions) {
    Directions[Directions["East"] = 0] = "East";
    Directions[Directions["West"] = 1] = "West";
    Directions[Directions["North"] = 2] = "North";
    Directions[Directions["South"] = 3] = "South";
})(Directions || (Directions = {}));
console.log("enum type - ", Directions.South);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
var StringDirections;
(function (StringDirections) {
    StringDirections["East"] = "East";
    StringDirections["West"] = "West";
    StringDirections["North"] = "North";
    StringDirections["South"] = "South";
})(StringDirections || (StringDirections = {}));
console.log("enum type - ", StringDirections.South);
