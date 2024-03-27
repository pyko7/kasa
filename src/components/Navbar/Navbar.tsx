const Navbar = () => {
  const navListItem = [
    {
      id: 1,
      name: "Accueil",
      url: "#",
    },
    {
      id: 2,
      name: "À propos",
      url: "#",
    },
  ];
  return (
    <nav>
      <ul>
        {navListItem.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
