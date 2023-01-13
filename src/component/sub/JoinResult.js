import Layout from '../common/Layout';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function JoinResult() {
	return (
		<Layout name={'JoinResult'}>
			<h1>JOIN</h1>
			<p>
				If you sign up for our site, you can see more news and events! There are special benefits
				only for members, so try signing up now.
			</p>
			<div className='wrap'>
				<div className='pic'></div>
				<div className='txt'>
					<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
					<p>
						회원가입이 <strong>완료</strong> 되었습니다.
					</p>
					<span>
						회원가입을 진심으로 축하드립니다. <br /> 뉴스레터를 신청하시면 Architecture 및
						Interior와 관련된 소식을 받아보실 수 있습니다.
					</span>
					<Link to='/'>HOME</Link>
				</div>
			</div>
		</Layout>
	);
}

export default JoinResult;
