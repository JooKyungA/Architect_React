import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<header className={`${props.type} scrollView`} id='header'>
			<div className='inner'>
				<h1>
					<Link to='/'>DCL ARCHITECTS</Link>
				</h1>
				<nav className='menuWeb'>
					<ul id='gnb'>
						<li>
							<Link to='/about'>ABOUT</Link>
						</li>
						<li>
							<Link to='/portfolio'>PORTFOLIO</Link>
						</li>
						<li>
							<Link to='/youtube'>YOUTUBE</Link>
						</li>
						<li>
							<Link to='/contact'>CONTACT</Link>
						</li>
						<li>
							<Link to='/notice'>NOTICE</Link>
						</li>

						<li>
							<Link to='/join'>JOIN</Link>
						</li>
					</ul>
					<ul className='sns'>
						<li>
							<Link to='/'>
								<FontAwesomeIcon icon={faFacebookF} />
							</Link>
						</li>
						<li>
							<Link to='/'>
								<FontAwesomeIcon icon={faInstagram} />
							</Link>
						</li>
						<li>
							<Link to='/'>
								<FontAwesomeIcon icon={faTwitter} />
							</Link>
						</li>
					</ul>
				</nav>
				<Link to='#' className='btnCall' onClick={() => props.menuOpen.current.toggle()}>
					<span>메뉴호출</span>
				</Link>
			</div>
		</header>
	);
}

export default Header;
