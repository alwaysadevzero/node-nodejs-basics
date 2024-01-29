import { writeFile } from "fs/promises"

const FILE = "src/fs/files/fresh.txt"
const CONTEXT = "I am fresh and young"
const ERROR_MSG = "FS operation failed"

const create = async (file, data) => {
    try {
        await writeFile(file, data, { flag: "wx"}) 
    } catch {
        throw new Error(ERROR_MSG)
    }

};

await create(FILE, CONTEXT)