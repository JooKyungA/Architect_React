import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function AboutMain() {
	return (
		<section id='aboutMain' className='scrollView'>
			<div className='inner'>
				<h1>ABOUT</h1>
				<Link to='/about'>
					VIEW MORE <FontAwesomeIcon icon={faArrowRight} />
				</Link>
				<div className='txt'>
					<h2>
						<p>
							<span> We respect what our customers think consider</span>
						</p>{' '}
						<br />
						<p>
							<span> design, economy, and construction quality.</span>
						</p>
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae veritatis
						molestias facere sint, numquam quos. Ea illo earum id sed cumque in. Quis laboriosam
						odio mollitia voluptas perferendis veritatis vel molestiae, dignissimos recusandae,
						placeat quibusdam similique excepturi autem amet reprehenderit id eos provident eligendi
						esse in quidem tempore. Perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Asperiores iste, omnis possimus assumenda sunt aspernatur architecto consequatur
						accusantium? Ipsam, reprehenderit!
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutMain;
