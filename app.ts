import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const PORT = process.env.PORT || 3000

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const publicDir = path.join(__dirname, 'public')

app.set('views', path.join(publicDir, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicDir))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`)
})