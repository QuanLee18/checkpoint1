let input = document.getElementById("screen");
let input1 = document.getElementById("screen1");
let input2 = document.getElementById("screen2");
let sum = " ";
function so(a){
    input.value += a;
    return input.value;
}
function sob(b){
    input1.value += b;
    return input1.value;
}
function phepcong(){
    let a = Number(input.value);
    let b = Number(input1.value);
    let ketqua = a + b;
    input2.value = ketqua;
}

function pheptru(){
    let a = Number(input.value);
    let b = Number(input1.value);
    let ketqua = a -b;
    input2.value = ketqua;
}
function phepnhan(){
    let a = Number(input.value);
    let b = Number(input1.value);
    let ketqua = a * b;
    input2.value = ketqua;
}
function phepchia(){
    let a = Number(input.value);
    let b = Number(input1.value);
    if (input1.value == 0) {
        input2.value = "Lỗi"
    } 
    else {
        ketqua = a / b;
        input2.value = ketqua;  
}
}
function xoa1(){
    input.value = sum;
    input2.value = sum;
}
function xoa2(){
    input1.value = sum;
    input2.value = sum;
}
function xoa3(){
    input.value = sum;
    input1.value = sum;
    input2.value = sum;
}
        