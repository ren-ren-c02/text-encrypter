const inputText = document.querySelector(".text-one");
const message = document.querySelector(".text-two");
const copyBtn = document.getElementById('copyBtn')

function encryptBtn(){
    const encryptText = encrypt(inputText.value)
    message.value = encryptText
    inputText.value = ""
}

function decryptBtn(){
    const decryptText = decrypt(inputText.value)
    message.value = decryptText
    inputText.value = ""
}


function encrypt(encryptString){
    let code = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encryptString = encryptString.toLowerCase();

    for(let i = 0; i < code.length; i++){
        if(encryptString.includes(code[i][0])){
            encryptString = encryptString.replaceAll(code[i][0],code[i][1])
        }
    }
    return encryptString;
}

function decrypt(decryptString){
    let code = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    decryptString = decryptString.toLowerCase();

    for(let i = 0; i < code.length; i++){
        if(decryptString.includes(code[i][0])){
            decryptString = decryptString.replaceAll(code[i][0],code[i][1])
        }
    }
    return decryptString;
}

copyBtn.addEventListener('click', () => {
    message.select();
    document.execCommand('copy');
});