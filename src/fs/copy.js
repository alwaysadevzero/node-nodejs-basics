import { copyFile, mkdir, readdir } from "fs/promises"
import { join } from "path"

const ORIGINAL_FOLDER = "src/fs/files"
const COPY_FOLDER = "src/fs/files_copy"
const ERROR_MSG = "FS operation failed"

const copy = async (from, to) => {
    try {
        const [files] = await Promise.all([
            readdir(from), mkdir(to)
        ])
        files.map(file => copyFile(join(from, file), join(to, file)))
    } catch {
        throw new Error(ERROR_MSG)
    }
};

await copy(ORIGINAL_FOLDER, COPY_FOLDER)
