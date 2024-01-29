import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream/promises"
import { createGunzip } from 'zlib'

const ZIP_FILE = "src/zip/files/archive.gz"
const DECOMPRESS_FILE = "src/zip/files/fileToCompress.txt"


const decompress = async (file, outFile) => {
    await pipeline(createReadStream(file), createGunzip() ,createWriteStream(outFile))
}

await decompress(ZIP_FILE, DECOMPRESS_FILE)