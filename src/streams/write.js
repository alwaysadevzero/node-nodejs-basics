import { createWriteStream } from 'fs'
import { stdin } from "process"
import { pipeline } from "stream/promises"

const WRITE_FILE = "src/streams/files/fileToWrite.txt"

const write = async (file) => {
    const writeStream = createWriteStream(file, {flags: "a"})
    await pipeline(stdin, writeStream)

};

await write(WRITE_FILE)