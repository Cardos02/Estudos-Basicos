function primeiraFuncao(){
    return new Promise((resolve)=>{

        setTimeout(()=>{
            console.log('esperou isso')
            resolve()
        },1000)
    })
}

async function segundaFuncao(){
    console.log('iniciou')

    await primeiraFuncao()

    console.log('Terminou')
}

segundaFuncao()