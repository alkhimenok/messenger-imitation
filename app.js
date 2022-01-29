const path = require('path')
const express = require('express')

const app = express()

const PORT = 5000

app.use(express.static(path.resolve(__dirname, 'client', 'build')))

app.get('/api/dialogues', (req, res) =>
	res.status(200).json([
		{
			picture: './images/picture.jpeg',
			title: '101',
			message:
				'hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101',
			isSelected: true
		},
		{ picture: '', title: '', message: '' },
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{}
	])
)
app.get('/', (req, res) => res.sendFile('/index.html'))

const start = () => {
	app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	try {
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

start()
