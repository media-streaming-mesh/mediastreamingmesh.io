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
				Real-time applications generally run over UDP rather than TCP.  Media Streaming applications typically rely on RTP (the Real-time Transport Protocol) -
				which runs on top of UDP, and hence RTP will be the initial focus of Media Streaming Mesh.
				RTP enables measurement of loss and jitter as it carries sequence numbers and timestamps
				in the packet header and we will monitor these in Media Streaming Mesh.
			</p>
			<p className={styles.DocsPageParagraph}>
				One challenge with RTP is that it often runs on ephemeral UDP ports which are assigned
				by a TCP-based control channel such as SIP or RTSP.  This prevents kube-proxy from being
				able to successfully implement the ClusterIP NAT for these protocols. 
				Proxying these TCP-based control plane protocols will enable us both to
				implement URL/URI-based routing and to create the appropriate RTP proxy rules for the data plane traffic.
			</p>
			<p className={styles.DocsPageParagraph}>
				Another challenge is that many RTP-based applications rely on IP multicast.   Kubernetes networking
				doesn't generally support IP multicast.   Media Streaming Mesh's per-node RTP proxy will enable us to
				distribute RTP streams from one sender to multiple receivers over regular IP unicast, and will also enable us
				to convert from multicast to unicast and vice-versa.
			</p>
		</div>
	);
};

const Solution = () => {
	return (
		<div>
			<p className={styles.DocsPageParagraph}>
				Our current implementation consists of the following components:
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						per-cluster RTSP control plane proxy written in Golang and deployed as a Kubernetes service
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						per-node RTP data plane proxy written in Golang and deployed as a Kubernetes DaemonSet
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						per-pod RTSP stub written in asynchronous Rust and deployed as a Kubernetes pod sidecar
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						mutating webhook which injects the RTSP stub into pods, written in Golang and implemented as a Kubernetes service
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						chained micro-CNI which adds iptables rules to direct traffic into the RTSP stub, written in Golang and implemented as a Kubernetes DaemonSet
					</li>
				</ul>
			</p>
			<p className={styles.DocsPageParagraph}>
				The MSM RTSP Stub is largely reponsible for sending control plane messages to the per-cluster control plane using gRPC.  Because the stub
				shares fate with the media app in the same pod we avoid any issues around needing to mirror TCP session state to achieve control plane resilience. 
			</p>
			<p className={styles.DocsPageParagraph}>
				The MSM RTSP Stub also provides an interworking function between RTSP interleaved mode (where RTP and RTCP payloads are sent over the RTSP TCP
				control channel) and the standard RTP/RTCP over UDP mode.
			</p>
			<p className={styles.DocsPageParagraph}>
				For inter and extra-cluster traffic the per-node RTP proxies act as data-plane gateways, and MSM RTSP stubs
				co-located with the RTP proxies act as control-plane gateways.
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
						A new per-node RTP data plane written in asynchronous Rust and supporting WASM plugins​
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						A refactored Golang control plane consisting of:
						​<ol>
							<li>pluggable control plane pod supporting multiple protocols</li>
							<li>network controller pod which maps logical steams onto the physical network</li>
						</ol>
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						An enhanced MSM RTSP stub that also supports RTP multicast to RTSP unicast interworking
					</li>
				</ul>
				<ul className={styles.DocsPageList}>
					<li className={styles.DocsPageListItem}>
						A stripped-down MSM stub that only supports control plane traffic
					</li>
				</ul>
			</p>
			<p className={styles.DocsPageParagraph}>
				With that baseline we hope to empower the community to implement multiple control plane protocols (such as SIP, RIST, SMTPE 2110, WebRTC etc.)
				and to implement various data-plane plugins enabling features such as FEC (Forward Error Correction), NAK-based error correction, congestion control etc.
			</p>
			<p className={styles.DocsPageParagraph}>
				In order to keep footprint light one key will be to deploy only the required control plane and data plane components for the service being implemented.
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
				Please do join our&nbsp;
				<a
					className={styles.DocsPageLink}
					href="https://cloud-native.slack.com/app_redirect?channel=media-streaming-mesh"
				>
					Slack Channel.
				</a>
			</p>
		</div>
	);
};

export default docs;
