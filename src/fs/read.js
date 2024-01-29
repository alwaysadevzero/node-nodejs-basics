import { readFile } from "fs/promises"

const READ_FILE = "src/fs/files/fileToRead.txt"
const ERROR_MSG = "FS operation failed"

const read = async (file) => {
    try {
        const content = await readFile(file, "utf-8")
        console.log(content)
    } catch {
        throw new Error(ERROR_MSG)
    }
};

await read(READ_FILE)