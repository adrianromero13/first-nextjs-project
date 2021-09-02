import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail
        image="https://www.frommers.com/system/media_items/attachments/000/862/360/s980/AvalonAerial_2006_1-crop.jpg?1520895480"
        title="A First Meetup"
        address="Some Street 5, Some City"
        description="The meetup description"
      />
    </>
  );
}

// when using getStaticProps, getStaticPaths must be used
export async function getStaticPaths() {
  // associates the page with all possible paths the router can make
  // can be performed dynamically
  return {
    // fallback must be used
    fallback: false,  // false value returns 44 if path not found
    // fallback: true, // attempts to generate based on available data
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId; // url contains meetupId

  console.log(meetupId);
  // fetch data for single meetup

  return {
    props: {
      meetupData: {
        image:
          "https://www.frommers.com/system/media_items/attachments/000/862/360/s980/AvalonAerial_2006_1-crop.jpg?1520895480",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup description",
        id: meetupId,
      },
    },
  };
}

export default MeetupDetails;
