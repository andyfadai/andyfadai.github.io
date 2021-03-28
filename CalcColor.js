let btn = document.getElementById("change");
let home = document.getElementById("home");
let text = document.getElementById("colour");

let generator = function() {
      newColour = '#' +
        (Math.random()*0xFFFFFF<<0).toString(16);
        console.log(newColour.length);
        if(newColour.length < 7) {
            generator();
        }
}

btn.addEventListener('click', function() {
    generator();


    document.body.style.background = newColour;
    btn.style.color = newColour;
    home.style.color = newColour;
    text.innerText = newColour;
});