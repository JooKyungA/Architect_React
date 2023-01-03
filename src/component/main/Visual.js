import { Link } from 'react-router-dom';
import pic1 from '../../img/slider/pic1.jpg';
import pic2 from '../../img/slider/pic2.jpg';
import pic3 from '../../img/slider/pic3.jpg';
import pic4 from '../../img/slider/pic4.jpg';
import pic5 from '../../img/slider/pic5.jpg';

function Visual() {
	const imgs = [pic1, pic2, pic3, pic4, pic5];
	return (
		<figure id='visual'>
			<div className='inner'>
				<Link to='/' className='btnViewOpen'>
					VIEW CONTENT
				</Link>
				<div className='txt'>
					<h1>DCL ARCH.</h1>
					<p>
						We value the value of various relationships in everyday space experience, and through
						this, we aim to build together.
					</p>
				</div>
				<div className='pic'>
					<img src={`${process.env.PUBLIC_URL}/img/main.jpg`} alt='' />
				</div>
				<article className='slider'>
					<ul>
						{imgs.map((pic, idx) => {
							return (
								<li key={imgs[idx]}>
									<img src={pic} alt={pic} />
								</li>
							);
						})}
					</ul>
				</article>
				<div className='sliderBtn'>
					<p className='prev'>
						<span></span>
					</p>
					<p className='next'>
						<span></span>
					</p>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
