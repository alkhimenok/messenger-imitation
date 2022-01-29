import React, { useEffect } from 'react'
// import { BrowseRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './components/main/Main'
// import Footer from './components/Footer'

const App = () => {
	return (
		// <BrowseRouter>
		<div className="wrapper">
			<Header />
			<Main />
			{/* <Footer /> */}
		</div>
		// </BrowseRouter>
	)
}

export default App
