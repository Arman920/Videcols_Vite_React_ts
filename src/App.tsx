import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomPage from './pages/RootPage';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<HomePage />}
			/>
			<Route
				path='/room/:roomID'
				element={<RoomPage />}
			/>
		</Routes>
	);
}

export default App;
