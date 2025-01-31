let nums=[]
let res = document.querySelector('textarea#res1')
let operacao = ''
let final = 0
let check = 0
function num(x){ 
    if (res.value !=0 && check == 0){
        res.value=''
        res.value+=x
    } else {
        res.value+=x
    }
    check++
}
function operar(x){
    var visor = Number(res.value)
    nums.push(visor)
    res.value=''
    if (x==1){
        operacao = 'soma'
    } else if (x==2){
        operacao = 'fatorial'
        igual()
    } else if (x==3){
        operacao = 'subtração'
    } else if (x==4){
        operacao = 'potência'
    } else if (x==5){
        operacao = 'multiplicar'
    } else if (x==6){
        operacao = 'raiz'
        igual()
    }
}
function sinal(){
    res.value=(-res.value)
}
function ponto(){
    if (!res.value.includes('.')){
        res.value+='.'
    }
}
function igual(){
    if (check!=0 && operacao!='fatorial' && operacao!='raiz'){
    var visor = Number(res.value)
    nums.push(visor)
    if (operacao == 'soma'){
        for (let i = 0; i < nums.length; i++) {
            final += nums[i]
        }
        res.value=final
        nums.length=0
    } else if (operacao == 'subtração'){
        final = nums[0]
        for (let i = 1; i < nums.length; i++) {
            final -= nums[i]
        }
        res.value=final
        nums.length=0
    } else if (operacao == 'multiplicar'){
        final = 1
        for (let i = 0; i < nums.length; i++) {
            final *= nums[i]
        }
        res.value=final
        nums.length=0
    } else if (operacao == 'potência'){
        final=nums[0]
            final**=nums[1]
        res.value=final
        nums.length=0
    } else if (operacao == 'raiz'){
        final=nums[0]
            final**=nums[1]
        res.value=final
        nums.length=0
    }else {
        window.alert('nah')
    }
    } else if (operacao=='fatorial'){
        var visor = Number(res.value)
        nums.push(visor)
        let i=1
        final=nums[0]
        while (i<nums[0]) {
            final*=nums[0]-i
            i++
        }
        res.value=final
        nums.length=0
    } else if (operacao=='raiz'){
        var visor = Number(res.value)
        nums.push(visor)
        final=Math.sqrt(nums[0])
        res.value=final
        nums.length=0
    }
    check=0
    final=0
}
function config(){
    var lugar = document.querySelector ('div#calculadora')
    var corpo = document.querySelector('body')
    var Esc = document.createElement('input')
    Esc.type= 'button'
    Esc.value='Escuro'
    Esc.className='but'
    Esc.style.fontSize= '14pt'
    Esc.addEventListener('click', function(){
        var butEsc = document.querySelectorAll('.but')
        butEsc.forEach(function (botao) {
            botao.classList.remove('but');
            botao.classList.add('butEsc');
        lugar.style.background='gray'
        corpo.style.background='darkslateblue'
        corpo.style.color='lightgray'
    });
}); 
    
    lugar.appendChild(Esc)
}
