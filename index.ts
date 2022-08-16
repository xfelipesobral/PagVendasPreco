import express from 'express'

import routes from './src/routes'

const app = express()

app.use(routes)

app.listen(3300, () => {
    console.log('SERVIDOR INICIADO...')
})