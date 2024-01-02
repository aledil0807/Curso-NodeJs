import fs from 'node:fs'

console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', (err,text) =>{
    console.log('primer texto:',text)
})

console.log('Haciendo cosas mientras se lee el primer archivo')

console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err,text) =>{
    console.log('segundo texto:',text)
})