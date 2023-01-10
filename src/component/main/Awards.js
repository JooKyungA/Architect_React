import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function Awards() {
	const [AwardList, setAwardsList] = useState([]);
	const acordian = useRef(null);

	const activeMenu = (e) => {
		const article = acordian.current.querySelectorAll('.acordianMenu');
		for (let i of article) {
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
					{AwardList.map((data, idx) => {
						return (
							<div
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
									<img src={`${process.env.PUBLIC_URL}/img/award/${data.pic}`} alt={data.alt} />
									<p>{data.txt}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Awards;
