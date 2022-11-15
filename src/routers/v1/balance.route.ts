import { Router } from 'express'
import Controller from '@hm-controllers/balance.controller'

const router = Router()
const ctrl = new Controller()

router.get('/', ctrl.getBalances)
router.post('/upsert', ctrl.upsertBalance)

export default router