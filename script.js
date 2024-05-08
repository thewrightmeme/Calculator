//-------------- display numbers ----------------\\
function Butt1(){
   document.getElementById("display").innerHTML+="1";
}
function Butt2(){
    document.getElementById("display").innerHTML+="2";
}
function Butt3(){
    document.getElementById("display").innerHTML+="3";
}
function Butt4(){
    document.getElementById("display").innerHTML+="4";
}
function Butt5(){
    document.getElementById("display").innerHTML+="5";
}
function Butt6(){
    document.getElementById("display").innerHTML+="6";
}
function Butt7(){
    document.getElementById("display").innerHTML+="7";
}
function Butt8(){
    document.getElementById("display").innerHTML+="8";
}
function Butt9(){
    document.getElementById("display").innerHTML+="6";
}
function Butt0(){
    document.getElementById("display").innerHTML+="0";
}
//-------------- display mathematical symbol ----------------\\
function ButtPlus(){
    document.getElementById("display").innerHTML+="+";
}
function ButtMinus(){
    document.getElementById("display").innerHTML+="-";
}
function ButtDivide(){
    document.getElementById("display").innerHTML+="/";
}
function ButtMultiply(){
    document.getElementById("display").innerHTML+="*";
}
function ButtSqrt(){
    document.getElementById("display").innerHTML+="Math.sqrt(";
}
function ButtExponent(){
    document.getElementById("display").innerHTML+="^";
}
function ButtDot(){
    document.getElementById("display").innerHTML+=".";
}
function ButtPara1(){
    document.getElementById("display").innerHTML+="(";
}
function ButtPara2(){
    document.getElementById("display").innerHTML+=")";
}
//-------------- display functions ----------------\\
function ButtEnter(){
    let evaluated=document.getElementById("display")
}
function ButtClear(){
    document.getElementById("display").innerHTML=" ";
}
function ButtDelete(){
    document.getElementById("display").innerHTML-=" ";
}