//document.write("helloooooooooo") 
//console.log("Helloooooo")
//var num;
//num=1 

var num=5;
num=1;
console.log(num);

var numder;
Number=true;

var qwe=15;
var zxc=true;
if(zxc==true)

if(qwe==5 || zxc==true){//||=или,а &&=И
    console.log("ok");
}
else if(qwe==2){
    console.log("2")
}
else if(qwe<=123){
    console.log("123")
}
else if(qwe>=111){
    console.log("111")
}
//else if между if и else
else{
    console.log("else")
}
//else всегда последняя и используется только когда есть if

var asd="qwezxc"

switch(asd){
    case"4": console.log("равна 4") //case=случай закрывать всегда Break
        break;
        case"43": console.log("равна 43")
        break;
        case"41": console.log("равна 41") 
        break;
        default:
            console.log("ghjt,fkb")
}

var arr=[5,3,true,5.7,0,"stroka"];
console.log("gj,tlf[3]");
//массивы данных

var matrix=[[5,3],[true,5.7],[0,"stroka"]];

for(var i = 100; i>5; i/=2){
    console.log("i");
}//циклы

var j=1000;
while(j>100){
   console.log("j");
   j-=100; 
}

//var is=true;
//while(is){}
//while обычно используется что бы можно было писать без переменных,условий и тд

var x=100;// do whele почти одно и тоже  while, но он всегда делает одну итерацию цикла и после проверяет условия(даже если условия будет не верный он 1 раз все равно сработает)
do{
    console.log(x);
} while(x<50);

for(var q=10;q<=20;q+=2){
    if(q>15)
    break;//break позволяет полносьбю выйти из цикла
    console.log(q);
}

for(var w=10;w<=20;w++){
    if(w % 2 == 0)
    continue;//continue будет перебрасывать обратно цикл
    console.log(w);
}

var s = [5,2,3,4,71,"qwezxc"];

for(var d = 0; d<s.length;d++){
    console.log("Элемент" + d +":" +s[d]);
}

alert("lf cerf");//всплывающие окно 1 выбор нажатия "ОК"
var data = confirm("Dota2 best game");//всплывающие окно но два выбора нажатия 
console.log(data);
 
prompt("Cколько у тебя птс??");//всплывающие окно с ответом пользователя

var person = null;
if(confirm("Не обманываешь?")){
    person = prompt("напиши ПОПАЛСЯ");
    alert("Vot ti i," + person);
}
else{
    alert("Вы нажали на отмена");
}

function h() {
  console.log("hello");   
  console.log("!");
}  

h();

function summa(a,b){
    var res = a + b;
    console.log(res); 
}
// в одной функции может быть все то угодно и умножение,массивы и тд
summa(5 ,212)

var p = 10;//глобальная переменная(можно использовать везде)

function t(){
    var p = 330;//локальная переменная она существует только в функции(там где мы ее записали)
    console.log(p);
}

t();

console.log(p);

var countner = 0;

function onClickButton(el){
    countner++;
    el. innerHTML = "вы нажали на кнопку" + countner;
}

var text = document.getElementById('text');
text.style.color = "blue";
text.style.backgroundColor = "red";

text.title="new text"
console.log(text.title);
text.innerHTML = "new<br>string";

//document.getElementById('text').style.color = "white";

//var spans = document.getElementsByTagName("span");

var spans = document.getElementsByClassName("subtext");
for(var i = 0; i < spans.length; i++){
    console.log(spans[i]. innerHTML);
}

function checkForm(el){
    
    //var name= document.getElementById('name').value;или обращаешься напрямую к элементу и к его содержимому
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
    console.log(name + '-' + state + "-" + pass + "-" + repass);
     // можно отдельно ко всем,но так удобнее ну и в этом больше смысла 
    var fail = "";

    if(name == "" || pass == "" || state == "")
        fail = "Заполните поля";
    else if(name.length < 1 || name.length > 20)
    fail = "Имя введенно не коректнно";
    else if(pass != repass)
    fail = "Пароли не совпадают";

    if(fail !="")
        document.getElementById("error").innerHTML = fail;
    else {
        alert("Все СУпер");
    }
    return false;
}

var date = new Date();

//console.log(date.getFullYear());
//console.log(date.getMonth() + 1);
console.log(date.getDate());

var ggg = [5,2,23,1];
//console.log(ggg.join(", ")); обьяденят все в одну строку при это добавляя между ними все что написано в ""
console.log(ggg.join(""));//переворачивает строку 1,23,2,5
