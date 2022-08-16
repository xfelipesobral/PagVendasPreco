import { Request, Response } from 'express'

function importXml(request: Request, response: Response) {
    console.log(request.body)

    response.json({
        status: true
    })
}

export default importXml