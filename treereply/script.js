const messageInput = document.querySelector('.text');
const reply = document.querySelector('.btn');
const message = document.querySelector('.msg');
const comments = document.querySelectorAll('.btn2');
const sendBtn = document.querySelectorAll('.send');

function Message(){
    var msg = document.createElement('h1');
        msg.innerHTML = `${messageInput.value} <button class='btn2' onclick='comment()'>Comment</button>`;
        message.appendChild(msg)
        messageInput.value = '';
}

function click(e) {
    if (messageInput.value === '') {
        alert('Cannot send empty message');
    } else {
        Message();
    }
}

function comment(){
        var div2 = document.createElement('div');
        div2.setAttribute('id','input')
        div2.innerHTML="<input type='text' class='input'> <button class='send' onclick='Send()'>Send</button>";
        message.appendChild(div2);
}

function Send(){
    var commentMsg = document.querySelectorAll('.input');
    for(var k=0;k<commentMsg.length;k++)
    var msg2= document.createElement('h1');
    msg2.innerHTML = `${commentMsg[i].value} <button class='btn2' onclick='comment()'>Comment</button>`;
    message.appendChild(msg2);
   
    document.getElementById('input').style.display="none";
    console.log('no')
}

for(var i=0;i<sendBtn.length;i++){
    sendBtn[i].addEventListener('click',Send);
    console.log('hi')
}

for(var j=0;j<comments.length;j++){
    comments[j].addEventListener('click',comment);
    console.log('hello')
}

reply.addEventListener('click',click)