import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { toggle: () => setOpen(!Open) };
	});

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1200) setOpen(false);
		});
	}, []);

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					className='menuMo'
					initial={{ opacity: 0, x: -320 }}
					animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, x: -320, transition: { duration: 0.5 } }}
					onClick={() => setOpen(false)}
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
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
