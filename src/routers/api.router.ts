import { getConnection } from 'typeorm'
import { Request, Response, Router } from 'express'
import MasterRoute from './v1/master.route'

const version = 'v1'
const router = Router()

router.get('/healthcheck', (req: Request, res: Response) =>
  res.json({
    message: `home-management-api version ${process.env.npm_package_version || '#N/A'}`
  })
)

router.get('/connection-check', (req: Request, res: Response) => {
  const { isConnected } = getConnection('default')
  res.json({ isConnected })
})

router.use(`/${version}/master`, MasterRoute)

export default router
