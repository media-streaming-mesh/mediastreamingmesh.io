import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/pages/AboutPage.module.scss";
import {
	goalsArr,
	useCasesArr,
} from "../data/aboutPageArrs";
import { FcAdvance } from "react-icons/fc";
import { Colors, SectionHeaders } from "../types/enums";

const about = () => {
	return (
		<Layout pagePath={"/about"} pageTitle="Why Media Streaming Mesh?">
			<div className={styles.AboutPage}>
				<h1 className={styles.AboutPageHeader}>
					{SectionHeaders.AboutPageHeader}
				</h1>
				<InfoSection
					header={SectionHeaders.AboutGoals}
					infoArr={goalsArr}
					bgColor={Colors.GrayBGColor}
				/>
				<InfoSection
					header={SectionHeaders.AboutUseCases}
					infoArr={useCasesArr}
					darkHover
				/>
			</div>
		</Layout>
	);
};

const SectionHeader = ({ header }: { header: SectionHeaders }) => {
	return (
		<h3 className={styles.AboutPageSectionHeader}>
			{header}
		</h3>
	);
};

const InfoSection = ({
	header,
	infoArr,
	bgColor,
	darkHover = false,
}: {
	header: SectionHeaders;
	infoArr: { text: string; icon: JSX.Element }[];
	bgColor?: string;
	darkHover?: boolean;
}) => {
	return (
		<div
			style={bgColor ? { backgroundColor: bgColor } : {}}
			className={styles.AboutPageSection}
		>
			<SectionHeader header={header} />
			<div className={styles.AboutPageSectionList}>
				{infoArr.map((info, i) => (
					<InfoBlock
						darkHover={darkHover}
						key={i}
						info={info}
					/>
				))}
			</div>
		</div>
	);
};

const InfoBlock = ({
	info,
	darkHover = false,
}: {
	info: { text: string; icon: JSX.Element };
	darkHover?: boolean;
}) => {
	return (
		<div
			className={`${styles.IndividualCard} ${
				darkHover ? styles.IndividualCardDarkHover : ""
			}`}
		>
			<div className={styles.IndividualCardIconContainer}>
				{info.icon}
			</div>
			<div className={styles.IndividualCardTextContainer}>
				<p className={styles.IndividualCardText}>
					{info.text}
				</p>
			</div>
		</div>
	);
};

export default about;
