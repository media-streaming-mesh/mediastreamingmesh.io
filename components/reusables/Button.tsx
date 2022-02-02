import React from "react";
import styles from "../../styles/components/Button.module.scss";
import { EButtonType } from "../../types/enums";
import { RiArrowRightSLine } from "react-icons/ri";

export const Button = ({
	onClick,
	text,
	buttonType,
	disabled = false,
	dark = false,
}: {
	onClick: () => void;
	text: string;
	buttonType: EButtonType;
	disabled?: boolean;
	dark?: boolean;
}) => {
	return (
		<button
			disabled={disabled}
			className={`${styles[buttonType]} ${
				dark ? styles[`${buttonType}Dark`] : ""
			}`}
			onClick={onClick}
		>
			<span>{text}</span>
			{buttonType === EButtonType.TextLarge ||
			(buttonType === EButtonType.TextMedium &&
				!disabled) ? (
				<RiArrowRightSLine
					className={styles[`${buttonType}CarrotIcon`]}
				/>
			) : null}
		</button>
	);
};

export const CustomLink = ({
	link,
	buttonType,
	disabled = false,
	text,
	dark = false,
	openNewWindow = false,
}: {
	link: string;
	text: string;
	buttonType: EButtonType;
	disabled?: boolean;
	dark?: boolean;
	openNewWindow: boolean;
}) => {
	return (
		<a
			target={openNewWindow ? "_blank" : "_self"}
			href={link}
			className={`${styles[buttonType]} ${
				dark ? styles[`${buttonType}Dark`] : ""
			} ${disabled ? styles[`${buttonType}Disabled`] : ""}`}
		>
			<span>{text}</span>
			{(buttonType === EButtonType.TextLarge ||
			buttonType === EButtonType.TextMedium) &&
				!disabled ? (
				<RiArrowRightSLine
					className={styles[`${buttonType}CarrotIcon`]}
				/>
			) : null}
		</a>
	);
};
