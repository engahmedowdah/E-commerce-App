//Styles
import "./ListCollectionHeader.css";

//React Library
import { useNavigate } from "react-router-dom";

const ListCollectionHeader = () => {
  const navigate = useNavigate();

  const handleCreateCollection = () => {
    navigate("/collections/create");
  }
    return (
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-primary leading-none">
              Collections
            </h2>
            <p className="mt-2 text-on-surface-variant font-medium">
              Curate and manage your storefront product groupings.
            </p>
          </div>
          <button onClick={handleCreateCollection} className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 duration-150">
            <span className="material-symbols-outlined">add</span>
             Create Collection
          </button>
        </div>
    )
}

export default ListCollectionHeader;
