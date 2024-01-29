import { createReadStream } from 'fs'
import { stdout } from "process"
import { pipeline } from "stream/promises"

const READ_FILE = "src/streams/files/fileToRead.txt"

const read = async (file) => {
    await pipeline(createReadStream(file), stdout)
};

await read(READ_FILE)