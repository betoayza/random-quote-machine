import quotes from './logic.js';

const randomElement=(array)=>{
    return array.[Math.floor(Math.random()*array.length)];
};

const asds=()=>{
    const vasdad= "1231235453fdfsdfggdsf";
}

$(document).ready(function(){
    $("#text").append("<p>"+randomElement(quotes)+"</p>");
});