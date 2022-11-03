import { Server } from 'http'
import { Connection } from 'typeorm'

interface IProcessOption {
  server?: Server
  dbConnection: Connection
}

export const processEvents = ({ server, dbConnection }: IProcessOption) => {

  process.on('uncaughtException', (error: Error) => console.error('UncaughtException', error))

  process.on('unhandledRejection', (reason: any, promise: any) =>  console.info(reason, promise))

  process.on('SIGTERM', async () => {

    console.info('Starting graceful shutdown')
    
    if (!server) {
      if (dbConnection) {
        try {
          await dbConnection.close()
        } catch (e) {
          console.error('Error in graceful shutdown', e)
        }
      }
      return
    }

    server.close(async (err: any) => {
      const errors = []
      let exitCode = 0

      if (err) {
        errors.push(err)
      }

      if (dbConnection) {
        try {
          await dbConnection.close()
        } catch (e) {
          errors.push(e)
        }
      }

      if (errors.length > 1) {
        console.error("Error in graceful shutdown ", ...errors)
        exitCode = 1
      }

      process.exit(exitCode)
    })

  })
}