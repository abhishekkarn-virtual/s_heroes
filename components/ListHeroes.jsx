import ListElement from "./ListElement";
import classes from "./ListHeroes.module.css";

export default function ListHeroes(props) {
  return (
    <ul className={classes.list}>
      {props.heroes.map((hero) => (
        <ListElement name={hero.name} id={hero.id} key={hero.id} />
      ))}
    </ul>
  );
}
