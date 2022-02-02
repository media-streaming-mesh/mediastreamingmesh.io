import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
	DocsContextProvider,
	useDocsContext,
} from "../context/docs-context";
import styles from "../styles/pages/DocsPage.module.scss";
import { DocsSections } from "../types/enums";

import { IEventColumn } from "../types/types";

const docs = () => {
	return (
		<DocsContextProvider>
			<Layout pageTitle="Documentation" pagePath="/docs">
					<h1 style={{color: "transparent", height: "0px"}}>Documentation</h1>
				<div className={styles.DocsPage}>
					<TOCSection />
					<ContentSection />
				</div>
			</Layout>
		</DocsContextProvider>
	);
};

const TOCSection = () => {
	const {
		challenges,
		solution,
		getInvolved,
	} = useDocsContext();
	return (
		<div className={styles.TOCSection}>
			<p
				onClick={() => challenges.current.scrollIntoView()}
				className={styles.TOCSectionTopic}
			>
				{DocsSections.Challenges}
			</p>
			<p
				onClick={() => solution.current.scrollIntoView()}
				className={styles.TOCSectionTopic}
			>
				{DocsSections.Solution}
			</p>
			<p
				onClick={() => getInvolved.current.scrollIntoView()}
				className={styles.TOCSectionTopic}
			>
				{DocsSections.GetInvolved}
			</p>
		</div>
	);
};

const ContentSection = () => {
	const {
		challenges,
		solution,
		getInvolved,
	} = useDocsContext();
	return (
		<div className={styles.ContentSection}>
			<h3 className={styles.ContentSectionHeader}>
				Media Streaming Mesh
			</h3>
			<p className={styles.ContentSectionSubheader}>
				An open source project for supporting RTP-based real-time media applications in Kubernetes clusters
			</p>
			<TopicSection
				reference={challenges}
				header={DocsSections.Challenges}
			>
				<Challenges />
			</TopicSection>
			<TopicSection
				reference={solution}
				header={DocsSections.Solution}
			>
				<Solution />
			</TopicSection>
			<TopicSection
				reference={getInvolved}
				header={DocsSections.GetInvolved}
			>
				<GetInvolved />
			</TopicSection>
		</div>
	);
};

const TopicSection = ({
	header,
	children,
	reference,
}: {
	header: DocsSections;
	children: JSX.Element | JSX.Element[];
	reference: React.MutableRefObject<any>;
}) => {
	return (
		<div ref={reference} className={styles.TopicSection}>
			<h4 className={styles.TopicSectionHeader}>
				{header}
			</h4>
			{children}
		</div>
	);
};

const Challenges = () => {
	return (
		<div>
			<p className={styles.DocsPageParagraph}>
				Today's service meshes generally only support TCP-based applications (and in fact are optimised for HTTP-based web applications).
				Any support for UDP that is added to service meshes is likely to be focussed on enabling QUIC (since HTTP/3 runs over QUIC).
			</p>
			<p className={styles.DocsPageParagraph}>
				Real-time applications generally run over UDP rather than TCP.
				Media Streaming applications typically rely on RTP (the Real-time Transport Protocol) -
				which runs on top of UDP, and hence RTP will be the initial focus of Media Streaming Mesh.
				RTP enables measurement of loss and jitter as it carries sequence numbers and timestamps
				in the packet header and we will monitor these in Media Streaming Mesh.
			</p>
			<p className={styles.DocsPageParagraph}>
				One challenge with RTP is that it often runs on ephemeral UDP ports which are assigned
				by a TCP-based control channel such as SIP or RTSP.
				However proxying these TCP-based protocols will enable us to
				implement URL/URI-based routing and to map the UDP ports dynamically.
			</p>
		</div>
	);
};

const Solution = () => {
	return (
		<div>
			<p className={styles.DocsPageParagraph}>
				Our current demo implementation relies on a simple Go-based proxy that runs as a pod sidecar
				(plus a micro-CNI that creates IPtables rules to direct traffic into the sidecar,
				and a mutating webhook that injects the sidecar proxy into labelled pods).
			</p>
			<p className={styles.DocsPageParagraph}>
				Longer term our expectation is to implement:

				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						SPIFFE/SPIRE for pod to pod authentication​
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						A per-node RTP data-plane proxy (written in Golang)​
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						A per-cluster RTSP control-plane proxy (also in Golang)​
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						A per-pod MSM stub that directs traffic into the control plane and data plane
						(most likely written in Rust).​
					</li>
				</ul>
			</p>
			<p className={styles.DocsPageParagraph}>
				With that baseline we will then be able to implement other protocols (such as SIP, RIST, SMTPE 2110, "raw" RTP etc.)
			</p>
			<p className={styles.DocsPageParagraph}>
				In order to keep footprint light one key will be to deploy only the required components for the service being implemented.
			</p>
			<p className={styles.DocsPageParagraph}>
				For inter and extra-cluster traffic the per-node RTP/RTSP proxies will act as data-plane gateways,
				and the per-cluster proxies will act as control-plane gateways.
			</p>
			<p className={styles.DocsPageParagraph}>
				For enhanced performance we may also implement a high-performance data-plane proxy using VPP.
				This will be especially useful for gateway nodes, and for use-cases involving uncompessed UHD video.
			</p>
		</div>
	);
};

const GetInvolved = () => {
	return (
		<div>
			<p className={styles.DocsPageParagraph}>
				We're looking for potential users of Media Streaming Mesh to help us define the solution,
				and for developers to help us create it!
			</p>
			<p className={styles.DocsPageParagraph}>
				Please do join our
				<a
					className={styles.DocsPageLink}
					href="https://cloud-native.slack.com/app_redirect?channel=media-streaming-meshl"
				>
					Slack Channel.
				</a>
			</p>
		</div>
	);
};

export default docs;
