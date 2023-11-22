function addNum(num : number){
    return num + 2;
}

let sum = addNum(4)

console.log("sum - ", sum);

// --------------------------------------------------------------------------

function signUpUser(name: string, email: string, isPaid: boolean) {} 
function loginUser(name: string, email: string, isPaid: boolean = true) {} 


signUpUser("AP", "h@h.com", false)
loginUser("AP", "h@h.com")

export {}

// ---------------------------------------------------------------------------------
