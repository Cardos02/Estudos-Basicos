const promessa=new Promise((resolve,reject)=>{
    let nome= 'Matheus'
    if(nome === 'Matheus'){
        resolve(`o usuário ${nome} foi encontrado`)
    }else{
        reject('[ERROR]')
    }
})

promessa.then((dado)=>{
    console.log(dado.toUpperCase())
    
})

n1=new Promise((resolve,reject)=>{
    resolve('promessa resolvida')
})

n2=new Promise((resolve,reject)=>{
    resolve('promessa resolvida')
})

n3=new Promise((resolve,reject)=>{
    resolve('promessa resolvida')
})

const promiseall=Promise.all([n1,n2,n3]).then((dado)=>{
    console.log(dado)
})