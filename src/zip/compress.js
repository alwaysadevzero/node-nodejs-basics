import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream/promises"
import { createGzip } from 'zlib'

const COMPRESS_FILE = "src/zip/files/fileToCompress.txt"
const ZIP_FILE = "src/zip/files/archive.gz"

const compress = async (file, outFile) => {
    await pipeline(createReadStream(file), createGzip(), createWriteStream(outFile))
}

await compress(COMPRESS_FILE, ZIP_FILE)