var check = document.getElementById('check1')
var btnCheck = document.getElementById('btncheck')

check.addEventListener('change', selection);

function selection(){
    if(check.checked == true){
        btnCheck.disabled = false;
    }else{
        btnCheck.disabled = true;
    }
}