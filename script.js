console.log("welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("one.wav")
let gameover1 = new Audio("gameover.wav")
let turn = "x"
let isgameover= false;

// Function to change the Turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x"
}

//Function to check for a win
const checkwin = ()=> {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2 ,2,2.5,0],
        [3, 4, 5 ,2,6.5,0],
        [6, 7, 8 ,2,11,0],
        [0, 3, 6 ,-2,6.5,90],
        [1, 4, 7 ,2,6.5,90],
        [2, 5, 8 ,7 ,6.5, 90],
        [0, 4, 8 ,2 ,6, 45],
        [2, 4, 6 ,2 ,6, 135],
    ]
    wins.forEach(e =>{
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !=='')){
        document.querySelector('.info').innerText = boxtexts[e[0]].innerText +" won"
        gameover1.play();
        isgameover=true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="33vh"
        document.querySelector('.line').style.width ="8vw";
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    
        }
    })
}

// game logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
             if(!isgameover){
            document.getElementsByClassName("info")[0].innerHTML = "Turn for "+ turn;
             }
        }
    })
})

// add on click clear all items in box
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    });
    turn = "x";
    isgameover = false
    document.querySelector('.line').style.width ="0vw";
    document.getElementsByClassName("info")[0].innerHTML = "Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0vh"

})