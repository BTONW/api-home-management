import { ConnectionOptions, createConnection } from 'typeorm'
import { processEvents } from './process'
import initDbConfig from '@hm-connfig/db.config'

export const initDb = async (config: ConnectionOptions = initDbConfig) => {
  const connection = await createConnection(config);

  if (connection.options.database) {
    console.debug(`Connected to database: "${connection.options.database}"`)
  }

  return connection
}

export const getCliConfig = (config: ConnectionOptions = initDbConfig) => ({
  migrations: ['src/__migrations/*.ts'],
  cli: {
    migrationsDir: 'src/__migrations',
  },
  ...config,
})

export const migrateDb = async (config: ConnectionOptions = initDbConfig) => {
  const connection = await initDb({
    migrations: ['src/__migrations/*.ts'],
    ...config,
  })

  processEvents({ dbConnection: connection })

  console.info(`Running migrations on "${config.database}"`)

  await connection.runMigrations({})
  await connection.close()
}

export default getCliConfig()

