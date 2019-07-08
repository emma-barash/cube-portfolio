var box = document.querySelector('.single-rb');
var optionGroup = document.querySelector('#option');
var button = document.getElementById('dropdown');
var list = document.getElementById('option');
var revealIcon = document.getElementsByClassName('hide');
var thisClass = '';
// var iconClass = '';

// experimenting with class names to reveal the icon



function checkedSide(e) {
    var checkedOption = e.target.id;
    var changedClass = 'show-' + checkedOption;
    if(thisClass){
        box.classList.remove(thisClass); 
    }
    box.classList.add(changedClass);
    console.log(box.classList)
    
    thisClass = changedClass;
    // showing the icon?
    // var showIcon = 'reveal-' + checkedOption;
    // if(iconClass){
        // revealIcon.classList.remove(iconClass);
        // revealIcon.classList.add('hide');
    //     revealIcon.className = '';
    //     revealIcon.className = 'hide'
    // }
    // iconClass = showIcon;
    // revealIcon.className = '';
    // // revealIcon.classList.add(showIcon);
    // revealIcon[1].className = iconClass;
    // console.log(revealIcon.classList);
};



list.addEventListener('click', (e) => checkedSide(e));

// when the cube turns, the icon should be revealed and hidden once more when the cube rotates again.

// revealIcon is an array of divs with the class name `hide`.

// if there were to be a `switch-case` statement iterating through

// console.log(box.childNodes[1].className)                 // this is the side's identification class name 

// console.log(box.childNodes[1].childNodes[1].className)   // this is the "hide" class within the side
console.log(revealIcon)


// switch(box.childNodes){
//     case box.childNodes[1]:
//         box.childNodes[1].childNodes[1].className.remove('hide');
//         break;
// }












    