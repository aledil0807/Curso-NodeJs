import path from 'node:path';


const filePath = path.join('Dilan','rookiex')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const extension = path.extname('my.hero.jpg.png')
console.log(extension)