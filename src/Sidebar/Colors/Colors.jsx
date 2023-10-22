import './Colors.css';

const Colors = () => {
  return (
    <div>
      <h2 className="sidebar-title">Colors</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>Black
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>Blue
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>Red
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>Green
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>White
        </label>
      </div>
    </div>
  );
}

export default Colors