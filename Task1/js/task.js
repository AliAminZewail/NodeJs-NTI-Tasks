function getUserData(str){
    return prompt(str);
}
const getAccs=function(){
    accs = localStorage.getItem('accounts')||'[]'
    return JSON.parse(accs)
}
const setAccs = function(accs){
    localStorage.setItem('accounts', JSON.stringify(accs))
}

const clearWindow=function(){
    let table=document.querySelector('table');
    table.classList.add('d-none');
}

let first=document.querySelectorAll('.btn')[0];
first.addEventListener('click',function add(){
    clearWindow();
    let cust={};
    cust.name=getUserData('enter user name');
    cust.balance=getUserData('enter user balance');
    cust.acc=new Date().getTime();
    accs = getAccs();
    accs.push(cust);
    setAccs(accs);
    alert("added successfully");
});

let second=document.querySelectorAll('.btn')[1];
second.addEventListener('click',function add(){
    clearWindow();
    let name=getUserData('enter user name to be deleted');
    accs = getAccs();
    for(i in accs){
        if(accs[i].name===name){
            accs.splice(i,1);
            setAccs(accs);
            alert("deleted successfully");
            return;
        }
    }
    alert("not found");
});

let third=document.querySelectorAll('.btn')[2];
third.addEventListener('click',function add(){
    clearWindow();
    let name=getUserData('enter user name to be deleted');  
    let num=getUserData('enter amount to withdraw');

    accs = getAccs();
    for(i in accs){
        if(accs[i].name===name&&accs[i].balance>=num){
            accs[i].balance-=num;
            setAccs(accs);
             alert("successful transaction");
            return;
            //break;
        }else if(accs[i].name===name&&accs[i].balance<num){
            alert('current balance not enough balance='+accs[i].balance);
            return;    
        }
    }
        alert("user not found");
});


let fourth=document.querySelectorAll('.btn')[3];
fourth.addEventListener('click',function add(){
    clearWindow();
    let name=getUserData('enter user name to be deleted');  
    let num=Number(getUserData('enter amount to add'));
    
    accs = getAccs();
    for(i in accs){
        if(accs[i].name===name){
            accs[i].balance+=num;
            setAccs(accs);
            alert("successful transaction");
            return;
        }
    }
    alert("user not found");
});


const addToScreen=function(parent,tag,att,classes,text){
    let ele = document.createElement(tag)
    parent.appendChild(ele)
    if(classes!="") ele.classList=classes
    if(text!="") ele.innerText=text
    attributesTypes = Object.keys(att)
    attributesTypes.forEach(attr=>{
        ele.setAttribute(attr, att[attr])
    })
    return ele
}

let fifth=document.querySelectorAll('.btn')[4];
fifth.addEventListener('click',function add(){
    let table=document.querySelector('table');
    table.classList.remove('d-none');
    let del=document.querySelectorAll('tr');
  

    p1=document.querySelector('thead');
    tr=addToScreen(p1,'tr',{},'','');
    addToScreen(tr,'th',{scope:'col'},'','AccNum');
    addToScreen(tr,'th',{scope:'col'},'','Name');
    addToScreen(tr,'th',{scope:'col'},'','Balance');

    accs = getAccs();
    b1=document.querySelector('tbody');
    for(i in accs){
        tr2=addToScreen(b1,'tr',{},'','');
        addToScreen(tr2,'th',{},'',accs[i].acc);
        addToScreen(tr2,'th',{},'',accs[i].name);
        addToScreen(tr2,'th',{},'',accs[i].balance);
    }
 });

 let sixth=document.querySelectorAll('.btn')[5];
 sixth.addEventListener('click',function add(){
    let searchWord=getUserData('enter filter '); 
    let table=document.querySelector('table');
     table.classList.remove('d-none');
     p1=document.querySelector('thead');
     tr=addToScreen(p1,'tr',{},'','');
     addToScreen(tr,'th',{scope:'col'},'','AccNum');
     addToScreen(tr,'th',{scope:'col'},'','Name');
     addToScreen(tr,'th',{scope:'col'},'','Balance');
 
     accs = getAccs();
     b1=document.querySelector('tbody');
     for(i in accs){
       if(accs[i].name!=null&&accs[i].name.includes(searchWord)){
        tr2=addToScreen(b1,'tr',{},'','');
         addToScreen(tr2,'th',{},'',accs[i].acc);
         addToScreen(tr2,'th',{},'',accs[i].name);
         addToScreen(tr2,'th',{},'',accs[i].balance);
       }
     }
  });
 
 