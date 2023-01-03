import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function PortfolioMain() {
	return (
		<section id='portfolioMain' className='scrollView'>
			<div className='inner'>
				<h1>PORTFOLIO</h1>
				<Link to='/portfolio'>
					VIEW MORE <FontAwesomeIcon icon={faArrowRight} />
				</Link>
				<div className='tab_container'>
					<div id='tab'>
						<ul>
							<li className='on'>
								<Link to='/'>HOUSE</Link>
							</li>
							<li>
								<Link to='/'>OFFICE</Link>
							</li>
							<li>
								<Link to='/'>RESTAURANT</Link>
							</li>
							<li>
								<Link to='/'>OTHERS</Link>
							</li>
						</ul>
					</div>
					<section>
						{/* article map 반복 */}
						<article className='on'>
							<div>
								<img src='' alt='' />
								<p></p>
							</div>
						</article>
					</section>
				</div>
			</div>
		</section>
	);
}

export default PortfolioMain;
