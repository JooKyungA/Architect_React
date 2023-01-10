import Layout from '../common/Layout';
import Anime from '../../asset/anime';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function AboutSub() {
	const [Members, setMembers] = useState([]);
	const [AboutSlider, setAboutSlider] = useState([]);
	const [Active, setActive] = useState(0);
	const slider = useRef(null);
	const txt = useRef(null);
	const txt_p = useRef(null);
	const span = useRef(null);

	let sliderSpeed = 500;

	const init = () => {
		const panel = slider.current.children[0];
		const lis = panel.querySelectorAll('li');
		const len = lis.length;

		panel.style.width = 100 * len + '%';
		lis.forEach((el) => (el.style.width = 100 / len + '%'));
		panel.lastElementChild !== null && panel.prepend(panel.lastElementChild);
	};

	const nextSlide = () => {
		const panel = slider.current.children[0];
		const lis = panel.querySelectorAll('li');
		const len = lis.length;
		new Anime(panel, {
			prop: 'margin-left',
			value: '-200%',
			duration: sliderSpeed,
			callback: () => {
				panel.append(panel.firstElementChild);
				panel.style.marginLeft = '-100%';
			},
		});

		if (Active == len - 1) {
			setActive(0);
		} else {
			setActive(Active + 1);
		}
	};

	const prevSlide = () => {
		const panel = slider.current.children[0];
		const lis = panel.querySelectorAll('li');
		const len = lis.length;

		new Anime(panel, {
			prop: 'margin-left',
			value: '0%',
			duration: sliderSpeed,
			callback: () => {
				panel.prepend(panel.lastElementChild);
				panel.style.marginLeft = '-100%';
			},
		});

		if (Active == 0) {
			setActive(len - 1);
		} else {
			setActive(Active - 1);
		}
	};

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});

		axios.get(`${process.env.PUBLIC_URL}/DB/aboutSlider.json`).then((json) => {
			setAboutSlider(json.data.aboutSlider);
		});
	}, []);

	useEffect(() => {
		init();
	}, [AboutSlider]);

	return (
		<Layout name={'AboutSub'}>
			<h1>ABOUT</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid, incidunt molestias modi
				quaerat soluta nesciunt iusto laboriosam. Minima facilis mollitia, quo tempora illo tenetur!
			</p>
			<div className='content'>
				<h2>Who We Are</h2>
				<article>
					<div className='wrap'>
						<div id='slider' ref={slider}>
							<ul className='panel'>
								{AboutSlider.map((data, idx) => {
									return (
										<li key={data.title}>
											<img src={`${process.env.PUBLIC_URL}/img/about/${data.pic}`} alt={data.alt} />
										</li>
									);
								})}
							</ul>

							<Link
								to='/about'
								className='prev'
								onClick={() => {
									prevSlide();
								}}
							>
								<img
									src={`${process.env.PUBLIC_URL}/img/btnPrev.png`}
									alt='이전 슬라이더로 이동 가능한 왼쪽 방향 화살표'
								/>
							</Link>
							<Link
								to='/about'
								className='next'
								onClick={() => {
									nextSlide();
								}}
							>
								<img
									src={`${process.env.PUBLIC_URL}/img/btnNext.png`}
									alt='다음 슬라이더로 이동 가능한 오른쪽 방향 화살표'
								/>
							</Link>
						</div>
						<div className='txt' ref={txt}>
							{AboutSlider.map((data, idx) => {
								return (
									<p className={Active === idx ? 'on' : ''} key={data.title} ref={txt_p}>
										<span ref={span}>{`0${idx + 1}`}</span>
										{data.text}
									</p>
								);
							})}
						</div>
					</div>
				</article>
			</div>

			{/* member */}
			<div className='team'>
				<h2>Our Team</h2>
				<div className='wrap'>
					{Members.map((data, idx) => {
						return (
							<article key={data.name}>
								<div className='pic'>
									<img
										src={`${process.env.PUBLIC_URL}/img/member/${data.pic}`}
										alt={`${data.name}의 프로필사진`}
									/>
									<p>
										<Link to='/about'>
											<FontAwesomeIcon icon={faFacebook} />
										</Link>
										<Link to='/about'>
											<FontAwesomeIcon icon={faInstagram} />
										</Link>
										<Link to='/about'>
											<FontAwesomeIcon icon={faTwitter} />
										</Link>
									</p>
								</div>
								<h3>{data.name}</h3>
								<p>{data.position}</p>
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default AboutSub;
