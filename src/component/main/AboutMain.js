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
						</p>
						<br />
						<p>
							<span> design, economy, and construction quality.</span>
						</p>
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adi pisicing elit. Tempore recusandae veritatis
						molestias facere sint, numquam quos. Ea illo earum id sed cumque in. Quis labor iosam
						odio mollitia voluptas perfer endis veritatis vel mole stiae, dignis simos re cusandae,
						placeat qui busdam similique excepturi autem amet repre henderit id eos provident eli
						gendi esse in quidem tempore. Pers piciatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. As periores iste, omnis possimus assum enda sunt asper natur archi
						tecto cons equatur accus antium? Ipsam, reprehenderit!
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutMain;
