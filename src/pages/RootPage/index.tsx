import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function RoomPage() {
	const { roomID } = useParams();

	const myMeeting = async (element: HTMLDivElement) => {
		const appID = Number(import.meta.env.VITE_ID);
		const secrete = import.meta.env.VITE_SECRET;

		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			secrete,
			roomID as string,
			Date.now().toString(),
			'Arman'
		);

		const zp = ZegoUIKitPrebuilt.create(kitToken);

		zp.joinRoom({
			container: element,
			sharedLinks: [
				{
					name: 'Personal link',
					url: `http://127.0.0.1:5173/room/${roomID}`,
				},
			],
			scenario: {
				mode: ZegoUIKitPrebuilt.GroupCall,
			},
			showTurnOffRemoteCameraButton: true,
			showTurnOffRemoteMicrophoneButton: true,
			showRemoveUserButton: true,
		});
	};
	return <div ref={myMeeting} />;
}

export default RoomPage;
