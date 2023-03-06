import { Cloudinary, Transformation } from '@cloudinary/url-gen'
import { grayscale, blur, backgroundRemoval, cartoonify } from '@cloudinary/url-gen/actions/effect'
import { source } from '@cloudinary/url-gen/actions/overlay'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { TextStyle } from '@cloudinary/transformation-builder-sdk/qualifiers/textStyle'
import { image, text } from '@cloudinary/url-gen/qualifiers/source'
import { byAngle } from '@cloudinary/url-gen/actions/rotate'
import { max, byRadius } from '@cloudinary/url-gen/actions/roundCorners'
import { brightness, saturation, contrast, vibrance } from '@cloudinary/url-gen/actions/adjust'
import { cutByImage } from '@cloudinary/url-gen/actions/reshape'
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

// TRANSFORMATIONS

const resizeImage = (image, { width, height }) => image.resize(scale().width(width).height(height))

const rotateImage = (image, value) => image.rotate(byAngle(value))

const roundCorners = (image, value) => image.roundCorners(byRadius(value))

const roundCircle = (image, value) => value ? image.roundCorners(max()) : image

// BACKGROUND

const removeBg = (image, value) => value ? image.effect(backgroundRemoval()) : image

// FILTERS

const grayScaleFilter = (image, value) => value ? image.effect(grayscale()) : image

const cartoonifyFilter = (image, value) => value ? image.effect(cartoonify()) : image

const blurFilter = (image, value) => image.effect(blur().strength(value))

// SETTINGS

const adjustBrightness = (image, value) => image.adjust(brightness().level(value))

const adjustSaturation = (image, value) => image.adjust(saturation().level(value))

const adjustContrast = (image, value) => image.adjust(contrast().level(value))

const adjustVibrance = (image, value) => image.adjust(vibrance().strength(value))

// SHAPES

const addShape = (originalImage, { shapePublicId, shapeDimensions }) => shapePublicId ? originalImage.reshape(cutByImage(image(shapePublicId).transformation(new Transformation().resize(scale().width(shapeDimensions.width).height(shapeDimensions.height))))) : originalImage

// TEXT
const addText = (image, { textContent, fontName, fontSize, angle, color }) => {
  const textConfig = new TextStyle(fontName, fontSize)
  return image.overlay(source(text(textContent, textConfig).textColor(color).transformation(new Transformation().rotate(byAngle(angle)))))
}

export default {
  createImage,
  resizeImage,
  removeBg,
  adjustBrightness,
  adjustContrast,
  adjustSaturation,
  adjustVibrance,
  grayScaleFilter,
  cartoonifyFilter,
  blurFilter,
  addShape,
  addText,
  rotateImage,
  roundCorners,
  roundCircle
}
