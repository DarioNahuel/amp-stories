import Page from '../Page';
import Image from '../Image';
import Recap from '../Recap';
import Result from '../Result';
import Title from '../Title';
import Link from '../Link';

const Panel = (props) => {

    const {
        id,
        match,
        media_info,
        title,
        external_source,
        recap,
    } = props;

    let media;

    if (media_info.media_type === 'IMAGE') {

        media = (
            <Image
                src={media_info.media_url}
                width="720"
                height="1280"
                layout="responsive"
            />
        );

    } else if (media_info.media_type === 'VIDEO') {

        media = (
            <amp-video
                autoplay=""
                loop=""
                width="720"
                height="960"
                poster={media_info.media_poster_url}
                layout="responsive">
                <source src={media_info.media_url} type="video/mp4" />
            </amp-video>
        );

    }

    return (
        <Page id={id}>
            <amp-story-grid-layer template="fill">
                {media}
            </amp-story-grid-layer>
            {title && <Title title={title}/>}
            {match && <Result {...match}/>}
            {recap && <Recap {...recap}/>}
            {external_source && <Link {...external_source}/>}
        </Page>
    );

};

export default Panel;