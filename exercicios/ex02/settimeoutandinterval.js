setTimeout(function (){
    console.log('esse é o timeout')
},1500)

var interval=setInterval(function(){
    console.log('esse é o interval')
},1000)

setTimeout(function(){
    console.log('não precisa mais repetir o interval!')
    clearInterval(interval)
},3000)