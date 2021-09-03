import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail
        image={props?.meetupData?.image}
        title={props?.meetupData?.title}
        address={props?.meetupData?.address}
        description={props?.meetupData?.description}
      />
    </>
  );
}

// when using getStaticProps, getStaticPaths must be used
export async function getStaticPaths() {
  // associates the page with all possible paths the router can make
  // can be performed dynamically
  const client = await MongoClient.connect("mongodb://localhost/meetups-next");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // only include the id of each

  client.close();

  return {
    // fallback must be used
    fallback: false, // false value returns 44 if path not found
    // fallback: true, // attempts to generate based on available data
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId; // url contains meetupId

  const client = await MongoClient.connect("mongodb://localhost/meetups-next");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetupData = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  }); // only include the id of each

  client.close();
  // fetch data for single meetup

  return {
    props: {
      meetupData: {
        id: selectedMeetupData._id.toString(),
        title: selectedMeetupData.address,
        address: selectedMeetupData.address,
        image: selectedMeetupData.image,
        description: selectedMeetupData.description,
      },
    },
  };
}

export default MeetupDetails;
