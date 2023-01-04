import axios from 'axios';
import { useState, useEffect } from 'react';

function Awards() {
	const [AwardList, setAwardsList] = useState([]);

	useEffect(async () => {
		const result = await axios.get(`${process.env.PUBLIC_URL}/DB/awards.json`);
		setAwardsList(result.data.awards);
	}, []);

	return (
		<section id='awards' className='scrollView'>
			<div className='inner'>
				<h1>AWARDS</h1>
				<div className='wrap'>
					{/* award_tab map 반복 */}
					{AwardList.map((data, idx) => {
						return (
							<div className='award_tab' key={data.award}>
								<input type='radio' name='acc' id='acc1' />
								<label htmlFor='acc1'>
									<h2>{data.year}</h2>
									<h3>{data.award}</h3>
								</label>
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
