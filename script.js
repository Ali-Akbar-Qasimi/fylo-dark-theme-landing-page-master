let btn = document.querySelector('.get-started-call-to-action')
let input = document.querySelector('.email-container .email')
btn.addEventListener('click',()=>{
    if(input.value === ''){
        input.parentElement.classList.add('error')
    }else if(!input.value.includes('@')){
        input.parentElement.classList.add('error')
    }else if(!input.value.includes('.')){
        input.parentElement.classList.add('error')
    }else{
        input.parentElement.classList.remove('error')
        input.value = ''
    }
})


console.log('fsadf')