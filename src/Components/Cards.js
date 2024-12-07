const Cards = (props) => {
    ({ price, img, delivery, rating, name } = props.objaa)
    return (
      <div id="card">
        <img id="fruit_img" src={img} />
        <div id="fruit_detail">
        <div>{name}</div>
        <div>price = {price} rupees/kg</div>
        <div>delivery time {delivery} min</div>
        <div>rating {rating}🌟</div>
        </div>
      </div>
    );
  };

export default Cards