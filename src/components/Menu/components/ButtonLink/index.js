import React from 'react';

function ButtonLink(props) {
    console.log(props);
    // props => {
    //          className: "o que for passado",
    //          href: "o que for passado"
    //}

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;