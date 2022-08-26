import React from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from "firebase/auth";
import Form from "../../components/Form/Form";
import { useAppDispatch } from "../../hooks/redux";
import { Typography } from "@mui/joy";
import Link from "@mui/joy/Link";
import {setUser} from '../../store/reducers/UserSlice'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
	const dispatch = useAppDispatch();
  let navigate = useNavigate();
	const handleRegister = (email: string, password: string) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password).then(({user})=>{
      dispatch(setUser({

				token:user.refreshToken!,
				email:user.email!

			}))
			navigate('/')
    });
	};

	return (
		<>
			<Form title="Register" handleClick={handleRegister} />
		</>
	);
}

export default RegisterPage;
