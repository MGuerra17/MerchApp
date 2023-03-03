import { Cloudinary, Transformation } from '@cloudinary/url-gen'
import { grayscale, blur, backgroundRemoval, cartoonify } from '@cloudinary/url-gen/actions/effect'
import { source } from '@cloudinary/url-gen/actions/overlay'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { TextStyle } from '@cloudinary/transformation-builder-sdk/qualifiers/textStyle'
import { text } from '@cloudinary/url-gen/qualifiers/source'
import { byAngle } from '@cloudinary/url-gen/actions/rotate'
import { max, byRadius } from '@cloudinary/url-gen/actions/roundCorners'
// import { source } from '@cloudinary/url-gen/actions/overlay'
// import { text } from '@cloudinary/url-gen/qualifiers/source'

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dtp9alejv'
  },
  url: {
    secure: true
  }
})

const createImage = (publicId) => cloudinary.image(publicId)

const resize = (image, { width, height }) => image.resize(scale().width(width).height(height))

const removeBg = (image) => image.effect(backgroundRemoval())

const grayScaleFilter = (image) => image.effect(grayscale())

const cartoonifyFilter = (image) => image.effect(cartoonify())

const blurFilter = (image, value) => image.effect(blur().strength(value))

const rotateImage = (image, value) => image.rotate(byAngle(value))

const roundCorners = (image, value) => image.roundCorners(byRadius(value))

const roundCircle = (image) => image.roundCorners(max())

const addText = (image, { textContent, fontName, fontSize, angle, color }) => {
  const textConfig = new TextStyle(fontName, fontSize)
  return image.overlay(source(text(textContent, textConfig).textColor(color).transformation(new Transformation().rotate(byAngle(angle)))))
}

export default {
  createImage,
  resize,
  removeBg,
  grayScaleFilter,
  cartoonifyFilter,
  blurFilter,
  addText,
  rotateImage,
  roundCorners,
  roundCircle
}
