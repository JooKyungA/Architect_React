import Layout from '../common/Layout';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ContactResult() {
	return (
		<Layout name={'ContactResult'}>
			<h1>CONTACT</h1>
			<p>
				Feel free to contact us if you have any questions! If you send the three messages below, the
				person in charge will check and contact you as soon as possible. Telephone calls and
				face-to-face visits are also welcome.
			</p>
			<div className='wrap'>
				<div className='pic'></div>
				<div className='txt'>
					<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
					<p>
						메세지 전송이 <strong>완료</strong> 되었습니다.
					</p>
					<span>
						메세지를 남겨주셔서 감사드립니다. <br /> 담당자가 확인 후 빠른 시일 내에 이메일로 답변을
						드릴 예정입니다.
					</span>
					<Link to='/'>HOME</Link>
				</div>
			</div>
		</Layout>
	);
}

export default ContactResult;
