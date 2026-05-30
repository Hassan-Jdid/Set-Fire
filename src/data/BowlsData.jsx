import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import SetFireChickenBowl from "../Photos/bowls/SetFireChickenBowl.JPG";
import CheesyBeefPasta from "../Photos/bowls/CheesyBeefPasta.JPG";
import ChickenFettuccineAlfredo from "../Photos/bowls/ChickenFettuccineAlfredo.JPG";
import SetFireCrispyBowl from "../Photos/bowls/SetFireCrispyBowl.JPG";
import SetFireFajitaBowl from "../Photos/bowls/SetFireFajitaBowl.JPG";
import SetFireHealthyBowl from "../Photos/bowls/SetFireHealthyBowl.JPG";
import SetFireTawookBowl from "../Photos/bowls/SetFireTawookBowl.JPG";


function BowlsData({ limit }) {
  const data = [
    {
      src: SetFireChickenBowl,
      title: "Set Fire Chicken Bowl",
      price: "10.99 $",
    },
    {
      src: CheesyBeefPasta,
      title: "Cheesy Beef Pasta",
      price: "10.99 $",
    },
    {
      src: ChickenFettuccineAlfredo,
      title: "Chicken Fettuccine Alfredo",
      price: "10.99 $",
    },
    {
      src: SetFireCrispyBowl,
      title: "Set Fire Crispy Bowl",
      price: "10.99 $",
    },
    {
      src: SetFireFajitaBowl,
      title: "Set Fire Fajita Bowl",
      price: "10.99 $",
    },
    {
      src: SetFireHealthyBowl,
      title: "Set Fire Healthy Bowl",
      price: "10.99 $",
    },
    {
      src: SetFireTawookBowl,
      title: "Set Fire Tawook Bowl",
      price: "10.99 $",
    },
  ];

  const visibleItems = typeof limit === "number" ? data.slice(0, limit) : data;

  return (
    <>
      <div className="row g-4 menu-grid">
        {visibleItems.map((item, index) => (
          <div className="col-12 col-sm-6 col-lg-4   col-xl-4" key={index}>
            <Card src={item.src} title={item.title} price={item.price} />
          </div>
        ))}
      </div>
    </>
  );
}

export default BowlsData;
