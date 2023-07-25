import './MenuPrincial.css';

function MenuPrincial() {
  return (
    <div className="menuPrinicpal">
      <ul className="menuSup">
        <li><a href="/index.html" className="menuSup__itemPag--link" >Home</a></li>
        <li><a href="/blog.html" className="menuSup__itemPag--link">Blog</a></li>
        <li><a href="/sobre.html" className="menuSup__itemPag--link">Sobre</a></li>
      </ul>
    </div>
  );
}

export default MenuPrincial;
