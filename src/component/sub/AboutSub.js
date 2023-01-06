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
	const [enableClick, setEnableClick] = useState(true);
	const [Active, setActive] = useState(0);
	const [Index, setIndex] = useState(0);

	const ul = useRef(null);
	const lis = useRef(null);
	const txt = useRef(null);
	const txt_p = useRef(null);
	const span = useRef(null);

	let sliderSpeed = 500;

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});

		axios.get(`${process.env.PUBLIC_URL}/DB/aboutSlider.json`).then((json) => {
			setAboutSlider(json.data.aboutSlider);
		});
	}, []);

	useEffect(() => {
		if (ul.current == null) return;

		const init = () => {
			ul.current.style.left = '-100%';
			ul.current.prepend(ul.current.lastElementChild);
			ul.current.style.width = `${100 * len}%`;
			const lis = ul.current.children;
			lis.forEach((el) => {
				el.style.width = `${100 / len}%`;
			});
			init();
		};
	}, [ul.current]);

	const len = lis.length;

	const clickNext = () => {
		if (!enableClick) return;
		setEnableClick(false);
		nextslide();
	};
	const clickPrev = (e) => {
		if (!enableClick) return;
		setEnableClick(false);
		prevslide();
	};

	const nextslide = () => {
		new Anime(ul.current, {
			prop: 'left',
			value: '-200%',
			duration: sliderSpeed,
			callback: () => {
				ul.current.style.left = '-100%';
				ul.current.append(ul.current.firstElementChild);
				setEnableClick(true);
			},
		});
		if (Active == 0) {
			setActive(len - 1);
		} else {
			setActive(Active--);
		}
		// const txt_p = txt.current.children;
		for (let el of txt_p) el.classList.remove('on');
		txt_p[Active].classList.add('on');
	};

	const prevslide = () => {
		new Anime(ul.current, {
			prop: 'left',
			value: '0%',
			duration: sliderSpeed,
			callback: () => {
				ul.current.style.left = '-100%';
				ul.current.prepend(ul.current.lastElementChild);
				setEnableClick(true);
			},
		});
	};

	return (
		<Layout name={'AboutSub'}>
			<h1>ABOUT</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid, incidunt molestias modi
				quaerat soluta nesciunt iusto laboriosam. Minima facilis mollitia, quo tempora illo tenetur!
			</p>
			<div className='content'>
				<h2>Who We Are</h2>

				{/* slider - pic */}
				<article>
					<div className='wrap'>
						<div className='slider'>
							<ul ref={ul}>
								{AboutSlider.map((data, idx) => {
									return (
										<li data-index={idx} ref={lis} key={data.title}>
											{/* article */}
											<img src={`${process.env.PUBLIC_URL}/img/about/${data.pic}`} alt={data.alt} />
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					{/* slider - btn */}
					<Link to='/about' className='prev' onClick={(e) => clickPrev()}>
						<img
							src={`${process.env.PUBLIC_URL}/img/btnPrev.png`}
							alt='이전 슬라이더로 이동 가능한 왼쪽 방향 화살표'
						/>
					</Link>
					<Link to='/about' className='next' onClick={(e) => clickNext()}>
						<img
							src={`${process.env.PUBLIC_URL}/img/btnNext.png`}
							alt='다음 슬라이더로 이동 가능한 오른쪽 방향 화살표'
						/>
					</Link>
					{/* slider - txt */}
					<div className='txt' ref={txt}>
						{AboutSlider.map((data, idx) => {
							return (
								<p key={data.title} ref={txt_p}>
									<span ref={span}>{`0${idx + 1}`}</span>
									{data.text}
								</p>
							);
						})}{' '}
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
