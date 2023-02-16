
function insert(num){
    var screen = document.getElementById('screen')
    screen.value += num;
}

function result(){
    var screen = document.getElementById('screen')
    var result = eval(screen.value)
    screen.value = result;
}

function clr(){
    var screen = document.getElementById('screen')
    screen.value = "" ;
}

function delete_one(){
    var screen = document.getElementById('screen')
    var one = screen.value
    var delete_one = one.substring(0, one.length -1)
    screen.value = delete_one ;
}