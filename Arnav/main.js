document.getElementById('Mark').addEventListener('click', markbtn)

function markbtn () {
let name = document.getElementById('answer1').value
let name2 = document.getElementById('answer2').value
let name3 = document.getElementById('answer3').value
let name4 = document.getElementById('answer4').value

    if (name == "scott" && name2 == "freddy" && name3 == "2014" && name4 == "10") {
    document.getElementById ("results").innerHTML = "4/4, 100% Good Job!"
    } 
    
    else if (name == "scott" && name2 == "freddy" && name3 == "2014" || name == "scott" && name2 == "freddy" && name4 == "10" || name == "scott" &&  name3 == "2014" && name4 == "10") {
        document.getElementById ("results").innerHTML = "3/4, 75% way too go"
    } 

    else if (name == "scott" && name2 == "freddy" || name == "scott" && name3 == "2014" || name == "scott" && name4 == "10" ||name2 == "freddy" && name3 == "2014" || name2 == "freddy" && name4 == "10" || name3 == "2014" && name4 == 10 ) {
        document.getElementById("results").innerHTML = "2/4, Ok"
    }
    
    else if(name == "scott" || name2 == "freddy" || name3 == "2014" || name4 == "10" ) {
        document.getElementById ("results").innerHTML = "1/4, 25% Alright"
    } else  {
        document.getElementById("results").innerHTML = "0/4, try again"
    }
}

