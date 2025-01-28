let nums=[]
let res = document.querySelector('textarea#res1')
let numtxt = ''
let operacao = ''
let final = 0
function num(x){
    res.innerHTML+=x
    numtxt+=x
}
function soma(){
    var visor = Number(numtxt)
    nums.push(visor)
    res.innerHTML=''
    numtxt=''
    operacao = 'soma'
}
function igual(){
    var visor = Number(numtxt)
    nums.push(visor)
    if (operacao == 'soma'){
        final = nums[0]+nums[1]
        res.innerHTML=final
    } else {
        window.alert('nah')
    }
}