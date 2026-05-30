import BurgersData from "../data/BurgersData";
import { useNavigate } from "react-router-dom";
import SetFireImage from "../Photos/SetFire.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Burger({ embedded = false, limit }) {
  const navigate = useNavigate();

  if (embedded) {
    return <BurgersData limit={limit} />;
  }
  return (
    <div className="page-shell menu-page">
      
     <div className="container page-content">
                <div className="menu-sticker-wrap">
                  <img src={SetFireImage} alt="Set Fire" className="menu-sticker" />
                </div>
     
       <section className="menu-section-heading d-flex justify-content-between align-items-center my-4">
        <h4 className="mb-(-1)">Burgers</h4>
      <button type="button" className="btn-more" onClick={()=>navigate("/Menu")}>Back to Menu</button>
      </section>

       
      <BurgersData />
      </div>
      </div>
      
    
    
    
  );
}
export default Burger;

