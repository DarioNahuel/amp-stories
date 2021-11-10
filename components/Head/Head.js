import NextHead from 'next/head'
import PropTypes from 'prop-types';

import config from '../../config';

const Head = (props) => {

    const {
        title,
    } = props;

    return (
        <NextHead>
            <title>{title}</title>
            <script async key="amp-story" custom-element="amp-story" src={config.amp.source.story} />
            <script async custom-element="amp-video" src={config.amp.source.video} />
        </NextHead>
    );

};

Head.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Head;