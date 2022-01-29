const path = require('path')
const express = require('express')

const app = express()

const PORT = 5000

app.use(express.static(path.resolve(__dirname, 'client', 'build')))

app.get('/', (req, res) => res.send('Hello World!'))

const start = () => {
	app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	try {
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

start()
