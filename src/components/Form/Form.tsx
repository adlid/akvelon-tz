import React, { useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { Typography } from "@mui/joy";
import { FC } from "react";

interface Props {
	title: string;
	handleClick: (email:string, pass:string) => any;
}

const Form:FC<Props> = ({title, handleClick}) =>{

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

	return (
		<div>
			<CssVarsProvider>
				<Sheet
					sx={{
						maxWidth: 400,
						mx: "auto", // margin left & right
						my: 4, // margin top & botom
						py: 3, // padding top & bottom
						px: 2, // padding left & right
						display: "flex",
						flexDirection: "column",
						gap: 2,
						borderRadius: "sm",
						boxShadow: "md",
					}}
				>
					<TextField
						// html input attribute
						name="email"
						type="email"
						placeholder="johndoe@email.com"
						// pass down to FormLabel as children
						label="Email"
                        onChange={(e)=>setEmail(e.target.value)}
					/>
					<TextField
						name="password"
						type="password"
						placeholder="password"
						label="Password"
                        onChange={(e)=>setPass(e.target.value)}
					/>
					<Button
						sx={{
							mt: 1, // margin top
						}}
                        onClick={()=>handleClick(email, pass)}
					>
						{title}
					</Button>
                    {title==='Login' ? <Typography
						endDecorator={<Link href="/sign-up">Sign up</Link>}
						fontSize="sm"
						sx={{ alignSelf: "center" }}
					>
						Don't have an account?
					</Typography> :  <Typography
                        endDecorator={<Link href="/sign-in">Sign up</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: "center" }}
                    >
                        Already have an account?
                    </Typography>}
                    
				</Sheet>
			</CssVarsProvider>
		</div>
	);
}

export default Form;
