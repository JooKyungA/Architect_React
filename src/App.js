import { Route, Switch } from 'react-router-dom';

// common
import Header from './component/common/Header';
import Footer from './component/common/Footer';

// main
import Main from './component/main/Main';

// sub
import About from './component/sub/AboutSub';
import Portfolio from './component/sub/PortfolioSub';
import Youtube from './component/sub/Youtube';
import Contact from './component/sub/Contact';
import Notice from './component/sub/Notice';
import Join from './component/sub/Join';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/about' component={About} />
			<Route path='/portfolio' component={Portfolio} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/notice' component={Notice} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
