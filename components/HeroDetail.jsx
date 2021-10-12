import classes from "./HeroDetail.module.css";
import Card from "./UI/Card";

function MeetupDetail(props) {
  // console.log("MeetupDetail",props)
  return (
    <Card>
      <section className={classes.detail}>
        <img src={props.image} alt={props.name} />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </section>
    </Card>
  );
}

export default MeetupDetail;
