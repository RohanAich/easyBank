'use strict';
const user = document.querySelector('.user');
const pin = document.querySelector('.pin');
const userB = document.querySelector('.ub');
const balance = document.querySelector('.balance p2');
const transfer_user = document.querySelector('#tu');
const transfer_ammount = document.querySelector('#ta');
const request_ammount = document.querySelector('#ra');
const close_user = document.querySelector('#cu');
const close_pin = document.querySelector('#cp');
const movements = document.querySelector('.movements');
const h = document.querySelector('h');
let balVal = 20000;
let now = new Date();
let month = `${now.getMonth() + 1}`.padStart(2,'0');
let day = `${now.getDate()}`.padStart(2,"0");
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();
let time = now.getTime();
balance.textContent=`₹${balVal}`;
let alpha;

function transaction(amount,type,sign='') {
    let mov = ``;
    mov = ` <section class="newmov">
            <p6><p3>${type}</p3><p5>sdfsdf</p5></p6>
            <p4>${sign}₹${Number(amount)}</p4>
            </section><hr>`;
    if(amount>0){
        movements.insertAdjacentHTML('afterbegin', mov)
        
    }
}
function logout() {
    let cd = 100;
    alpha = setInterval(function(){
    let min = Math.trunc(cd/60);
    let sec = cd%60;
    h.textContent=`${min}:${sec}`
    if(cd ===0){
        clearInterval(alpha)
        document.querySelector('.main').style.display = 'none';
    }
    cd --;},1000);
    return alpha
};



///////
userB.addEventListener('click', function(){
    if(user.value === 'heal' && Number(pin.value) == 3333 || 1){
        document.querySelector('.main').style.display = 'grid';
        logout();

    }

})

document.querySelector('#tb').addEventListener('click', function(){
    balVal -= Number(transfer_ammount.value);
    balance.textContent=`₹${balVal}`;
    clearInterval(alpha);
    logout();
    transaction(transfer_ammount.value,'paid', '-');
    transfer_ammount.value= '';
    transfer_user.value= '';
    document.querySelector('.movements p3').style.backgroundImage='linear-gradient(to bottom right, rgb(241, 29, 29),rgb(145, 6, 6))';
    document.querySelector('.movements p5').textContent = `${day}/${month}/${year}`;
});
document.querySelector('#rb').addEventListener('click', function(){
    transaction(request_ammount.value,'credited');
    clearInterval(alpha);
    logout();
    balVal += Number(request_ammount.value);
    balance.textContent=`₹${balVal}`;
    document.querySelector('.movements p3').style.backgroundImage= 'linear-gradient(to bottom right, rgb(83, 245, 83),rgb(0, 148, 0))';
    request_ammount.value='';
    document.querySelector('.movements p5').textContent = `${day}/${month}/${year}`;
})
document.querySelector('.balance p3').textContent = `as of ${day}/${month}/${year},${hour}:${minutes}`




