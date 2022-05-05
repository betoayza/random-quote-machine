import quotes from './logic.js';

const randomElement=(array)=>{
    return array.[Math.floor(Math.random()*array.length)];
};

const asds=()=>{}

$(document).ready(function(){
    $("#text").append("<p>"+randomElement(quotes)+"</p>");
});