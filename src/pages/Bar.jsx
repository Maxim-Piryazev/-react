import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Grid2 } from "@mui/material";
import classes from "./Bar.module.css";
function Bar() {
  const [data, setData] = useState([]);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
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
      <h1 className={classes.title}>Bar</h1>

      <Grid2
        padding={1}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
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
                Заказать
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Grid2>
      <h3 className={classes.cook}>
        чрезмерное употребление алкоголя вредит вашему здоровью
      </h3>
    </>
  );
}
export default Bar;
