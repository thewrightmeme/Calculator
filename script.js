//-------------- display numbers ----------------\\
function Butt1(){
   document.getElementById("display").innerHTML+="1";
}
function Butt2(){
    document.getElementById("display").innerHTML+="2";
}
//-------------- display mathematical symbol ----------------\\
function ButtPlus(){
    document.getElementById("display").innerHTML+="+";
}
//-------------- display functions ----------------\\
function enterButt(){
    let evaluated=document.getElementById("display").innerHTML;
    eval(evaluated);
}