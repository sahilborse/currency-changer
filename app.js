

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
    'russia':"ruble"
  };
  let amt ={
    'india': 82.2818,
    'america':1,
    'europe':0.9195,
    'russia':79.4455,
  };
  var a=amnt.value
  var b = country.value;
  var c= otp.value; 
  let outp = a*(amt[c])/(amt[b]);
  console.log(outp);
  let newFile = "The Amount in " + count[c] +" is=" + outp;
  
  document.querySelector("#output").innerHTML = newFile
}
 












