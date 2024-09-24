import type { HttpContext } from '@adonisjs/core/http'
import axios from 'axios'
import qr from 'qr-image'

export default class UsersController {
  async index({ request, view }: HttpContext) {
    const url: string = request.input('url')
    let shortUrl: string

    try {
      const apiResponse = await axios.get(
        `https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`
      )
      shortUrl = apiResponse.data
    } catch (error) {
      console.error("Erreur lors du raccourcissement de l'URL:", error)
      shortUrl = 'Une erreur est survenue lors du raccourcissement de votre URL'
    }

    // Génération du QR CODE
    const qrCode = qr.image(shortUrl, { type: 'png' })

    const qrCodeData: string = await new Promise((resolve, reject) => {
      let data: Buffer[] = []
      qrCode.on('data', (chunk) => data.push(chunk))
      qrCode.on('end', () => resolve(Buffer.concat(data).toString('base64')))
      qrCode.on('error', (err) => reject(err))
    })

    return view.render('pages/result', {
      data: {
        qrCode: qrCodeData,
        shortUrl: shortUrl,
      },
    })
  }
}
