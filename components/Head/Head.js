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
            <script async src="https://cdn.ampproject.org/amp-story-player-v0.js"></script>
            <link href="https://cdn.ampproject.org/amp-story-player-v0.css" rel="stylesheet" type="text/css" />
        </NextHead>
    );

};

Head.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Head;