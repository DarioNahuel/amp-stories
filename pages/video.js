import Head from '../components/Head';
import Story from '../components/Story';
import Panel from '../components/Panel';

export const config = { amp: true }

const mockData = [
    {
        id: '1',
        media_info: {
            id: '1',
            media_type: 'VIDEO',
            media_poster_url: 'https://i.ibb.co/gw7dLvd/rocky6.jpg',
            media_url: 'https://pouch.jumpshare.com/preview/d6F10veG0-bACwEQGXECd3p9_SeGQz22Dp9X6eAoFig_XJ3ki1BOIgOZVqVO52_lQD_cZUiDBwOgOn-rEACN5MxzQcnklbbCSrmKinBo1BXVAxBr8_aIZzhJuJxrnCuPPeD6xGZsaNkTSYQyeD7nyeTqh-Sdp5MeIaxN38s0iAw.mp4',
        },
    },
    {
        id: '2',
        media_info: {
            id: '2',
            media_type: 'VIDEO',
            media_poster_url: 'https://i.ibb.co/gw7dLvd/rocky6.jpg',
            media_url: 'https://pouch.jumpshare.com/preview/DLM-edIv7g6aLCWcQnUG219z4Nd_b3JNPMIHR8hSOPhHonEE0ebCj6N-IntOOB8sb4eR0hal-0B9uhSRzyvBuDD8930lF7irbbYSs4F2vKYQNY0Af85sZbUeW4Cdfp5b.mp4',
        },
    },
    {
        id: '3',
        media_info: {
            id: '3',
            media_type: 'VIDEO',
            media_poster_url: 'https://i.ibb.co/gw7dLvd/rocky6.jpg',
            media_url: 'https://pouch.jumpshare.com/preview/xpydtjEY8y2G0PhU7nKSAJYcwoqJNS6XqEcy0alikRAGjPb-Fjnuxs8GPJVgB94szoi7T2dRtWOol3is9FOxnOlPZNsFPsMsnCG_RH-15TgQNY0Af85sZbUeW4Cdfp5b.mp4',
        },
    },
    {
        id: '4',
        media_info: {
            id: '4',
            media_type: 'VIDEO',
            media_poster_url: 'https://i.ibb.co/gw7dLvd/rocky6.jpg',
            media_url: 'https://pouch.jumpshare.com/preview/pamlQ3hfIF5tgeAKCcJsToo965ilq5p9YZZP4GLmUU41M7IeUtDTd6rrPknSszsj7CTSOKFvac-xz1qm1kG7Ep7YouM6HsWubL0rU2Alw6IQNY0Af85sZbUeW4Cdfp5b.mp4',
        },
    },
    {
        id: '5',
        media_info: {
            id: '5',
            media_type: 'VIDEO',
            media_poster_url: 'https://i.ibb.co/gw7dLvd/rocky6.jpg',
            media_url: 'https://pouch.jumpshare.com/preview/nvFipaOe4V4QrORus9GSTGYiYQYcQN1MZ4SIiijiYHQx1UenYNsrTxRRTDR7Wndj0fOum593heKvMtVsdy5MNtUouBGgEHneqxt6LJqpXlkQNY0Af85sZbUeW4Cdfp5b.mp4',
        },
    },
    {
        id: '6',
        media_info: {
            id: '6',
            media_type: 'VIDEO',
            media_poster_url: 'https://i.ibb.co/gw7dLvd/rocky6.jpg',
            media_url: 'https://pouch.jumpshare.com/preview/CFHLNm1IQHlxDA32bXzHmJknTXq_-xQCeplc1XuGc_dvljm_XqerMt53q9ykAcm5k86-t25yby44ekO5p5nSvT71TYn0oZ9SDnW1FveWQKsQNY0Af85sZbUeW4Cdfp5b.mp4',
        },
        external_source: {
            url: 'https://itunes.apple.com/us/movie-collection/rocky-heavyweight-collection/id835135072',
            title: 'Read More',
        }
    },
    
];

export const Home = () => {

  return (
  <>
    <Head title={'Stories'} />
    <Story>
      {mockData.map(data => (
        <Panel key={data.id} {...data}/>
      ))}
    </Story>
  </>
)
}

export default Home;