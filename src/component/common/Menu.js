import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { close } from '../../redux/menuSlice';

const Menu = () => {
	const dispatch = useDispatch();
	const menu = useSelector((store) => store.menu.open);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1180) dispatch(close());
		});
	}, [dispatch]);

	return (
		<AnimatePresence>
			{menu && (
				<motion.nav
					className='menuMo'
					initial={{ opacity: 0, x: -320 }}
					animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, x: -320, transition: { duration: 0.5 } }}
					onClick={() => dispatch(close())}
				>
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
							<Link
								to='#'
								onClick={(e) => {
									e.preventDefault(e);
								}}
							>
								<FontAwesomeIcon icon={faFacebookF} />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								onClick={(e) => {
									e.preventDefault(e);
								}}
							>
								<FontAwesomeIcon icon={faInstagram} />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								onClick={(e) => {
									e.preventDefault(e);
								}}
							>
								<FontAwesomeIcon icon={faTwitter} />
							</Link>
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
};

export default Menu;
