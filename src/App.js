import Content from './components/content/content'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import SideBar from './components/sidebar/sidebar'
import Dialog from './components/dialogs/dialogs'
import News from './components/news/news'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Setting from './components/setting/setting'

function App() {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<main className='main'>
					<SideBar />
					<div className='app-wrapper_content'>
						<Routes>
							<Route exact path='/' element={<Content />} />
							<Route  path='/dialogs/*' element={<Dialog />} />
							<Route path='/news' element={<News />} />
							<Route path='/setting' element={<Setting />} />
						</Routes>
					</div>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
