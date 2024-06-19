// const mypromise=new Promise((resolve,reject)=>{
//     const nome='Matheus'

//     if(nome === 'Matheus'){
//         resolve('o usuário Matheus foi encontrado!')
//     }else{
//         reject('o usuário Matheus não foi encontrado!')
//     }
// })

// mypromise.then((data)=>{
//     console.log(data)
// })


// const mypromise2=new Promise((resolve,reject)=>{
//     const nome='Matheus'

//     if(nome === 'Matheus'){
//         resolve('o usuário Matheus foi encontrado!')
//     }else{
//         reject('o usuário Matheus não foi encontrado!')
//     }
// })

// mypromise2.then((data)=>{
//     return data.toUpperCase()
// }).then((stringmodificada) =>{
//     console.log(stringmodificada)
// })

// mypromise3= new Promise((resolve,reject)=>{
//     let nome = 'João'
//     if(nome === 'Matheus'){
//         resolve('o usuário Matheus foi encontrado!')
//     }else{
//         reject('[Erro]')
//     }
// })

// mypromise3.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


const p1=new Promise((resolve,reject)=>{
    resolve('promessa p1 resolvida')
})

const p2=new Promise((resolve,reject)=>{
    resolve('promessa p2 resolvida')
})

const p3=new Promise((resolve,reject)=>{
    resolve('promessa p3 resolvida')
})

const resolveall= Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data)
})
