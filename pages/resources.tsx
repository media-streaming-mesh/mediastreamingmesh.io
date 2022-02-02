import { FiExternalLink } from "react-icons/fi";
import {
	resourcesArticles,
} from "../data/resourcesList";
import styles from "../styles/pages/ResourcesPage.module.scss";
import { IResourcesArticle, IResourcesMedia } from "../types/types";
import CustomImage from "../components/reusables/CustomImage";
import Layout from "../components/Layout";

const Resources = () => {
	return (
		<Layout pagePath="/resources" pageTitle="Resources">
			<div className={styles.Resources}>
						<HeaderSection />
				<div className={styles.ResourcesColumnContainer}>
					<div className={styles.ResourcesLeftContainer}>
						<div className={styles.ResourcesArticleGrid}>
							{resourcesArticles.map((article, i) => {
								return (
									<ResourcesArticle
										image={article.image}
										title={article.title.length > 70 ? `${article.title.slice(0, 71)}...` : article.title}
										link={article.link}
										linkText={article.linkText}
										author={article.author}
										key={i}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

const HeaderSection = () => {
	return (
		<div className={styles.HeaderSection}>
			<h1 className={styles.HeaderSectionEyebrow}>Resources</h1>
			<h2>Learn more about <br />Media Streaming Mesh</h2>
			<p className={styles.HeaderSectionShortText}>Check out the latest blog articles, podcasts, videos, and more from the Media Streaming Mesh community.</p>
		</div>
	)
}

const ResourcesArticle = ({
	image,
	title,
	link,
	linkText,
	author,
}: IResourcesArticle) => {
	return (
		<a href={link} target="_blank" className={styles.ResourcesArticle}>
				<img src={image} alt={title}  />
			<div className={styles.ResourcesArticleContentContainer}>
				<a
					className={styles.ResourcesLink}
					href={link}
					target="_blank"
				>
					<FiExternalLink className={styles.ResourcesLinkIcon} />
					<p>Article: {linkText}</p>
				</a>
				<h6 className={styles.ResourcesArticleTitle}>{title}</h6>
				<p className={styles.ResourcesArticleAuthor}>
					by {author}
				</p>
			</div>
		</a>
	);
};

export default Resources;
