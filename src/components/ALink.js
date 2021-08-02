import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { css } from "aphrodite";

const ALink = ({ label, to, styles }) => {
    const match = useRouteMatch({ path: to, exact: true });
    return (
        <Link to={to} className={css(styles.a, match && styles.active)}>
            {label}
        </Link>
    );
}

export default ALink;