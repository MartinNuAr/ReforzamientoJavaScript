

const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa')
            reject('Ocurrió un problema al ejecutar la función')
        }, 1000);
    })
}



const medirTiempoAsync = async() =>{
    try {
        console.log('Inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log('Fin')
        return 'Fin de medir tiempo'
    } catch (error) {
        return 'Catch en medirTiempoAsync'
    }
    
}

medirTiempoAsync().then(console.log).catch(console.log)




