import { stat, unlink } from "fs/promises"

const DELETE_FILE = "src/fs/files/fileToRemove.txt"
const ERROR_MSG = "FS operation failed"

const remove = async (file) => {
    try {
        await stat(file)
        await unlink(file)
    } catch {
        throw new Error(ERROR_MSG)
    }
};

await remove(DELETE_FILE)