import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Join() {
	const history = useHistory();
	const termsValue =
		"제 1 장 총 칙 제 1 조 (목적) 본 이용약관(이하 '약관'이라 합니다)은DCLARCHITECTS와 이용	고객(이하 '회원'이라 합니다)간에 DCL ARCHITECTS가 제공하는 홈페이지 서비스(이하	'홈페이지' 또는 '서비스'라 합니다)의 가입조건 및 이용에 관한 제반 사항과 기타 필요한	사항을 구체적으로 규정함을 목적으로 합니다. 제 2 조 (용어의 정의) (1) 이 약관에서사용하는 용어의 정의는 다음과 같습니다. '회원'이라 함은 이 약관에 동의하고 서비스를	이용하는 이용자를 말합니다. '이용계약'이라 함은 이 약관을 포함하여 서비스 이용과 관련하여 DCL ARCHITECTS 회원 간에 체결하는 모든 계약을 말합니다. '이용자ID'라 함은	회원의 식별 및 서비스 이용을 위하여 회원의 신청에 따라 DCL ARCHITECTS가 회원별로	부여하는 고유한 문자와 숫자의 조합을 말합니다. '비밀번호'라 함은 이용자ID로 식별되는	회원의 본인 여부를 검증하기 위하여 회원이 설정하여 DCL ARCHITECTS에 등록한 고유의 문자와 	숫자의 조합을 말합니다. '단말기'라 함은 서비스에 접속하기 위해 회원이 이용하는 개인용 	컴퓨터, PDA, 태블릿pc, 스마트폰 등의 전산장치를 말합니다. '해지'라 함은 DCL ARCHITECTS	또는 회원이 이용계약을 해약하는 것을 말합니다. (2) 이 약관에서 사용하는 용어 중 	제1항에서 정하지 아니한 것은 관계 법령 및 별도 개별약관에서 정하는 바에 따르며, 그 	외에는 일반 관례에 따릅니다. 제 3 조 (이용약관의 효력 및 변경) (1) 이 약관은 홈페이지를 	통해 온라인으로 공시하고 회원의 동의와 회원가입으로 효력을 발생하며, 합리적인 사유가 	발생할 경우 DCL ARCHITECTS는 관련 법령에 위배되지 않는 범위 안에서 개정할 수 있습니다. 	개정된 약관은 정당한 절차에 따라 홈페이지를 통해 공지함으로써 효력을 발휘합니다. (2) 	회원은 정기적으로 홈페이지를 방문하여 약관의 변경사항을 확인하여야 합니다. 변경된 약관에 	대한 정보를 알지 못해 발생하는 회원의 피해는 DCL ARCHITECTS에서 책임지지 않습니다. (3) 	회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴(해지)를 요청할 수 있습니다. 제 4 조 	(약관외 준칙) DCL ARCHITECTS는 필요한 경우 서비스 내의 개별항목에 대하여 개별약관 정할 	수 있으며, 이 약관과 개별약관의 내용이 상충되는 경우에는 개별약관의 내용을 우선하여 	적용합니다.";

	const initVal = {
		agree: null,
		memberType: null,
		userName: '',
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		join_branch: '',
		project: null,
	};

	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const num = /[0-9]/;
		const eng = /[a-zA-Z]/;
		const spc = /[~!@#$%^&*()_+?><]/;

		if (!value.agree) {
			errs.agree = '필수 입력항목을 체크해주세요';
		}
		if (!value.memberType) {
			errs.memberType = '필수 입력항목을 체크해주세요';
		}
		if (value.userName.length < 1) {
			errs.userName = '입력항목을 1글자 이상 입력하세요.';
		}
		if (value.userid.length < 5) {
			errs.userid = '입력항목을 5글자 이상 입력하세요.';
		}
		if (
			value.pwd1.length < 5 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = '비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 포함하여 동일하게 입력하세요';
		}
		if (!value.pwd2 || value.pwd1 !== value.pwd2) {
			errs.pwd2 = '비밀번호를 동일하게 입력해주세요';
		}
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '@를 포함한 전체 이메일 주소를 입력하세요';
		}
		if (value.join_branch === '') {
			errs.join_branch = '항목을 선택해 주세요';
		}
		if (!value.project) {
			errs.project = '필수 입력항목을 체크해주세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...Val, [name]: isChecked });
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
			alert('회원가입이 완료되었습니다.');
			history.push('/JoinResult');
			window.scrollTo(0, 0);
		}
	}, [Err, Submit, history]);

	return (
		<Layout name={'Join'}>
			<h1>JOIN</h1>
			<p>
				If you sign up for our site, you can see more news and events! There are special benefits
				only for members, so try signing up now.
			</p>
			<form action='' method='get' id='member' onSubmit={handleSubmit}>
				<fieldset>
					<legend className='hidden'>회원가입 폼 입력 양식</legend>
					<h2>회원약관</h2>
					<textarea
						name='terms'
						id='terms'
						cols='30'
						rows='10'
						value={termsValue}
						readOnly
					></textarea>
					<div className='agreement'>
						<input type='checkbox' name='agree' id='agree' onChange={handleCheck} />
						<label htmlFor='agree'>약관에 동의합니다</label>
						<p className='err'>{Err.agree}</p>
					</div>
					<h2>MEMBER INFORMATION</h2>
					<table>
						<caption className='hidden'>
							회원가입을 위한 아이디, 비밀번호, 이메일 ,성별, 학력, 취미, 남기는 말 입력 테이블
						</caption>
						<tbody>
							<tr>
								<th scope='row'>Member Type *</th>
								<td>
									<input
										type='radio'
										name='memberType'
										id='corporate'
										value='corporate'
										onChange={handleRadio}
									/>
									<label htmlFor='corporate'>Corporate</label>
									<input
										type='radio'
										name='memberType'
										id='individual'
										value='individual'
										onChange={handleRadio}
									/>
									<label htmlFor='individual'>Individual</label>
									<p className='err'>{Err.memberType}</p>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='userName'> Name *</label>
								</th>
								<td>
									<input
										type='text'
										name='userName'
										id='userName'
										placeholder='이름을 입력하세요.'
										value={Val.userName}
										onChange={handleChange}
									/>
									<p className='err'>{Err.userName}</p>
								</td>
							</tr>

							<tr>
								<th scope='row'>
									<label htmlFor='userid'>User ID *</label>
								</th>
								<td>
									<input
										type='text'
										name='userid'
										id='userid'
										placeholder='아이디를 입력하세요.'
										value={Val.userid}
										onChange={handleChange}
									/>
									<p className='err'>{Err.userid}</p>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>Password *</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										placeholder='비밀번호를 입력하세요.'
										value={Val.pwd1}
										onChange={handleChange}
									/>
									<p className='err'>{Err.pwd1}</p>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>Confirm Password *</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										placeholder='비밀번호를 재입력하세요.'
										value={Val.pwd2}
										onChange={handleChange}
									/>
									<p className='err'>{Err.pwd2}</p>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-mail *</label>
								</th>
								<td>
									<input
										type='text'
										name='email'
										id='email'
										placeholder='이메일 주소를 입력하세요.'
										value={Val.email}
										onChange={handleChange}
									/>
									<p className='err'>{Err.email}</p>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='join_branch'>Branch *</label>
								</th>
								<td>
									<select name='join_branch' id='join_branch' onChange={handleSelect}>
										<option value=''>선택해주세요</option>
										<option value='본점'>본점</option>
										<option value='안양지점'>안양지점</option>
										<option value='서울지점'>서울지점</option>
									</select>
									<p className='err'>{Err.join_branch}</p>
								</td>
							</tr>
							<tr>
								<th scope='row'>Type of Project</th>
								<td>
									<input
										type='checkbox'
										name='project'
										id='architecture'
										value='architecture'
										onChange={handleCheck}
									/>
									<label htmlFor='architecture'>Architecture</label>
									<input
										type='checkbox'
										name='project'
										id='interior'
										value='interior'
										onChange={handleCheck}
									/>
									<label htmlFor='interior'>Interior</label>
									<p className='err'>{Err.project}</p>
								</td>
							</tr>
							<tr>
								<th colSpan='2'>
									<input type='submit' value='SUBMIT' id='join_submit' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Join;
