import { rename as renameFile, stat } from "fs/promises"
import { dirname, join } from "path"

const ORIGINAL_FILE = "src/fs/files/wrongFilename.txt"
const NEW_FILENAME = "properFilename.md"
const ERROR_MSG = "FS operation failed"

const rename = async (file, newName) => {
    const newFile = join(dirname(file), newName)

    try {
        await stat(newFile)
        throw new Error(ERROR_MSG)
    } catch (error) {
        if (error.code === "ENOENT") {
            await renameFile(file, newFile)
        } else {
            throw new Error(ERROR_MSG)
        }
    }
};

await rename(ORIGINAL_FILE, NEW_FILENAME)
