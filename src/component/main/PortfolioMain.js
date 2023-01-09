import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { fetchFlickr } from '../../redux/flickrSlice';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../common/Modal';

function PortfolioMain() {
	const dispatch = useDispatch();
	const modal = useRef(null);
	const [Data, setData] = useState([]);
	const [Index, setIndex] = useState(0);
	const [ActiveNum, setActiveNum] = useState(0);
	const pics = useSelector((store) => store.flickr.data);

	const getImgs = async () => {
		const result = await axios.get(`${process.env.PUBLIC_URL}/DB/mainPortfolio.json`);
		setData(result.data.mainPortfolio);

		photosetIndex(0);
	};

	useEffect(getImgs, []);

	const linkPrevent = (e) => {
		e.preventDefault();
	};

	const photoset_ids = [
		'72177720305070823',
		'72177720305050751',
		'72177720305054577',
		'72177720305050761',
	];

	const photosetIndex = (idx) => {
		dispatch(
			fetchFlickr({ type: 'photosets', user: '197141079@N07', photoset: photoset_ids[idx] })
		);
	};

	return (
		<>
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
										<li
											key={el.title}
											className={isOn}
											onClick={() => {
												setIndex(idx);
												photosetIndex(idx);
											}}
										>
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
								{pics.map((pic, idx) => {
									if (idx >= 3) return null;
									return (
										<div
											key={pic.id}
											onClick={() => {
												modal.current.open();
												setActiveNum(idx);
											}}
										>
											<img
												key={idx}
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_z.jpg`}
												alt={pic.title}
											/>
											<p>{pic.title}</p>
										</div>
									);
								})}
							</article>
						</section>
					</div>
				</div>
			</section>
			<Modal ref={modal}>
				<img
					src={`https://live.staticflickr.com/${pics[ActiveNum]?.server}/${pics[ActiveNum]?.id}_${pics[ActiveNum]?.secret}_b.jpg`}
					alt={pics[ActiveNum]?.title}
				/>
			</Modal>
		</>
	);
}

export default PortfolioMain;
