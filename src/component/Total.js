const Total = ({ buyservices }) => {
  var subtotal = 0;
  for (let service of buyservices) {
    subtotal = subtotal + service.price;
  }
  //var saleTax = subtotal * 0.0475;
  var discount = 0;
  var total = subtotal - discount;

  return (
    <div className="total-container">
      <table>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <tr className="row-table">
          <td>{"Subtotal"}</td>
          <td>{subtotal.toFixed(2)}</td>
        </tr>
        <tr className="row-table">
          <td>{"Discount"}</td>
          <td>{discount.toFixed(2)}</td>
        </tr>
        <tr className="row-table">
          <td>{"Total"}</td>
          <td>{total.toFixed(2)}</td>
        </tr>
      </table>
    </div>
  );
};

export default Total;
