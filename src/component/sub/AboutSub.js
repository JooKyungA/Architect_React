import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function AboutSub() {
	const [Members, setMembers] = useState([]);
	const [AboutSlider, setAboutSlider] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});

		axios.get(`${process.env.PUBLIC_URL}/DB/aboutSlider.json`).then((json) => {
			setAboutSlider(json.data.aboutSlider);
		});
	}, []);

	console.log(AboutSlider);
	return (
		<Layout name={'AboutSub'}>
			<h1>ABOUT</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid, incidunt molestias modi
				quaerat soluta nesciunt iusto laboriosam. Minima facilis mollitia, quo tempora illo tenetur!
			</p>
			<div className='content'>
				<h2>Who We Are</h2>
				{AboutSlider.map((data, idx) => {
					return (
						<article key={data.title}>
							<div className='wrap'>
								<div className='slider'>
									<ul>
										<li>
											<img src={`${process.env.PUBLIC_URL}/img/about/${data.pic}`} alt={data.alt} />
										</li>
										<li>
											<img src={`${process.env.PUBLIC_URL}/img/about/${data.pic}`} alt={data.alt} />
										</li>
										<li>
											<img src={`${process.env.PUBLIC_URL}/img/about/${data.pic}`} alt={data.alt} />
										</li>
										<li>
											<img src={`${process.env.PUBLIC_URL}/img/about/${data.pic}`} alt={data.alt} />
										</li>
									</ul>
								</div>
								<Link to='/about' className='prev'>
									<img
										src={`${process.env.PUBLIC_URL}/img/btnPrev.png`}
										alt='이전 슬라이더로 이동 가능한 왼쪽 방향 화살표'
									/>
								</Link>
								<Link to='/about' className='next'>
									<img
										src={`${process.env.PUBLIC_URL}/img/btnNext.png`}
										alt='다음 슬라이더로 이동 가능한 오른쪽 방향 화살표'
									/>
								</Link>
							</div>
							<div className='txt'>
								<p>
									<span>{`0${idx}`}</span>
									{data.text}
								</p>
							</div>
						</article>
					);
				})}
				{/* <article className='slider'>
						<ul>
							<li>
								<img src='' alt='' />
							</li>
							<li>
								<img src='' alt='' />
							</li>
							<li>
								<img src='' alt='' />
							</li>
							<li>
								<img src='' alt='' />
							</li>
						</ul>
					</article>
					<a className='prev'></a>
					<a className='next'></a>
					<div className='txt'>
						<p>
							<span></span>
						</p>
						<p>
							<span></span>
						</p>
						<p>
							<span></span>
						</p>
						<p>
							<span></span>
						</p>
					</div> */}
			</div>
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
