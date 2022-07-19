import React, {useState} from 'react';
import logoImage from "../../img/logo.svg"
import styles from "./Header.module.scss"
import MobileMenu from "./MobileMenu/MobileMenu";
const Header = ({menu}) => {

    const [mobMenuActive, setMobMenuActive] = useState(false)
    let header = ""
    if (menu) {
        header = <div className={styles.burgerBtn} onClick={() => {setMobMenuActive(!mobMenuActive)}}>
                    <span/>
                </div>
    }
    return (
        <div>
            <header className={styles.header}>
                {header}
                <div className={styles.logo}>
                    <img className={styles.logoImage} src={logoImage} alt=''/>
                </div>
            </header>
            <MobileMenu active={mobMenuActive} setActive={setMobMenuActive}/>
        </div>
    )};

export default Header;