function Header({ onToggleSide }) {
  return (
    <div className="header">
      <h1> Lotion</h1>
      <h3>Lotion. Like Notion, but worse.</h3>
      <button onClick={onToggleSide}>&#9776;</button>
     
    </div>
  );
}

export default Header;