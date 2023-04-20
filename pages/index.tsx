import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";
import { getAllPosts } from "../lib/api";
import {
	BlogMetadata,
	ImgPaths,
	RouterPaths,
	SectionHeaders,
} from "../types/enums";
import {
	IBlogMetadata,
	ICompanyObj,
	IFeatureObj,
} from "../types/types";
import {
	featuresArr,
} from "../data/landingPageArrs";
import SectionHeader from "../components/reusables/SectionHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Home = ({
	allPosts,
}: {
	allPosts: IBlogMetadata[];
}) => {
	return (
		<Layout pageTitle="Home">
			<div className={styles.Home}>
				<HeroBanner />
				<FeaturesSection />
				<VideoSection />
				<CodeSection />
			</div>
		</Layout>
	);
};

const HeroBanner = () => {
	return (
		<div className={styles.HomeHeader}>
			<div className={styles.HomeHeaderTextContainer}>
				<img
					src={ImgPaths.LogoDarkFontHorizontalSVG}
					alt="logo"
					className={styles.HomeHeaderLogo}
				/>
				<h2 className={styles.HomeHeaderTextSubheader}>
					An open source project for supporting RTP-based real-time media applications 
					{"\n"}in K8s clusters
				</h2>
			</div>
		</div>
	);
};

const FeaturesSection = () => {
	return (
		<div className={styles.FeaturesSection}>
			<div
				className={
					styles.FeaturesSectionShortDescriptionContainer
				}
			>
				<p
					className={
						styles.FeaturesSectionShortDescriptionContainerText
					}
				>
					The goal of Kubernetes is to provide a "platform for automating deployment, scaling, 
					and operations of application containers across clusters of hosts". 
				</p>
				<p
					className={
						styles.FeaturesSectionShortDescriptionContainerText
					}
				>
					Most applications deployed in Kubernetes today are web-based, and so much of the effort around networking in Kubernetes is optimised for web applications. 
					Furthermore, a service mesh architecture (exemplified by Istio), where applications communicate with each other via web proxies rather than directly over IP, 
					is becoming a standard in cloud native deployments.
				</p>
				<p
					className={
						styles.FeaturesSectionShortDescriptionContainerText
					}
				>
					Media Streaming Mesh enables developers of real time media applications based on RTP
					to focus on their business logic, whilst the Media Streaming Mesh infrastructure 
					facilitates real-time connectivity for microservices.
				</p>
			</div>
			<div className={styles.FeaturesSectionList}>
				{featuresArr.map(
					(feature: IFeatureObj, i: number) => (
						<IndividualCard key={i} feature={feature} />
					)
				)}
			</div>
		</div>
	);
};

interface IIndividualCardProps {
	feature: IFeatureObj;
}

const IndividualCard = ({
	feature,
}: IIndividualCardProps) => {
	return (
		<div className={styles.IndividualCard}>
			{feature.icon}
			<div className={styles.IndividualCardTextContainer}>
				<p className={styles.IndividualCardTextBold}>
					{feature.textBold}
				</p>
				<p className={styles.IndividualCardText}>
					{feature.text}
				</p>
			</div>
		</div>
	);
};

const VideoSection = () => {
	return (
		<div className={styles.VideoSection}>
			<SectionHeader text={SectionHeaders.VideoSection} />
			<div className={styles.VideoSectionVideoContainer}>
				<ReactPlayer
					url={"https://www.youtube.com/watch?v=FQTu_-UT5gw"}
					className={styles.VideoSectionVideo}
					width="100%"
					height="100%"
					controls={true}
				/>
			</div>
		</div>
	);
};

const CodeSection = () => {
	return (
		<div className={styles.CodeSection}>
			<SectionHeader text={SectionHeaders.CheckOutCode} />
			<div className={styles.CodeSectionButtonContainer}>
				<a
					className={styles.CodeSectionButton}
					href="https://github.com/media-streaming-mesh"
					target="_blank"
				>
					<AiFillGithub
						className={styles.CodeSectionButtonIcon}
					/>{" "}
					<span>Github</span>
				</a>
				<Link href={RouterPaths.Docs}>
					<a className={styles.CodeSectionButton}>
						<span>Documentation</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

const IndividualCompanyCard = ({
	company,
}: {
	company: ICompanyObj;
}) => {
	return (
		<a
			href={company.link}
			target="_blank"
			className={styles.IndividualContributorContainer}
		>
			<div
				className={
					styles.IndividualContributorLogoContainer
				}
			>
				<img
					className={styles.IndividualContributorLogo}
					src={company.logo}
					alt={`${company.name} Logo`}
				/>
			</div>
		</a>
	);
};

export default Home;
