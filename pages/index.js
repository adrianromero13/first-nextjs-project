// our-domain.com/
import MeetupList from '../components/meetups/meetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://www.frommers.com/system/media_items/attachments/000/862/360/s980/AvalonAerial_2006_1-crop.jpg?1520895480',
    address: 'Some Address 5, 12345 Some City',
    description: 'This is a first Meetup',
  }, 
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://www.frommers.com/system/media_items/attachments/000/862/360/s980/AvalonAerial_2006_1-crop.jpg?1520895480',
    address: 'Some Address 6, 12346 Some City',
    description: 'This is a first Meetup',
  }, 
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://www.frommers.com/system/media_items/attachments/000/862/360/s980/AvalonAerial_2006_1-crop.jpg?1520895480',
    address: 'Some Address 7, 12347 Some City',
    description: 'This is a first Meetup',
  }, 
]
function HomePage(props) {

  return (
    <>
     <MeetupList meetups={props.meetups}/>
    </>
  );
};

// getServerSideProps 
// export async function getServerSideProps() { // only runs on server
//   // req and res properties accessible
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API

//   return {
//     props:{
//       meetups: DUMMY_MEETUPS
//     }
//   };
// };

// in page compnoent files
// export a function getStaticProps
// funciton executed during pre-rendering process to prepare props
// prior to rendering 
// can be asynchronous
export async function getStaticProps() {
  // can run fetch data processes securely
  
  // object must be returned with props property
  return {
    // function slike mapstatetoprops 
    props: {
      meetups:DUMMY_MEETUPS
    },
    // revalidate property to perform incremental static generation
    revalidate: 10 // every 10 s on the server / if requests for page

  };
}

export default HomePage;
