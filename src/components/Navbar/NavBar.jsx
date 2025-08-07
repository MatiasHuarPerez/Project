import { LuMessageSquarePlus } from "react-icons/lu";
import { RxDotsVertical } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-title">WhatsApp</div>
        <div className="navbar-icons">
          <LuMessageSquarePlus />
          <RxDotsVertical />
        </div>
      </div>

      <div className="search-bar">
        <IoSearchOutline />
        <input type="text" placeholder="Buscar un chat o iniciar uno nuevo" />
      </div>

      <div className="filter-buttons">
        <button className="active">Todos</button>
        <button>No leídos</button>
        <button>Favoritos</button>
        <button>Grupos</button>
      </div>
    </div>
  );
}

export default Navbar;
