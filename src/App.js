import Services from "./component/Services";
import Category from "./component/Category";
import { useState } from "react";
import Total from "./component/Total";
import G1Services from "./component/G1Services";
import G2Services from "./component/G2Services";

function App() {
  const categories = [
    {
      id: 1,
      name: "Fullset & Fill In",
    },
    {
      id: 2,
      name: "Nail Enhancement",
    },
    {
      id: 3,
      name: "Natural Nails",
    },
  ];

  const services = [
    {
      id: 1,
      name: "Classic Manicure",
      price: 19,
    },
    {
      id: 2,
      name: "Deluxe Manicure",
      price: 26,
    },
    {
      id: 3,
      name: "Signature Manicure",
      price: 33,
    },
    {
      id: 4,
      name: "Classic Pedicure",
      price: 35,
    },
    {
      id: 5,
      name: "Gel Manicure",
      price: 38,
    },
    {
      id: 6,
      name: "Deluxe Pedicure",
      price: 49,
    },
    {
      id: 7,
      name: "Premimum Pedicure",
      price: 60,
    },
    {
      id: 8,
      name: "Luxury Pedicure",
      price: 75,
    },
    {
      id: 9,
      name: "Callus Pedicure",
      price: 40,
    },
    {
      id: 10,
      name: "GelPolish Hand",
      price: 26,
    },
    {
      id: 11,
      name: "GelPolish Toes",
      price: 30,
    },
    {
      id: 12,
      name: "Add Gel",
      price: 20,
    },
  ];

  const g1Services = [
    {
      id: 1,
      name: "Acrylic FS",
      price: 38,
    },
    {
      id: 2,
      name: "Gel Powder FS",
      price: 40,
    },
    {
      id: 3,
      name: "IBD Gel FS",
      price: 48,
    },
    {
      id: 4,
      name: "Pink & White FS",
      price: 65,
    },
    {
      id: 5,
      name: "Pink & White Liquid",
      price: 65,
    },
    {
      id: 6,
      name: "Color Powder",
      price: 60,
    },
    {
      id: 7,
      name: "Ombre FS",
      price: 65,
    },
    {
      id: 8,
      name: "Acrylic Fill",
      price: 28,
    },
    {
      id: 9,
      name: "Gel Powder Fill",
      price: 30,
    },
    {
      id: 10,
      name: "IBD Gel Fill",
      price: 38,
    },
    {
      id: 11,
      name: "Pink & White Fill",
      price: 55,
    },
    {
      id: 11,
      name: "Dip",
      price: 48,
    },
    {
      id: 12,
      name: "Dip with French",
      price: 55,
    },
    {
      id: 13,
      name: "Dip with TIP",
      price: 55,
    },
    {
      id: 14,
      name: "Add GEL",
      price: 12,
    },
    {
      id: 14,
      name: "Dip w/ TIP & French",
      price: 12,
    },
  ];

  const g2Services = [
    {
      id: 1,
      name: "Gel/Dip Removal",
      price: 10,
    },
    {
      id: 2,
      name: "Add French",
      price: 5,
    },
    {
      id: 3,
      name: "Nail Trim On Hands",
      price: 8,
    },
    {
      id: 4,
      name: "Nail Trim On Toes",
      price: 12,
    },
    {
      id: 5,
      name: "Polish Change Hands",
      price: 10,
    },
    {
      id: 6,
      name: "Polish Change Toes",
      price: 15,
    },
    {
      id: 7,
      name: "Paraffin Hands",
      price: 8,
    },
    {
      id: 8,
      name: "Paraffin Feet",
      price: 10,
    },
    {
      id: 9,
      name: "Acrylic Removal",
      price: 15,
    },
    {
      id: 10,
      name: "Shape",
      price: 5,
    },
    {
      id: 11,
      name: "Long Nails",
      price: 5,
    },
    {
      id: 12,
      name: "Hot Stone Massage",
      price: 15,
    },
    {
      id: 13,
      name: "Massage 10 Mins",
      price: 15,
    },
    {
      id: 14,
      name: "Chrome",
      price: 10,
    },
    {
      id: 15,
      name: "Buff Shine",
      price: 5,
    },
    {
      id: 16,
      name: "Cat Eye",
      price: 7,
    },
  ];

  const [buyservices, setBuyService] = useState([]);

  const addService = (service) => {
    console.log(service);
    //buyservices.push(service);
    setBuyService([...buyservices, service]);
    console.log(buyservices);
  };

  const clear = () => {
    setBuyService([]);
  };

  const [activeTab, setActiveTab] = useState("Natural Nails");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="cashier-container">
        <h2>Sabrina Nails & Spa</h2>
        <div className="buyservices-container">
          <table>
            <tr>
              <th>Service</th>
              <th>Price</th>
            </tr>
            {buyservices.map((service) => {
              return (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>{service.price.toFixed(2)}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <Total buyservices={buyservices} />
        <div className="buttom-button-container">
          <button onClick={() => clear()} className="checkout-btn">
            {"Clear"}
          </button>
          <button className="checkout-btn">{"Pay"}</button>
        </div>
      </div>
      <div className="services-container">
        <h2>Services</h2>
        <div>
          <Category categories={categories} onAdd={toggle} />
        </div>
        {activeTab === "Natural Nails" && (
          <Services services={services} onAdd={addService} />
        )}
        {activeTab === "Fullset & Fill In" && (
          <G1Services g1Services={g1Services} onAdd={addService} />
        )}
        {activeTab === "Nail Enhancement" && (
          <G2Services g2Services={g2Services} onAdd={addService} />
        )}
      </div>
    </div>
  );
}

export default App;
