import Head from '../components/Head';
import Story from '../components/Story';
import Panel from '../components/Panel';

export const config = { amp: true }

const mockData = [
  {
    id: '1',
    media_info: {
      id: '1',
      media_type: 'IMAGE',
      media_url: 'http://3.bp.blogspot.com/-2YCsT5YwYN4/VSuB5T9i0BI/AAAAAAAAACM/NZxSE53oZ_8/s1600/rocky%2Bpelicula.jpg',
    },
    recap: {
      title: 'Rocky',
      body: 'A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.',
      genres: [
        'Drama',
        'Sport'
      ],
      rating: '8.1/10',
    },
  },
  {
    id: '2',
    media_info: {
      id: '2',
      media_type: 'IMAGE',
      media_url: 'https://i.ibb.co/b5nP87L/rocky2.jpg',
    },
    recap: {
      title: 'Rocky II',
      body: 'Rocky struggles in family life after his bout with Apollo Creed, while the embarrassed champ insistently goads him to accept a challenge for a rematch.',
      genres: [
        'Drama',
        'Sport'
      ],
      rating: '7.3/10',
    },
  },
  {
    id: '3',
    media_info: {
      id: '3',
      media_type: 'IMAGE',
      media_url: 'https://i.ibb.co/1n5cCP9/rocky3.jpg',
    },
    recap: {
      title: 'Rocky III',
      body: 'After winning the ultimate title and being the world champion, Rocky falls into a hole and finds himself picked up by a former enemy.',
      genres: [
        'Drama',
        'Sport'
      ],
      rating: '6.8/10',
    },
  },
  {
    id: '4',
    media_info: {
      id: '4',
      media_type: 'IMAGE',
      media_url: 'https://pbs.twimg.com/media/En25r0rXIAgd2qf.jpg',
    },
    recap: {
      title: 'Rocky IV',
      body: 'Rocky Balboa proudly holds the world heavyweight boxing championship, but a new challenger has stepped forward: Drago, a six-foot-four, 261-pound fighter who has the backing of the Soviet Union.',
      genres: [
        'Drama',
        'Sport'
      ],
      rating: '6.9/10',
    },
  },
  {
    id: '5',
    media_info: {
      id: '5',
      media_type: 'IMAGE',
      media_url: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6973/6973554_sa.jpg',
    },
    recap: {
      title: 'Rocky V',
      body: "Reluctantly retired from fighting, Rocky takes charge of Mickey's gym and agrees to train a young protégé who's hungry for success.",
      genres: [
        'Drama',
        'Sport'
      ],
      rating: '5.3/10',
    },
  },
  {
    id: '6',
    media_info: {
      id: '6',
      media_type: 'IMAGE',
      media_url: 'https://i.ibb.co/gw7dLvd/rocky6.jpg',
    },
    recap: {
      title: 'Rocky Balboa',
      body: "Thirty years after the ring of the first bell, Rocky Balboa comes out of retirement and dons his gloves for his final fight against the reigning heavyweight champ Mason 'The Line' Dixon.",
      genres: [
        'Drama',
        'Sport'
      ],
      rating: '7.1/10',
    },
  },
  {
    id: '7',
    title: 'Rocky',
    media_info: {
      id: '7',
      media_type: 'IMAGE',
      media_url: 'https://elcomercio.pe/resizer/HN9Ih6tE6mg1QldPd5EifL0B3_A=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/3EJRNVUYJFFHXABI7TGSZC2UUU.jpg',
    },
    external_source: {
        url: 'https://simple.wikipedia.org/wiki/Rocky',
        title: 'Read More',
    }
  },
  {
    id: '8',
    media_info: {
      id: '8',
      media_type: 'IMAGE',
      media_url: 'https://c.tenor.com/pxj6qU_dJLYAAAAC/sylvester-stallone-rocky.gif',
    },
  }
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