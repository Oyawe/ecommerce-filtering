/* eslint-disable react/prop-types */
import Input from "../../components/Input";
import "./Category.css";

const Category = ({handlechange}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handlechange} type="radio" value="" name="test" /> <span className="checkmark"></span>All
        </label>

        <Input handlechange={handlechange} value="sneakers" title="Sneakers" name="test"/>
        <Input handlechange={handlechange} value="flats" title="Flats" name="test"/>
        <Input handlechange={handlechange} value="sandals" title="Sandals" name="test"/>
        <Input handlechange={handlechange} value="heels" title="Heels" name="test"/>
      </div>
    </div>
  );
};

export default Category;
