import { ImgPaths } from "./enums";

export interface IBlogMetadata {
    title: string;
    date: string;
    publishdate: string;
    authors: string | string[];
    img: string;
    tags: string[];
    layout: string;
    slug: string;
    content?: string;
}

export interface IFeatureObj {
    icon: JSX.Element;
    textBold: string;
    text: string;
}

export interface IEventObj {
    title: string;
    date: string;
    banner: string;
    link: string;
}

export interface ICompanyObj {
    name: string;
    logo: ImgPaths;
    link: string;
}

export interface IResource {
    title: string;
    author: string;
    type: "blog" | "video";
    thumbnail: string;
    link: string;
}

export interface IResourcesArticle {
	image: string;
	title: string;
	link: string;
	linkText: string;
	author: string;
}

export interface IResourcesMedia {
	image: string;
	link: string;
	mediaType: "Video" | "Webinar" |  "News" | "Conference" | "Podcast";
	title: string;
}

export interface IEventColumn {
	title: string;
	text: string;
	eventDetails?: { name: string; date: string }[];
	link: { text: string; address: string };
}