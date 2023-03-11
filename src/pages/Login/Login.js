import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	LoginBtnStyled,
	LoginFormStyled,
	LoginInputStyled,
	LoginLockStyled,
	LoginProfilStyled,
	LoginTitleStyled,
} from "./Login.styled";
export const Login = () => {
	const loginRef = useRef("");
	const lockRef = useRef("");
	const navigate = useNavigate();
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(lockRef?.current.value);
		console.log(loginRef?.current.value);
		axios
			.post(`http://167.71.9.83:8080/v1/users/login`, {
				username: loginRef.current?.value,
				password: lockRef.current?.value,
			})
			.then((data) => {
				console.log(data.data);
				if (data.status === 202) {
					
					navigate("/admin/foundation");
					localStorage.setItem("token", JSON.stringify(data.data));
				}
			});
	};
	return (
		<Container>
			<LoginFormStyled onSubmit={(evt) => handleSubmit(evt)}>
				<LoginTitleStyled>Kirish</LoginTitleStyled>
				<LoginProfilStyled>
					<LoginInputStyled ref={loginRef} placeholder='Login' />
				</LoginProfilStyled>

				<LoginLockStyled>
					<LoginInputStyled ref={lockRef} placeholder='Parol' />
				</LoginLockStyled>
				<LoginBtnStyled>Kirish</LoginBtnStyled>
			</LoginFormStyled>
		</Container>
	);
};
