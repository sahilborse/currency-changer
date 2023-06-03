

let country=document.querySelector("#input")
let amnt=document.querySelector("#amount");
let otp=document.querySelector("#country");
function errorHandler(error){
  console.log("Error occured");
  alert("An error occured please try again later",error);
}



function changer(){
  let count={
    'india':"rupees",
    'america':"dollar",
    'europe':"euro",
    'russia':"ruble",
    'japan':"yen",
    'afghanisthan':"afghani",
    'australian':"dollar",
    'bahraini':"dinar",
    'china':"yuan"
  };
  let amt ={
    'india': 82.2818,
    'america':1,
    'europe':0.9195,
    'russia':79.4455,
    'japan':1.6983,
    'afghanisthan':87.15,
    'australian':1.5124,
    'bahraini':0.377,
    'china':49.5936,
  };
  var a=amnt.value
  var b = country.value.toLowerCase();
  var c= otp.value.toLowerCase; 
  console.log(b)
  let outp = a*(amt[c])/(amt[b]);
  console.log(outp);
  let newFile = "The Amount in " + count[c] +" is=" + outp;
  
  document.querySelector("#output").innerHTML = newFile
}
 












