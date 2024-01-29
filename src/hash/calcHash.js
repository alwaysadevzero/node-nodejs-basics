import { createHash } from 'crypto'
import { readFile } from "fs/promises"


const HASH_FILE = "src/hash/files/fileToCalculateHashFor.txt"

const calculateHash = async (file) => {
    const content = await readFile(file, "utf-8")
    const hash = createHash('sha256').update(content).digest('hex')

    console.log(hash)
};

await calculateHash(HASH_FILE)