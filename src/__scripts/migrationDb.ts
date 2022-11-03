import { migrateDb } from '@itbudget-db/typeorm-cli'

migrateDb()
  .then(() => process.exit())
  .catch(err => {
    // TODO: Error object is not being logged
    console.error('Error migrating database', err)
    process.exit(1)
  })
