const ListGroup = ({ items, onGenreSelect, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={items.indexOf(item)}
          onClick={() => onGenreSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
    // <p>HI</p>
  );
};

export default ListGroup;
