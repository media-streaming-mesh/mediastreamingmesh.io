import React from "react";
import Head from "next/head";
import styles from "../styles/layout/Layout.module.scss";
import Navbar from "./globals/Navbar";
import Footer from "./globals/Footer";
import { NextSeo } from "next-seo";

export const siteTitle = "Media-Streaming-Mesh";

const Layout = ({
	pageTitle,
	pagePath,
	children,

}: {
		pageTitle?: string;
		pagePath?: string;
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<div className={styles.LayoutContainer}>
			<Head>
				<link
					rel="icon"
					href="/assets/shared/logos/logo-favicon.png"
				/>
			</Head>
			<NextSeo
				title={`Media Streaming Mesh | ${pageTitle}`}
				description="An open source project for supporting RTP-based real-time media applications in Kubernetes clusters"
				canonical={`https://mediastreamingmesh.io${pagePath || ""}`}
				openGraph={{
					url: `https://mediastreamingmesh.io${pagePath || ""}`,
					title: `Media Streaming Mesh | ${pageTitle}`,
					description:
						"An open source project for supporting RTP-based real-time media applications in Kubernetes clusters",
					images: [
						{
							url: "https://mediastreamingmesh.io/assets/shared/logos/logo-dark-vertical-2x.png",
							alt: "Media Streaming Mesh Logo",
							type: "image/png",
							width: 222,
							height: 121
						},
					],
					site_name: "Media-Streaming-Mesh",
				}}
				twitter={{
					handle: "@ciscoemerge",
					site: "@ciscoemerge",
					cardType: "summary_large_image"
				}}
			/>
			<main className={styles.Layout}>
				<Navbar />
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
