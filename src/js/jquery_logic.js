//import quotes from './logic.js';
import quotes from './logic.js';

/* const randomElement=(array)=>{
    return array.[Math.floor(Math.random()*array.length)];
}; */



$(document).ready(function(){
    $("#text").append("<p>"+randomElement(quotes)+"</p>");
   $("#new-quote").hide();
});