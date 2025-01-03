import styles from "./Avatar.module.css"

export function Avatar(props) {
    const hasBorder = props.hasBorder != false;
    return(
        <img
            className={props.hasBorder ? styles.avatarWithBoder : styles.avatar}
            src={props.src} />
    );
}