import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Header(props) {
	// const btnCallRef = useRef(null);
	// const menuMoRef = useRef(null);
	// console.log(btnCallRef);
	// console.log(menuMoRef);
	// const btnCallClick = (e) => {
	// 	e.preventDefault();
	// 	btnCallRef.current.classList.toggle('on');
	// 	menuMoRef.current.classList.toggle('on');
	// };
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
				<Link to='/' className='btnCall'>
					<span>메뉴호출</span>
				</Link>
				{/* <a href='#' className='btnCall' ref={btnCallRef} onClick={(e) => btnCallClick}>
					<span>메뉴호출</span>
				</a> */}
				<nav className='menuMo'>
					{/* <nav className='menuMo' ref={menuMoRef}> */}
					<h1>
						<Link to='/'>DCL ARCHITECTS</Link>
						<p>Architecture&Interior</p>
					</h1>
					<ul id='gnbMo'>
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
					<ul className='snsMo'>
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
			</div>
		</header>
	);
}

export default Header;
