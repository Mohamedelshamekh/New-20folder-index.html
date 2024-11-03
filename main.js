let title = document.querySelector('.title');
let turn = 'x';
let spuar = [];
function end(num1,num2,num3){
    title.innerHTML = `${spuar[num1]} winner`;
document.getElementById('item'+num1).style.background='#ca6464';
document.getElementById('item'+num2).style.background='#ca6464';
document.getElementById('item'+num3).style.background='#ca6464';
setInterval(function(){title.innerHTML += '.'},1000);
setTimeout(function(){location.reload()},4000);
}
function winner (){
for (let i = 1 ; i < 10 ; i++)
    {
        spuar[i] = document.getElementById('item'+ i ).innerHTML;

        
}
if(spuar[1]== spuar[2]&& spuar[2]==spuar[3]&&spuar[1]!= '' )
{
  
    end(1,2,3)

}
else if (spuar[4]== spuar[5]&& spuar[5]==spuar[6]&&spuar[5]!='' )
{
    end(4,5,6)
}else if (spuar[7]== spuar[8]&& spuar[8]==spuar[9]&&spuar[8]!='' )
{
    end(7,8,9)
}

else if (spuar[1]== spuar[4]&& spuar[4]==spuar[7]&&spuar[1]!='' )
{
    end(1,4,7)
}else if (spuar[2]== spuar[5]&& spuar[5]==spuar[8]&&spuar[5]!='' )
{
    end(2,5,8)
}else if (spuar[3]== spuar[6]&& spuar[6]==spuar[9]&&spuar[3]!='' )
{
    end(3,6,9)
}else if (spuar[1]== spuar[5]&& spuar[5]==spuar[9]&&spuar[5]!='' )
 {
    end(1,5,9)
}else if (spuar[3]== spuar[5]&& spuar[5]==spuar[7]&&spuar[5]!='' )
{
    end(3,5,7)
}
}

function game(id)
{
let element = document.getElementById(id)
if (turn === 'x' && element.innerHTML == "")
    {
element.innerHTML = 'x';
turn = 'o';
 title.innerHTML = 'O';
 }else if (turn == 'o'&& element.innerHTML == ''){
    element.innerHTML = 'O';
    turn = 'x';
    title.innerHTML = 'x';

 }
winner();
}
