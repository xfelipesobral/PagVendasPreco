import { Router } from 'express'

import importXml from '../functions/importXml'

const router = Router()

router.route('/xml').post(importXml)

export default router