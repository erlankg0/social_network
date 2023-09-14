import Content from './components/content/content'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import SideBar from './components/sidebar/sidebar'
import './App.css'

function App() {
	return (
		<div className='app-wrapper'>
			<Header />
			<main className='main'>
				<SideBar />
				<Content />
			</main>
			<Footer />
		</div>
	)
}

export default App
