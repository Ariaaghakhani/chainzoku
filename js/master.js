let _menu = document.querySelectorAll('.menu')

function menuShow(){
    _menu[0].classList.remove('invisible')
    _menu[0].classList.remove('opacity-0')
    // document.querySelectorAll("header figure")[0].classList.add('invsible')
    // document.querySelectorAll("header figure")[0].classList.add('opacity-0')
    console.log(_menu[0].classList);
}
function menuHide(){
    _menu[0].classList.add('invisible')
    _menu[0].classList.add('opacity-0')
    // document.querySelectorAll("header figure")[0].classList.remove('invsible')
    // document.querySelectorAll("header figure")[0].classList.remove('opacity-0')
    console.log(_menu[0].classList);
}


let _body = document.querySelectorAll('body')[0]
let _main = document.querySelectorAll('main')[0]

_main.addEventListener('scroll',()=>{
    let _scroll = _main.scrollTop
    console.log(_scroll);

    document.querySelector('#top>div').style.transform=`translateY(${_scroll/10}%)`


})