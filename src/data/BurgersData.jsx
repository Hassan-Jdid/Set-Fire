import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import BeefHeisenBurger from "../Photos/burgers/BeefHeiseinBurger.JPG";
import CaramelizedOnionBurger from "../Photos/burgers/CaramelizedOnionBurger.JPG";
import ChickenBurger from "../Photos/burgers/ChickenBurger.JPG";
import ChickenHeisenBurger from "../Photos/burgers/ChickenHeiseinBurger.JPG";
import DoubleChickenBurger from "../Photos/burgers/DoubleChickenBurger.JPG";
import DoubleSmashBurger from "../Photos/burgers/DoubleSmashBurger.JPG";
import GrilledChickenBurger from "../Photos/burgers/GrilledChickenBurger.JPG";
import SetFireBurger from "../Photos/burgers/SetFireBurger.JPG";
import SmashBurger from "../Photos/burgers/SmashBurger.JPG";
import SujukBurger from "../Photos/burgers/SujukBurger.JPG";
import SweetnessBurger from "../Photos/burgers/SwetnessBurger.JPG";
import TruffleBurger from "../Photos/burgers/TruffleBurger.JPG";


function BurgersData({ limit }) {
  const data = [
    {
      src: BeefHeisenBurger,
      title: "Beef Heisen Burger",
      price: "10.99 $",
    },
    {
      src: ChickenBurger,
      title: "Chicken Burger",
      price: "10.99 $",
    },
    {
      src: ChickenHeisenBurger,
      title: "Chicken Heisen Burger",
      price: "10.99 $",
    },
    {
      src: DoubleChickenBurger,
      title: "Double Chicken Burger",
      price: "10.99 $",
    },
    {
      src: DoubleSmashBurger,
      title: "Double Smash Burger",
      price: "10.99 $",
    },
    {
      src: GrilledChickenBurger,
      title: "Grilled Chicken Burger",
      price: "10.99 $",
    },
    {
      src: SetFireBurger,
      title: "Set Fire Burger",
      price: "10.99 $",
    },
    {
      src: SmashBurger,
      title: "Smash Burger",
      price: "10.99 $",
    },
    {
      src: SujukBurger,
      title: "Sujuk Burger",
      price: "10.99 $",
    },
    {
      src: SweetnessBurger,
      title: "Sweetness Burger",
      price: "10.99 $",
    },
    {
      src: TruffleBurger,
      title: "Truffle Burger",
      price: "10.99 $",
    },
    {
      src: CaramelizedOnionBurger,
      title: "Caramelized Onion Burger",
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
export default BurgersData;
