import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer id='footer'>
			<div className='inner'>
				<div className='footer_menu'>
					<h1>
						<Link to='/'>DCL ARCHITECTS</Link>
					</h1>
					<ul>
						<li>
							<Link
								to='#'
								onClick={(e) => {
									e.preventDefault(e);
								}}
							>
								Policy
							</Link>
						</li>
						<li>
							<Link
								to='#'
								onClick={(e) => {
									e.preventDefault(e);
								}}
							>
								Terms
							</Link>
						</li>
						<li>
							<Link
								to='#'
								onClick={(e) => {
									e.preventDefault(e);
								}}
							>
								Customer
							</Link>
						</li>
						<li>
							<Link
								to='#'
								onClick={(e) => {
									e.preventDefault(e);
								}}
							>
								Blog
							</Link>
						</li>
					</ul>
				</div>
				<div className='footer_contact'>
					<h2>CONTACT US</h2>
					<address>82, Ongnyeon-ro, Yeonsu-gu, Incheon, Republic of Korea</address>
					<p>Tel : 032-1234-5678</p>
				</div>
				<div className='footer_follow'>
					<h2>FOLLOW US</h2>
					<p>Yes, we are social!</p>
					<ul>
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
				</div>
				<div className='footer_subscribe'>
					<h2>SUBSCRIBE</h2>
					<p>Enter your email to get notified about our news solutions</p>
					<div>
						<label className='hidden' htmlFor='subscribe'></label>
						<input type='email' name='subscribe' id='subscribe' placeholder='E-mail' />
						<Link
							to='#'
							className='subscribeBtn'
							onClick={(e) => {
								e.preventDefault(e);
							}}
						>
							GO
						</Link>
					</div>
				</div>

				<p>Copyright &copy; 2022 DCL ARCHITECTS All right reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
