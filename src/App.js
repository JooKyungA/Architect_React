import { Route, Switch } from 'react-router-dom';

// common
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Menu from './component/common/Menu';

// main
import Main from './component/main/Main';

// sub
import AboutSub from './component/sub/AboutSub';
import PortfolioSub from './component/sub/PortfolioSub';
import YoutubeSub from './component/sub/YoutubeSub';
import Contact from './component/sub/Contact';
import NoticeSub from './component/sub/NoticeSub';
import Join from './component/sub/Join';
import JoinResult from './component/sub/JoinResult';
import ContactResult from './component/sub/ContactResult';

// scss
import './scss/style.scss';

// redux
import { fetchYoutube } from './redux/youtubeSlice';
import { fetchFlickr } from './redux/flickrSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();

	const user_id = '197141079@N07';
	const photoset_id = '72177720305070823';

	useEffect(() => {
		dispatch(fetchYoutube());
		dispatch(fetchFlickr({ type: 'photosets', user: user_id, photoset: photoset_id }));
	}, [dispatch]);

	return (
		<>
			<Switch>
				<Route exact path='/' render={() => <Main />} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/about' component={AboutSub} />
			<Route path='/portfolio' component={PortfolioSub} />
			<Route path='/youtube' component={YoutubeSub} />
			<Route path='/contact' component={Contact} />
			<Route path='/notice' component={NoticeSub} />
			<Route path='/join' component={Join} />
			<Route path='/joinResult' component={JoinResult} />
			<Route path='/contactResult' component={ContactResult} />

			<Footer />

			<Menu />
		</>
	);
}

export default App;
