import { stdin, stdout } from 'process'
import { Transform, } from 'stream'
import { pipeline } from "stream/promises"

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        const reversed = chunk.toString().split('').reverse().join('')
        callback(null, reversed)
    }
})


const transform = async () => {
    await pipeline(stdin, reverseStream, stdout)
}

await transform()