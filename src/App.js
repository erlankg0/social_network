import Content from './components/content/content'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import SideBar from './components/sidebar/sidebar'
import Dialogs from './components/dialogs/dialogs'
import News from './components/news/news'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Setting from './components/setting/setting'

function App(props) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<main className='main'>
					<SideBar name={props.state.users}/>
					<div className='app-wrapper_content'>
						<Routes>
							<Route exact path='/' element={<Content data={props.state.dataPost} />} />
							<Route
								path='/dialogs/*'
								element={
									<Dialogs
										data={[props.state.users, props.state.dataMessages]}
									/>
								}
							/>
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
