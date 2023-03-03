const cloudinary = require('cloudinary').v2
const { createRouter } = require('next-connect')
const multer = require('multer')

const CLOUDINARY_CLOUD_NAME = 'dtp9alejv'
const CLOUDINARY_API_KEY = '756857925269576'
const CLOUDINARY_API_SECRET = 'n_Iiqy8aoRit4PbT7FX0FbNRGkw'

const upload = multer({
  storage: multer.memoryStorage()
})

const router = createRouter()

router.use(upload.single('file'))

router.post(async (req, res) => {
  const fontName = req.body.fontName + '.' + req.body.fontType
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
  })
  cloudinary.uploader.upload_stream({
    resource_type: 'raw',
    type: 'authenticated',
    public_id: fontName
  }, function (error, result) {
    if (error) {
      return res.status(405).send(error)
    } else {
      return res.status(200).send(result)
    }
  }).end(req.file.buffer)
})

export default router.handler({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  }
})

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false
  }
}
