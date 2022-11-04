
import { initDb } from '@hm-db/typeorm-cli'
import app from './app'

const port = parseInt(process.env.PORT || '5001', 0)
const flag = process.env.FLAG_ENV || ''

const server = app.listen(port, async () => {
  console.log(
    `${"\u2705"} Server ${flag} starting port:${port} on version: ${process.env.npm_package_version}`
  )

  const connect = await initDb()
  
  console.log('DB Connected.', connect.isConnected)

  if (process.env.FLAG_SYNC_DB === 'Y') {
    console.log('Closed out remaining connections')
    await connect.close()
    server.close()
  }
})