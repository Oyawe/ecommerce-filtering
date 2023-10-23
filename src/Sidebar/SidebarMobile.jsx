import "./SidebarMobile.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const SidebarMobile = () => {
  return (
    <section className="sidebar-mobile">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <Category />
      <Price />
      <Colors />
    </section>
  );
};

export default SidebarMobile;
