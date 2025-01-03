import styles from "./Avatar.module.css"

export function Avatar(props) {
    const hasBorder = props.hasBorder != false;
    return(
        <img
            className={props.hasBorder ? styles.avatarWithBoder : styles.avatar} /* props.hasBorder sendo true, estilo será avatarWithBorder. Caso contrário, será avatar */
            src={props.src} />
    );
}