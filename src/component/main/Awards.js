import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Awards() {
	const [AwardList, setAwardsList] = useState([]);
	const acordian = useRef(null);
	const path = process.env.PUBLIC_URL;

	const activeMenu = (e) => {
		const articles = acordian.current.querySelectorAll('.acordianMenu');
		for (let i of articles) {
			i.classList.remove('on');
		}
		e.currentTarget.classList.add('on');
	};

	useEffect(async () => {
		const result = await axios.get(`${process.env.PUBLIC_URL}/DB/awards.json`);
		setAwardsList(result.data.awards);
	}, []);

	return (
		<section id='awards' className='scrollView'>
			<div className='inner'>
				<h1>AWARDS</h1>
				<div className='wrap' ref={acordian}>
					{AwardList.map((data, _) => {
						return (
							<article
								className='acordianMenu'
								key={data.award}
								onClick={(e) => {
									activeMenu(e);
								}}
							>
								<div className='txt'>
									<h2>{data.year}</h2>
									<h3>{data.award}</h3>
								</div>
								<div className='content'>
									<img src={`${path}/img/award/${data.pic}`} alt={data.alt} />
									<p>{data.txt}</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Awards;
