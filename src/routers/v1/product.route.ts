import { Router } from 'express'
import Controller from '@hm-controllers/product.controller'

const router = Router()
const ctrl = new Controller()

router.get('/', ctrl.getProducts)

export default router