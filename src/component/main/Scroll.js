import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Anime from '../../asset/anime';

function Scroll() {
	const posArr = useRef([]);
	const num = useRef(6);
	const scrollSpeed = useRef(500);
	const btnRef = useRef(null);
	const btnName = ['HOME', 'ABOUT', 'PORTFOLIO', 'AWARDS', 'BLOG', 'NEWS'];

	const getPos = () => {
		posArr.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.scrollView');

		for (const sec of secs) posArr.current.push(sec.offsetTop);
	};

	const scrollActive = () => {
		const btns = btnRef.current.children;
		const secs = btnRef.current.parentElement.querySelectorAll('.scrollView');
		const scroll = window.scrollY || window.pageYOffset;
		const base = -window.innerHeight / 2;

		posArr.current.forEach((posArr, idx) => {
			if (scroll >= posArr + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', scrollActive);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', scrollActive);
		};
	}, [getPos]);

	return (
		<ul className='btnScroll' ref={btnRef}>
			{Array(num.current)
				.fill()
				.map((_, idx) => {
					let isOn = '';
					idx === 0 && (isOn = 'on');
					return (
						<li
							key={idx}
							className={isOn}
							onClick={() => {
								new Anime(window, {
									prop: 'scroll',
									value: posArr.current[idx],
									duration: scrollSpeed.current,
								});
							}}
						>
							<p>{btnName[idx]}</p>
							<Link to='/'></Link>
						</li>
					);
				})}
		</ul>
	);
}

export default Scroll;
