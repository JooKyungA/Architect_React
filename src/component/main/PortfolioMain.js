import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PortfolioMain() {
	const [Data, setData] = useState([]);
	const [Index, setIndex] = useState(0);

	useEffect(async () => {
		const result = await axios.get(`${process.env.PUBLIC_URL}/DB/mainPortfolio.json`);
		setData(result.data.mainPortfolio);
	}, []);

	const linkPrevent = (e) => {
		e.preventDefault();
	};

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
							{Data.map((el, idx) => {
								let isOn = '';
								Index === idx ? (isOn = 'on') : (isOn = '');
								return (
									<li key={el.title} className={isOn} onClick={() => setIndex(idx)}>
										<a href='#' onClick={(e) => linkPrevent(e)}>
											{el.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<section>
						<article>
							<div>
								<img src='' alt='' />
							</div>
						</article>
						{Data.map((el, idx) => {
							let isOn = '';
							Index === idx ? (isOn = 'on') : (isOn = '');
							return (
								<article className={isOn} key={el.title}>
									<div>
										<img src={`${process.env.PUBLIC_URL}/img/${el.title}/${el.pic1}`} alt='' />
										<p>{el.txt1}</p>
									</div>
									<div>
										<img src={`${process.env.PUBLIC_URL}/img/${el.title}/${el.pic2}`} alt='' />
										<p>{el.txt2}</p>
									</div>
									<div>
										<img src={`${process.env.PUBLIC_URL}/img/${el.title}/${el.pic3}`} alt='' />
										<p>{el.txt3}</p>
									</div>
								</article>
							);
						})}
					</section>
				</div>
			</div>
		</section>
	);
}

export default PortfolioMain;
