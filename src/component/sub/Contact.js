import { useEffect, useState, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../common/Layout';

function Contact() {
	const path = process.env.PUBLIC_URL;

	// info
	const [ContactUs, setContactUs] = useState([]);

	// contact_form
	const history = useHistory();
	const initVal = {
		contact_name: '',
		contact_email: '',
		contact_branch: '',
		contact_message: '',
	};

	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};

		if (value.contact_name.length < 1) {
			errs.contact_name = '입력항목을 1글자 이상 입력하세요.';
		}
		if (value.contact_email.length < 8 || !/@/.test(value.contact_email)) {
			errs.contact_email = '@를 포함한 전체 이메일 주소를 입력하세요';
		}
		if (value.contact_branch === '') {
			errs.contact_branch = '항목을 선택해 주세요';
		}
		if (value.contact_message.length < 10) {
			errs.contact_message = '남기는 말은 10글자 이상 입력하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};
	const handleCheck = (e) => {
		let isChecked = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isChecked = true;
		});
		setVal({ ...Val, [name]: isChecked });
	};
	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		setVal({ ...Val, [name]: isSelected });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
		setSubmit(true);
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('제출이 완료되었습니다.');
			history.push('/contactResult');
			window.scrollTo(0, 0);
		}
	}, [Err, Submit, history]);

	// kakao map
	const { kakao } = window;

	const mapContainer = useRef(null);
	const markerOptions = [
		{
			title: '본점',
			latlng: new kakao.maps.LatLng(37.4261458, 126.648286),
			imgSrc: `${path}/img/placeholder.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
			tel: 'Tel. 032-1234-5678',
			address: '82, Ongnyeon-ro, Yeonsu-gu, Incheon, Republic of Korea',
		},
		{
			title: '안양지점',
			latlng: new kakao.maps.LatLng(37.3851989, 126.9510398),
			imgSrc: `${path}/img/placeholder.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 66) },
			tel: 'Tel. 031-1212-3344',
			address: '711, Gyeongsu-daero, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea',
		},
		{
			title: '서울지점',
			latlng: new kakao.maps.LatLng(37.4706014, 126.9369485),
			imgSrc: `${path}/img/placeholder.png`,
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
		axios.get(`${path}/DB/contactInfo.json`).then((json) => {
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

			{/* info */}
			<div className='info'>
				{ContactUs.map((data) => {
					return (
						<div key={data.contactMethod}>
							<img src={`${path}/img/${data.pic}`} alt={data.contactMethod} />
							<p>{data.contactMethod}</p>
							<span>{data.contactDetail}</span>
						</div>
					);
				})}
			</div>

			{/* contact_form */}
			<div className='wrap'>
				<form action='' method='get' id='contact_form' onSubmit={handleSubmit}>
					<fieldset>
						<legend className='hidden'>contact 입력 폼 양식</legend>
						<h2>Get In Touch</h2>
						<div>
							<label htmlFor='contact_name'>NAME</label>
							<input
								type='text'
								name='contact_name'
								id='contact_name'
								value={Val.contact_name}
								onChange={handleChange}
							/>
							<p className='err'>{Err.contact_name}</p>
						</div>
						<div>
							<label htmlFor='contact_email'>E-MAIL</label>
							<input
								type='text'
								name='contact_email'
								id='contact_email'
								value={Val.contact_email}
								onChange={handleChange}
							/>
							<p className='err'>{Err.contact_email}</p>
						</div>
						<div>
							<label htmlFor='contact_branch'>BRANCH</label>
							<select name='contact_branch' id='contact_branch' onChange={handleSelect}>
								<option value=''></option>
								<option value='본점'>본점</option>
								<option value='안양지점'>안양지점</option>
								<option value='서울지점'>서울지점</option>
							</select>
							<p className='err'>{Err.contact_branch}</p>
						</div>
						<div>
							<label htmlFor='contact_message'>MESSAGE</label>
							<textarea
								name='contact_message'
								id='contact_message'
								cols='30'
								rows='10'
								value={Val.contact_message}
								onChange={handleChange}
							></textarea>
							<p className='err'>{Err.contact_message}</p>
						</div>
						<div>
							<input type='submit' value='SUBMIT' id='contact_submit' />
						</div>
					</fieldset>
				</form>
			</div>

			{/* kakao map */}
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
							<Link
								to='#'
								onClick={(e) => {
									e.preventDefault(e);
								}}
							>
								{data.title}
							</Link>
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
