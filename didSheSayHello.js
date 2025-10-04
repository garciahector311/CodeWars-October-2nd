// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
function validateHello(greetings) {
  //make it lowercase
  let allGreetings = greetings.toLowerCase()
  //conditonal to compare the greetings to the list 
  if(allGreetings === "hello"){
    return true
  } else if (allGreetings === "ciao"){
    return true
  } else if (allGreetings === "salut"){
    return true 
  } else if (allGreetings === "hallo"){
    return true
  } else if (allGreetings === "hola"){
    return true
  } else if (allGreetings === "ahoj"){
    return true 
  } else if (allGreetings === "czesc"){
    return true
  } else{
    return "this is not a valid entry"
  }
 
}

//this has not been uploaded yet
//first attempt

//2nd attempt
function validateHello(greetings) {
  //make it lowercase
  let allGreetings = greetings.toLowerCase()
  //maybe loop through and do a comparison
  for(let i = 0; i<allGreetings.length;i++){
    if(allGreetings.includes("hello")) {
      return true 
  
  } else if (allGreetings.includes("ciao")){
    return true
  } else if (allGreetings.includes("salut")){
    return true 
  } else if (allGreetings.includes("hallo")){
    return true
  } else if (allGreetings.includes("hola")){
    return true
  } else if (allGreetings.includes("ahoj")){
    return true 
  } else if (allGreetings.includes("czesc")){
    return true
  } else{
    return false
  }
  }
  //conditonal to compare the greetings to the list 
  
 
}
console.log(validateHello('ARe! arE? hOmBRE; HoW? HomBrE? ARe'))

//correct answer
function validateHello(greetings) {
  //make it lowercase
  let allGreetings = greetings.toLowerCase()
  //maybe loop through and do a comparison
  const isGreetingPresent = (
    allGreetings.includes("hello") ||
    allGreetings.includes("ciao") ||
    allGreetings.includes("salut") ||
    allGreetings.includes("hallo") ||
    allGreetings.includes("hola") ||
    allGreetings.includes("ahoj") ||
    allGreetings.includes("czesc")
  );
  
  return isGreetingPresent;
  
 
}
console.log(validateHello('ARe! arE? hOmBRE; HoW? HomBrE? ARe'))
