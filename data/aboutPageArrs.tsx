import {
	FcTreeStructure,
	FcPrivacy,
	FcWebcam,
	FcMindMap,
	FcVideoFile,
	FcDocument,
	FcNeutralTrading,
	FcCollaboration,
} from "react-icons/fc";
import styles from '../styles/pages/AboutPage.module.scss'

export const goalsArr: {
	text: string;
	icon: JSX.Element;
}[] = [
	{
		text: `Media Streaming Mesh goal is to extend the benefits of traditional meshes while enabling${String.fromCharCode(
			160
		)}additional capabilities.​`,
		icon: (
			<FcDocument className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Enable data protection using Forward Error Correction and/or E2E Encryption${String.fromCharCode(
			160
		)}​`,
		icon: (
			<FcPrivacy className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Provide functions such as sending data over multiple paths, and/or NAK-based${String.fromCharCode(
			160
		)}mechanisms.​`,
		icon: (
			<FcNeutralTrading className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Stream fan-out to multiple clients by replication and/or unicast to multicast${String.fromCharCode(
			160
		)}conversion.​`,
		icon: (
			<FcMindMap className={styles.IndividualCardIcon} />
		),
	},];

export const useCasesArr: {
	text: string;
	icon: JSX.Element;
}[] = [
	{
		text: `Contribution video - high bandwidth, RTP-based, no tolerance for${String.fromCharCode(
			160
		)}loss/jitter​​​`,
		icon: (
			<FcVideoFile className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Live video distribution RTP-based, low tolerance for${String.fromCharCode(
			160
		)}loss/jitter​`,
		icon: (
			<FcWebcam className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Retail/Industrial Edge - need low footprint, lots of RTSP video${String.fromCharCode(
			160
		)}streaming/analytics​`,
		icon: <FcTreeStructure className={styles.IndividualCardIcon} />,
	},
	{
		text: `Collaboration - ${String.fromCharCode(
			160
		)}e.g., WebRTC​`,
		icon: (
			<FcCollaboration className={styles.IndividualCardIcon} />
		),
	},
];
