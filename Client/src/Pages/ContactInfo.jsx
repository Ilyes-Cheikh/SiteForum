import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';


const ContactInfo = ({address}) => {
    return (
        <Fragment>
            <div className="widget-item m-0">
             
                <Link to="/"><img src={require('../Assets/images/16forum_blanc.png').default} width="100%"/></Link>
            </div>
        </Fragment>
    );
};

export default ContactInfo;