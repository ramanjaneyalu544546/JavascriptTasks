//document.getElementById
let txt = document.getElementById("ptxt")
txt.style.fontSize = "60px"

document.getElementById("myBtn").style.backgroundColor = "lightblue"

//document.getElementByClassName
let domtxt = document.getElementsByClassName("htxt")
domtxt[0].style.color="green"


// getElementsByTagName
let brd = document.getElementsByTagName("h3")
brd[0].style.border = "2px solid orange"

//querySelector
document.querySelector("h4").style.fontStyle = "italic"

// querySelectorAll
function changeMargin(item){
    document.querySelectorAll('.item').forEach(el => {
        el.style.margin = "50px 100px"
    })
}
changeMargin()

// var elements = document.querySelectorAll(".item")
// for(var i=0; i<elements.length;i++){
//     elements[i].style.margin = "30px"
// }

// Change Styles of Unique Element About Me
let aboutMeElement = document.getElementById('aboutMe');
aboutMeElement.style.backgroundColor = 'yellow';
aboutMeElement.style.padding = '20px';
aboutMeElement.style.borderRadius = '10px';
aboutMeElement.style.fontWeight = 'bold';