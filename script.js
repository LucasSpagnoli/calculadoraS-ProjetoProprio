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
function soma(){
    var visor = Number(res.value)
    nums.push(visor)
    res.value=''
    operacao = 'soma'
    window.alert(nums)
}
function igual(){
    if (check!=0){
    var visor = Number(res.value)
    nums.push(visor)
    if (operacao == 'soma'){
        for (let i = 0; i < nums.length; i++) {
            final += nums[i]
        }
        res.value=final
        nums.length=0
    } else {
        window.alert('nah')
    }
    check = 0
    }
    final=0
}