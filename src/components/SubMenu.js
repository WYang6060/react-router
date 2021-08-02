import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useParams, useRouteMatch, Redirect } from "react-router-dom";
import ALink from "./ALink";

const MODELS_BY_BRAND = {
    Mercedes: ['A-Class', 'C-Class', 'E-Class', 'S-Class'],
    Ferrari: ['Tributo', '812', ' GTC4', 'Spider'],
    Porsche: ['Cayman', '911', 'Panamera', 'Taycan'],
    Lamborghini: ['Reventon', 'Veneno', 'Centenario', 'Gallardo'],
};

const styles = StyleSheet.create({
    ul: {
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
    },
    li: {
        margin: '2.5px 0',
        width: '100',
    },
    a: {
        display: 'flex',
        height: '100%',
        padding: '8px',
        justifyContent: 'left',
        alignItems: 'center',
        color: '#FFF',
        textDecoration: 'none',
        fontSize: '14px',
        backgroundColor: '#6b7784',
        transition: 'left .4s, background-color .4s',
        ':hover': {
            backgroundColor: '#70be5',
        },
    },
    active: {
        backgroundColor: '#ee8176',
    },
});

const SubMenu = () => {
    const { brand } = useParams();
    const { url } = useRouteMatch();
    const models = MODELS_BY_BRAND[brand];

    if (!models) {
        return <Redirect to='/error' />;
    }

    return (
        <ul className={css(styles.ul)}>
            {models.map((model) => (
                <li key={model} className={css(styles.li)}>
                    <ALink label={model} to={`${url}/${model}`} styles={styles} />
                </li>
            ))}
        </ul>
    );
}

export default SubMenu;