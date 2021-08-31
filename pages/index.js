// our-domain.com/
import Layout from "../components/layout/Layout";
import MeetupItem from "../components/meetups/MeetupItem";

function HomePage() {
  return (
    <>
      <Layout />
      <MeetupItem
        image="https://placeholder.com/300/600"
        src="https://via.placeholder.com/300/600"
        title="placeholder-title"
      />
    </>
  );
}

export default HomePage;
