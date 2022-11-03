import { Router } from 'express'
import Controller from '@hm-controllers/master.controller'

const router = Router()
const ctrl = new Controller()

router.get('/cost-item', ctrl.getCostItem)

export default router