const inputbox=document.getElementById("input");
const listitem=document.getElementById("list-item");

function addtask(){
    if(inputbox.value === ''){
        alert("You musat need to write something!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        listitem.appendChild(li)
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span)
        let radio=document.createElement('input');
        radio.type='radio';
        li.appendChild(radio)
    }
    inputbox.value='';
    saveData();

}
listitem.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("checked");
        let radio = e.target.querySelector("input[type='radio']");
        if (radio) radio.checked = e.target.classList.contains("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem('data',listitem.innerHTML);
}
function show(){
    listitem.innerHTML=localStorage.getItem('data')
    listitem.querySelectorAll('li').forEach(li => {
        const radio = li.querySelector("input[type='radio']");
        if (radio) {
            if (li.classList.contains('checked')) {
                radio.setAttribute('checked','');
            } else {
                radio.removeAttribute('checked');
            }
        }
    });
}
show();