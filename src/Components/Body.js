import { DATA_ARRAY } from "../utils/constants";
import Cards from "./Cards";

/*
-body
--shops container
---shops cards
*/

const Body = () => {
    return (
      <div id="budy">
        <div id="shops">
          {DATA_ARRAY.map((obj) => (
            <Cards key={obj.id} objaa={obj}/>
          ))}
        </div>
      </div>
    );
  };

export default Body
