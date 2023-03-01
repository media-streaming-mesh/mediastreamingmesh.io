import { FcPrivacy, FcFlashOn, FcWorkflow } from "react-icons/fc";
import { ImgPaths } from "../types/enums";
import { ICompanyObj, IEventObj, IFeatureObj } from "../types/types";
import styles from '../styles/pages/Home.module.scss'

export const featuresArr: IFeatureObj[] = [
	{
		icon: (
			<FcPrivacy className={styles.IndividualCardIcon} />
		),
		textBold: `Security &${String.fromCharCode(
			160
		)}Observability`,
		text: `Authenticates traffic senders using SPIFFE/SPIRE and can optionally encrypt traffic as it flows from pod to pod using${String.fromCharCode(
			160
		)}sRTP. Moreover it monitors jitter and packet loss across the mesh, enabling DevOps teams to quickly locate and resolve connectivity issues`,
	},
	{
		icon: (
			<FcWorkflow className={styles.IndividualCardIcon} />
		),
		textBold: `Deployability${String.fromCharCode(
			160
		)}`,
		text: `Lightweight per-node data plane proxy, and per-cluster control plane proxy ensures a much lower footprint than per-pod web proxies, making it suitable for deployment${String.fromCharCode(
			160
		)}at the edge.`,
	},
	{
		icon: (
			<FcFlashOn className={styles.IndividualCardIcon} />
		),
		textBold: `Low-Latency${String.fromCharCode(
			160
		)}`,
		text: `An RTP data plane proxy adds minimal latency, in contrast to web proxies that terminate TCP connections at each${String.fromCharCode(
			160
		)}hop.`,
	},
];
