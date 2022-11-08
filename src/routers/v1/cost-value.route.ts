import { Router } from 'express'
import Controller from '@hm-controllers/cost-value.controller'

const router = Router()
const ctrl = new Controller()

router.get('/days', ctrl.getCostValuesByDays)

export default router