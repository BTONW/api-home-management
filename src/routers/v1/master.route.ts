import { Router } from 'express'
import Controller from '@hm-controllers/master.controller'

const router = Router()
const ctrl = new Controller()

router.get('/balance', ctrl.getBalance)

router.get('/months', ctrl.getMonths)
router.get('/budgets', ctrl.getBudgets)

export default router