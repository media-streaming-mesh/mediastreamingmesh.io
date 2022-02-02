import React from 'react'
import styles from '../../styles/components/SectionHeader.module.scss'
import { Colors, SectionHeaders } from '../../types/enums';

const SectionHeader = ({text, light = false}: {text: SectionHeaders, light?: boolean}) => {
    return (
			<h2 style={light ? {color: Colors.TextLight} : {}} className={styles.SectionHeader}>
				{text}
			</h2>
		);
}

export default SectionHeader
