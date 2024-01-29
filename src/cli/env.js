
const PREFIX = 'RSS_'

const parseEnv = (prefix) => {
    const args = []
    Object.entries(process.env)
          .filter(([key, _]) => key.startsWith(prefix))
          .forEach(([key, value]) => {
            args.push(`${key}=${value}`)
          })

    console.log(args.join('; '))
}

parseEnv(PREFIX)
