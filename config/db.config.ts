import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import path from 'path'
import envConfig from  './env.config'

const { postgres } = envConfig

const isSync: boolean = process.env.FLAG_SYNC_DB === 'Y';
const config: PostgresConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: postgres.host,
  port: parseFloat(postgres.port) || 5432,
  username: postgres.username,
  password: postgres.password,
  database: postgres.database,
  entities: [path.join(__dirname, '../src/entities/*.entity.ts')],
  extra: { max: 20 },
  logging: isSync,
  synchronize: isSync
}

export default config