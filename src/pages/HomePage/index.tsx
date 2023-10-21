import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
	const [value, setValue] = useState('');

	const navigate = useNavigate();

	const onClick = () => {
		navigate(`/room/${value}`);
	};

	return (
		<>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={onClick}>Join conference</button>
		</>
	);
}

export default HomePage;
