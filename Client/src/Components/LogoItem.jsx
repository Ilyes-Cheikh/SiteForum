import React from 'react';


function LogoItem(props) {
    return (
        <div className="brand-logo-item">
            
                <img src={require('../Assets/images/sponsors/' + props.logoSrc).default} alt="Businex-Logo"/>
            
        </div>
    );
}

export default LogoItem;