import React from "react";
import styles from "../../styles/layout/Footer.module.scss";
import { BiCopyright } from "react-icons/bi";
import { format } from "date-fns";
import { ImgPaths, RouterPaths } from "../../types/enums";
import { Router, useRouter } from "next/router";

const Footer = () => {
	const router = useRouter()
	return (
		<footer style={router.pathname === RouterPaths.Landing ? {background: "transparent"} : router.pathname === RouterPaths.Docs ? {display: "none"} : {}} className={styles.Footer}>
			<img src={ImgPaths.LogoLightHorizontalSVG} alt="logo" className={styles.FooterLogo}/>
			<p className={styles.FooterCopyright} style={router.pathname === RouterPaths.Landing ? {color: "#333"} : {}}>
				Copyright{" "}
				<BiCopyright
					className={styles.FooterCopyrightIcon}
				/>
				{format(new Date(), "y")}
			</p>
		</footer>
	);
};

export default Footer;
