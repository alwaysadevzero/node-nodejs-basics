import { cpus } from 'os'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { Worker } from 'worker_threads'

const __dirname = dirname(fileURLToPath(import.meta.url))
const WORKER_PATH = join(__dirname, 'worker.js')


const createWorker =  (worker_path, data) => new Promise((resolve) => {
    const worker = new Worker(worker_path, {workerData: data})
    
    worker.on('message', (result) => resolve({ status: "resolved", data: result }))
    worker.on('error', () => resolve({ status: "error", data: null }))
})


const performCalculations = async (worker, startNumber = 10) => {
    const cores = cpus().length
    const workers = []

    for (let i = 0; i < cores; i++) {
        workers.push(createWorker(worker, startNumber + i))
    }
    const data = await Promise.all(workers)
    console.log(data)
}

await performCalculations(WORKER_PATH)