import { readdir } from "fs/promises"

const READ_FOLDER = "src/fs/files"
const ERROR_MSG = "FS operation failed"

const list = async (folder) => {
    try {
        console.log(await readdir(folder))
    } catch {
        throw new Error(ERROR_MSG)
    }
}

await list(READ_FOLDER)