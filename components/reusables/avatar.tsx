import styles from '../../styles/components/Avatar.module.scss'

interface IAvatarProps {
	name: string;
	picture: string;
}

export default function Avatar({ name, picture }: IAvatarProps) {
	return (
		<div className={styles.Avatar}>
            <img
                className={styles.AvatarImage}
				src={picture}
				alt={name}
			/>
			<div className={styles.AvatarName}>{name}</div>
		</div>
	);
}
