import { useRouter } from "next/dist/client/router";
import classes from "./ListElement.module.css";
import Card from "./UI/Card";

export default function ListElement(props) {
  const router = useRouter();

  function showDetailHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content} onClick={showDetailHandler}>
          <h3>{props.name}</h3>
        </div>
      </Card>
    </li>
  );
}
