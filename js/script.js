 let visitor = prompt("enter your name ");
 document.getElementById("username").innerHTML = visitor;

let cities = ["GRW","LHR","FSd","ISL", "KKR"];
for(let i=0; i<cities.length; i++)
{
    let num = i+1;
    document.getElementById("getvalue").innerHTML += num + ')' + cities[i] + '&emsp;';

}

function simpleAlert(){
    alert("This is an alert message")
}

document.getElementById("clear").onclick = function () {
    document.getElementById("input").value = "";
}


document.getElementById("all-clear").onclick = function () {
    document.getElementById("output").innerHTML= "";
}

function printName () {
    document.getElementById("output").innerHTML= "";
 let name =  document.getElementById("input").value ;
 if(name ===""){
        alert("enter your name")
 }
 else{
    document.getElementById("output").innerHTML = name
 }
}

function printCities () {
     document.getElementById("output").innerHTML = "";
    for(let i=0; i<cities.length ; i++)
    {
        let num = i+1;
        document.getElementById("output").innerHTML += num +')' + cities[i] + '<br>' ;
    }
}

function addCitiy () {
    // document.getElementById("input").value = "";
 let city =    document.getElementById("input").value
 if(!city)
 {
    alert("please enter the city to add")
    return;
 }
 else{
            cities.push(city);
            document.getElementById("output").innerHTML = '<span style = "font-size:20px; color: red; "> '+ city + '"</span> has been successfully addded to cities'; 
 }
 
}

function GenerateTable () {
    document.getElementById("output").innerHTML = "";
    let x = +prompt("Enter number to generate table" )
    let s = +prompt("Table start from digit")
    let e = +prompt("ending point of table")
    for(s ; s<=e; s++)
    {   let r = x * s;
        document.getElementById("output").innerHTML += x   + '*' + s + '=' + r + '<br>';
    }
}