import { Cloudinary } from '@cloudinary/url-gen'
import { grayscale, blur, backgroundRemoval, cartoonify } from '@cloudinary/url-gen/actions/effect'
import { source } from '@cloudinary/url-gen/actions/overlay'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { TextStyle } from '@cloudinary/transformation-builder-sdk/qualifiers/textStyle'
import { text } from '@cloudinary/url-gen/qualifiers/source'
// import { max } from '@cloudinary/url-gen/actions/roundCorners'
// import { source } from '@cloudinary/url-gen/actions/overlay'
// import { text } from '@cloudinary/url-gen/qualifiers/source'
// import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle"

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

const addText = (image, value) => {
  const textConfig = new TextStyle('my-font.ttf', 24)
  return image.overlay(source(text('Hola mundo', textConfig)))
}

export default {
  createImage,
  resize,
  removeBg,
  grayScaleFilter,
  cartoonifyFilter,
  blurFilter,
  addText
}
