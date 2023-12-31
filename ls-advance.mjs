import fs from 'node:fs/promises'
import path from 'node:path'
import picocolors from 'picocolors'

const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try {
        files = await fs.readdir(folder)        
    }catch{
        console.error(picocolors.red(`No se pudo leer el directorio ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder,file)
        let stats
        try {
            stats = await fs.stat(filePath)
        } catch (error) {
            console.error(`No se ha podido leer el archivo ${filePath}`)
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()
        
        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))

}


ls(folder)
    


