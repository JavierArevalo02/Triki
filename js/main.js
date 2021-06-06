const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const tree = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven  = document.getElementById('7');
const eight = document.getElementById('8');
const playeruno = document.getElementById("playeruno");
const playerdos = document.getElementById("playerdos");
const form = document.getElementById("form");
var gameboard = document.getElementById("gameboard");
var PlayerRegister = document.getElementById("PlayerRegister");
const StatusMessage = document.querySelector('.MessageNotification');
var number = 10;
//WinningCombinatiosPo =  [["po0","po1", "po2"],["po3","po4", "po5"],["po6","po7", "po8"],["po0","po3", "po6"],["po1","po4", "po7"],["po2","po5", "po8"],["po0","po4", "po8"],["po2","po4", "po6"]];
//WinningCombinatiosPt =  [["pt0","pt1", "pt2"],["pt3","pt4", "pt5"],["pt6","pt7", "pt8"],["pt0","pt3", "pt6"],["pt1","pt4", "pt7"],["pt2","pt5", "pt8"],["pt0","pt4", "pt8"],["pt2","pt4", "pt6"]];
WINNINGS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

GameBoardState = ["", "", "", "", "", "", "", "", ""];


WinMessage = () => `The player ${player.value} wins`;
DrawMessage = () => `the game is draw`;
PlayerMessage = () => `player ${player.value} turn`;

player = playeruno;
let GameActive = true;

form.addEventListener("submit", e=>{
    e.preventDefault()
    if( playeruno.value.length > 1 && playerdos.value.length>1){
        PlayerRegister.style.display = 'none'
        gameboard.style.display = 'block'
        main()
    }
}
)

function main(){
    game()
    listeners()
}

function game(){
    turn()
}

function turn(){

        if(player == playeruno){
            player = playerdos
        } else {
            player = playeruno
        }
        showmessage(PlayerMessage())
        eventclick()
    
}

function eventclick(){
    zero.addEventListener('click',paint)
    one.addEventListener('click',paint)
    two.addEventListener('click',paint)
    tree.addEventListener('click',paint)
    four.addEventListener('click',paint)
    five.addEventListener('click',paint)
    six.addEventListener('click',paint)
    seven.addEventListener('click',paint)
    eight.addEventListener('click',paint)
    
}

function paint(ev){
    number =  ev.target.dataset.num
    if(GameActive){
        if(GameBoardState[number] == ''){
            if(player == playeruno){
                document.getElementById(number).innerHTML='<img src="assets/playeruno.png" />';
                GameBoardState[number]= 'po';
            } else {
                GameBoardState[number]= 'pt';
                document.getElementById(number).innerHTML='<img src="assets/playerdos.png" />';
        }
        validation(GameBoardState)
        }
    }
}

function validation(GameBoardState){
    let rounwon = false
    let p1 = 0
    let p2 = 0
    let p3 = 0
    for(let i = 0; i < WINNINGS.length; i++){
        const winconbination = WINNINGS[i]
        p1 = winconbination[0]
        p2 = winconbination[1]
        p3 = winconbination[2]
        let position1 = GameBoardState[winconbination[0]]
        let position2 = GameBoardState[winconbination[1]]
        let position3 = GameBoardState[winconbination[2]]
        if (position1 == 'pt' && position2 == 'pt' && position3 == 'pt') {
            
            document.getElementById(p1).style.backgroundColor = 'coral';
            document.getElementById(p2).style.backgroundColor = 'coral';
            document.getElementById(p3).style.backgroundColor = 'coral';
            player = playerdos
            rounwon = true
            break
        }else if (position1 == 'po' && position2 == 'po' && position3 == 'po') {
            document.getElementById(p1).style.backgroundColor = 'coral';
            document.getElementById(p2).style.backgroundColor = 'coral';
            document.getElementById(p3).style.backgroundColor = 'coral';
            player = playeruno
            rounwon = true
            break;
        }else{
            continue;
        }    
    }
    if(rounwon){
        showmessage(WinMessage())
        GameActive = false
        return
    }
    if(!GameBoardState.includes("")){
        document.getElementById("0").style.backgroundColor = 'cornflowerblue';
        document.getElementById("1").style.backgroundColor = 'cornflowerblue';
        document.getElementById("2").style.backgroundColor = 'cornflowerblue';
        document.getElementById("3").style.backgroundColor = 'cornflowerblue';
        document.getElementById("4").style.backgroundColor = 'cornflowerblue';
        document.getElementById("5").style.backgroundColor = 'cornflowerblue';
        document.getElementById("6").style.backgroundColor = 'cornflowerblue';
        document.getElementById("7").style.backgroundColor = 'cornflowerblue';
        document.getElementById("8").style.backgroundColor = 'cornflowerblue';
        showmessage(DrawMessage())
        GameActive = false
        return
    }
    turn()
    
}

function eraseimg(){
    let i = GameBoardState.length
    while (i--){
    document.getElementById(i).innerHTML='</>';
    }
}

function listeners(){
    document.querySelector('.GameRestart').addEventListener("click", RestartGame)
    document.querySelector('.ChangePlayer').addEventListener("click", RegisterPlayer)
}


function RegisterPlayer(){
    GameActive = true
    document.getElementById("0").removeAttribute('Style')
    document.getElementById("1").removeAttribute('Style')
    document.getElementById("2").removeAttribute('Style')
    document.getElementById("3").removeAttribute('Style')
    document.getElementById("4").removeAttribute('Style')
    document.getElementById("5").removeAttribute('Style')
    document.getElementById("6").removeAttribute('Style')
    document.getElementById("7").removeAttribute('Style')
    document.getElementById("8").removeAttribute('Style')
    eraseimg()
    if(gameboard.style.display == 'block'){
        RestartGameState()
        playerdos.value = ''
        playeruno.value = ''
        PlayerRegister.style.display = 'block'
        gameboard.style.display = 'none'
    }
}


function RestartGame(){
    GameActive = true
    document.getElementById("0").removeAttribute('Style')
    document.getElementById("1").removeAttribute('Style')
    document.getElementById("2").removeAttribute('Style')
    document.getElementById("3").removeAttribute('Style')
    document.getElementById("4").removeAttribute('Style')
    document.getElementById("5").removeAttribute('Style')
    document.getElementById("6").removeAttribute('Style')
    document.getElementById("7").removeAttribute('Style')
    document.getElementById("8").removeAttribute('Style')
    if(player == playeruno){
        player = playerdos
    } else {
        player = playeruno
    }
    RestartGameState()
    eraseimg()
    showmessage(PlayerMessage())
}

function RestartGameState(){ 
    let i = GameBoardState.length
    while (i--){
        GameBoardState[i]= ''
    }
}


function showmessage(PlayerMessage){
    StatusMessage.innerHTML = PlayerMessage
}
