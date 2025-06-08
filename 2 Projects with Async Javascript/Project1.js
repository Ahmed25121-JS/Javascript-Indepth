let intervalId;
const randomColour = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
for(let i =0; i < 6; i++){
  color += hex[Math.floor(Math.random()*16)]
}
return color
}

function StartChangingColour(){

  // Then we check for null because directly overwriting null can be problematic sometimes
if(intervalId == null){
  intervalId= setInterval(changeBgColour,1000)}

function changeBgColour(){

  document.body.style.backgroundColor = randomColour()
}


}


function stopChangingColour(){
clearInterval(intervalId)
//  we are writing cleaner code here by making intervalId= null 
// the program can still run without this but since we are overwriting the value of intervalId everytime> this approach is better and free's space for memory
intervalId =null;
}

document.querySelector('#start').addEventListener('click',StartChangingColour)




document.querySelector('#stop').addEventListener('click',stopChangingColour)


