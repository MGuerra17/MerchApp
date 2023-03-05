import { Configuration, OpenAIApi } from 'openai'

export default async function createDesignHandler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = JSON.parse(req.body)
    try {
      const configuration = new Configuration({
        apiKey: process.env.OPEN_AI_API_KEY
      })

      const openai = new OpenAIApi(configuration)

      const response = await openai.createImage({
        prompt,
        n: 1,
        size: '512x512'
      })

      return res.status(200).send({ data: response.data.data[0].url })
    } catch (error) {
      return ({ error })
    }
  }
}
