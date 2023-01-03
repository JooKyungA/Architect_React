import axios from 'axios';
import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
	const [ContactUs, setContactUs] = useState([]);

	const { kakao } = window;

	const mapContainer = useRef(null);
	const markerOptions = [
		{
			title: '본점',
			latlng: new kakao.maps.LatLng(37.4261458, 126.648286),
			imgSrc: `${process.env.PUBLIC_URL}/img/placeholder.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
			tel: 'Tel. 032-1234-5678',
			address: '82, Ongnyeon-ro, Yeonsu-gu, Incheon, Republic of Korea',
		},
		{
			title: '안양지점',
			latlng: new kakao.maps.LatLng(37.3851989, 126.9510398),
			imgSrc: `${process.env.PUBLIC_URL}/img/placeholder.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 66) },
			tel: 'Tel. 031-1212-3344',
			address: '711, Gyeongsu-daero, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea',
		},
		{
			title: '서울지점',
			latlng: new kakao.maps.LatLng(37.4706014, 126.9369485),
			imgSrc: `${process.env.PUBLIC_URL}/img/placeholder.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
			tel: 'Tel. 02-3456-7890',
			address: '111, Sillim-ro 11-gil, Gwanak-gu, Seoul, Republic of Korea',
		},
	];
	const [MarkerOptions] = useState(markerOptions);
	const [Index, setIndex] = useState(0);

	const mapOption = {
		center: MarkerOptions[Index].latlng,
		level: 3,
	};
	const markerPosition = MarkerOptions[Index].latlng;
	const imageSrc = MarkerOptions[Index].imgSrc;
	const imageSize = MarkerOptions[Index].imgSize;
	const imagePos = MarkerOptions[Index].imgPos;
	const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imagePos);
	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/contactInfo.json`).then((json) => {
			setContactUs(json.data.contactInfo);
		});
	}, []);

	useEffect(() => {
		mapContainer.current.innerHTML = '';
		const map = new kakao.maps.Map(mapContainer.current, mapOption);
		marker.setMap(map);

		window.addEventListener('resize', () => map.setCenter(MarkerOptions[Index].latlng));

		const mapTypeControl = new kakao.maps.MapTypeControl();
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

		const zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		map.setZoomable(false);
	}, [Index]);

	return (
		<Layout name={'Contact'}>
			<h1>CONTACT</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, facere labore reiciendis
				blanditiis deleniti pariatur maxime voluptatum earum, ab animi cupiditate.
			</p>
			<div className='txt'>
				{ContactUs.map((data, idx) => {
					return (
						<div key={data.contactMethod}>
							<img src={`${process.env.PUBLIC_URL}/img/${data.pic}`} alt={data.contactMethod} />
							<p>{data.contactMethod}</p>
							<span>{data.contactDetail}</span>
						</div>
					);
				})}
			</div>

			{/* contact form */}
			<div className='wrap'></div>

			{/* 카카오맵API */}
			<div id='map' ref={mapContainer}></div>
			<ul className='branch'>
				{MarkerOptions.map((data, idx) => {
					let isOn = '';
					Index === idx && (isOn = 'on');
					return (
						<li
							key={data.title}
							className={isOn}
							onClick={() => {
								setIndex(idx);
							}}
						>
							<Link to='/contact'>{data.title}</Link>
							<div className='txt'>
								<p>{data.tel}</p>
								<span>{data.address}</span>
							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Contact;
