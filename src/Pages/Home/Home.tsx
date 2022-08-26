import React from "react";
import useAuth from '../../hooks/use-auth'

function Home() {
	const {email} = useAuth()
	return <div>
		Welcome, {email}
	</div>;
}

export default Home;
