import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlickr } from '../../redux/flickrSlice';
import Modal from '../common/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function PortfolioMain() {
	const dispatch = useDispatch();
	const modal = useRef(null);
	const [ActiveNum, setActiveNum] = useState(0);
	const pics = useSelector((store) => store.flickr.data);
	const photoset_num = useSelector((store) => store.flickr.photosetNum);
	const tabBtns = ['HOUSE', 'OFFICE', 'RESTAURANT', 'OTHERS'];

	const photoset_ids = [
		'72177720305070823',
		'72177720305050751',
		'72177720305054577',
		'72177720305050761',
	];

	const showPhotosets = (idx) => {
		dispatch(
			fetchFlickr({
				type: 'photosets',
				user: '197141079@N07',
				photoset: photoset_ids[idx],
				num: idx,
			})
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
								{tabBtns.map((el, idx) => {
									let isOn = '';
									if (photoset_num === idx) {
										isOn = 'on';
									} else if (idx === 0 && photoset_num == null) {
										isOn = 'on';
									} else {
										isOn = '';
									}
									return (
										<li
											key={el}
											className={isOn}
											onClick={() => {
												showPhotosets(idx);
											}}
										>
											<Link
												to='#'
												onClick={(e) => {
													e.preventDefault(e);
												}}
											>
												{el}
											</Link>
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
												key={pic.id}
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
