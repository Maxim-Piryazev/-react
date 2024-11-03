import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./CoctailDay.module.css";

function CoctailDay() {
  const [data, setData] = useState([]);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const fetchCoctail = useCallback(() => {
    axios.get(url).then((resp) => {
      setData(resp.data.drinks);
    });
  }, []);
  useEffect(() => {
    fetchCoctail();
  }, [fetchCoctail]);

  return (
    <>
      <h1 className={classes.capital}>Cocktail of the day</h1>

      {data.map((coctail) => (
        <Card
          className={classes.container}
          key={coctail.idDrink}
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" src={coctail.strDrinkThumb} />
          <Card.Body>
            <Card.Title className={classes.coctailName}>
              {coctail.strDrink}
            </Card.Title>
            <ul>
              <li>
                <span className={classes.list}>{coctail.strIngredient1}</span>
              </li>
              <li>
                <span className={classes.list}>{coctail.strIngredient2}</span>
              </li>
              <li>
                <span className={classes.list}>{coctail.strIngredient3}</span>
              </li>
            </ul>
            <h5 className={classes.cook}>Способ приготовления:</h5>
            <p className={classes.cook}>«Взболтать, но не смешивать»</p>
            <Button
              className={classes.btn}
              onClick={fetchCoctail}
              variant="danger"
            >
              Рандомный коктейль
            </Button>
          </Card.Body>
        </Card>
      ))}
      <h3 className={classes.cook}>
        чрезмерное употребление алкоголя вредит вашему здоровью
      </h3>
    </>
  );
}
export default CoctailDay;
