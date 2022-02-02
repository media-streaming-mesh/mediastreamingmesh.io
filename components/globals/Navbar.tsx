import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/layout/Navbar.module.scss";
import { useRouter } from "next/router";
import {
	Colors,
	ImgPaths,
	RouteNames,
	RouterPaths,
} from "../../types/enums";
import useWindowSize from "../../hooks/useWindowSize";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
	const router = useRouter();
	const size = useWindowSize();
	return (
		<div className={styles.Navbar}>
			<Link href={RouterPaths.Landing}>
				<a className={styles.NavbarLogoContainer}>
					<img
						className={styles.NavbarLogo}
						src={
							size.width < 1000
								? router.pathname === RouterPaths.Landing
									? ImgPaths.LogoDarkIconSVG
									: ImgPaths.LogoLightIconSVG
								: router.pathname === RouterPaths.Landing
									? ImgPaths.LogoDarkHorizontalSVG
									: ImgPaths.LogoLightHorizontalSVG
						}
						alt="logo"
					/>
				</a>
			</Link>
			<div className={styles.NavbarNavlinkContainer}>
				{Object.keys(RouteNames).map((path) => {
					return (
						<NavLink
							route={RouterPaths[path]}
							routeName={RouteNames[path]}
							key={path}
						/>
					);
				})}
				<a
					target="_blank"
					href="https://github.com/media-streaming-mesh"
					className={styles.NavbarNavlinkIconLink}
				>
					<AiFillGithub
						className={styles.NavbarNavlinkIcon}
						color={
							router.pathname === RouterPaths.Landing
								? Colors.White
								: Colors.TextDark
						}
					/>
				</a>
			</div>
		</div>
	);
};

interface INavLinkProps {
	route: RouterPaths;
	routeName: RouteNames;
}

const NavLink = ({ route, routeName }: INavLinkProps) => {
	const router = useRouter();
	return (
		<Link href={route}>
			<a
				style={{
					color:
						router.pathname === RouterPaths.Landing
							? Colors.White
							: Colors.TextDark,
					borderBottom:
						router.pathname === route
							? `2px solid ${
									router.pathname === RouterPaths.Landing
										? Colors.White
										: Colors.TextDark
							  }`
							: "none",
				}}
				className={styles.NavbarNavlink}
			>
				{routeName}
			</a>
		</Link>
	);
};
export default Navbar;
