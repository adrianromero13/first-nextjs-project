// import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from'../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();
  // button function
  function showDetailsHandler() {
    router.push('/' + props.id); // same as the Link element
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img href={props.image} src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
