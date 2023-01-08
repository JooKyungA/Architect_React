import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Modal from '../common/Modal';

function Youtube() {
	const modal = useRef(null);
	const [index, setIndex] = useState(0);
	const Items = useSelector((store) => store.youtube.data);
	return (
		<>
			<section id='youtubeMain' className='scrollView'>
				<div className='inner'>
					<h1>YOUTUBE</h1>
					<Link to='/about'>
						VIEW MORE <FontAwesomeIcon icon={faArrowRight} />
					</Link>
					<div className='wrap'>
						{Items.map((data, idx) => {
							if (idx >= 3) return null;
							const tit = data.snippet.title;
							const desc = data.snippet.description;
							return (
								<article key={tit}>
									<h2>{tit.length > 45 ? tit.substr(0, 45) + '...' : tit}</h2>
									<div
										className='pic'
										onClick={() => {
											setIndex(idx);
											modal.current.open();
										}}
									>
										<img
											key={idx}
											src={data.snippet.thumbnails.high.url}
											alt={data.snippet.title}
										/>
									</div>
									<p>{desc.length > 100 ? desc.substr(0, 100) + '...' : desc}</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>
			<Modal ref={modal}>
				<iframe
					title={Items[index]?.id}
					src={`https://www.youtube.com/embed/${Items[index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
