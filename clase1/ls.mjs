import fs from 'node:fs'

fs.readdir('.', (err,files)=>{
    if (err){
        console.log('Error al leer el archivo: ',err)
        return
    }

    files.forEach(file => {
        console.log(file)
    })
})

