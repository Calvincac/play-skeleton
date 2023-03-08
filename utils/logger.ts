import fs from 'fs'

const loggerConf: fs.WriteStream = fs.createWriteStream('log.txt', {
    flags: 'a',
})

export const logger = (text: string, data?: Object): void => {
    loggerConf.write(
        '\n' + new Date() + ' = ' + text + ' => ' + JSON.stringify(data)
    )
}
