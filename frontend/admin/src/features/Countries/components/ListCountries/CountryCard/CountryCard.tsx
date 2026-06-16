import "./CountryCard.css";
import { useState, useRef, useEffect } from "react";
import type { ICountry } from "../../../../../shared/types/Countries/ICountry.types";
import { ConfirmModal, useToast } from "../../../../../shared/components";
import { DeleteCountry } from "../../../../../business/services";
import { useNavigate } from "react-router-dom";
interface Props {
  country: ICountry;
  onRefresh?: () => void;
}
const CountryCard = ({ country, onRefresh }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(false);
    navigate(`/countries/edit/${country._id}`);
  };
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(false);
    setIsDeleteModalOpen(true);
  };
  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteCountry({ CountryID: country._id as string });
      success("Country Deleted", "The country has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      if (onRefresh) {
        onRefresh();
      }
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete country");
    } finally {
      setIsDeleting(false);
    }
  };
  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/countries/${country._id}`);
  };
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div className="card h-100 shadow-sm border-0 bg-white" onClick={handleView} style={{ cursor: "pointer" }}>
        <div className="card-body d-flex align-items-center">
          <div
            className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3"
            style={{ width: "48px", height: "48px", minWidth: "48px" }}
          >
            <span className="text-success fw-bold text-uppercase">{(country as ICountry).Name?.substring(0, 1) || "C"}</span>
          </div>
          <div className="ms-3 flex-grow-1">
            <h6 className="mb-1 text-truncate">{(country as ICountry).Name}</h6>
            <p className="mb-1 text-truncate">{(country as ICountry).CurrencySymbol}</p>
          </div>
          <div className="dropdown ms-2" ref={dropdownRef}>
            <button className="btn btn-link text-muted p-0" type="button" onClick={toggleDropdown}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
              </svg>
            </button>
            <ul className={`dropdown-menu dropdown-menu-end ${showDropdown ? "show" : ""}`}>
              <li><button className="dropdown-item" onClick={handleEdit}>Edit</button></li>
              <li><button className="dropdown-item text-danger" onClick={handleDeleteClick}>Delete</button></li>
            </ul>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Country"
        message={`Are you sure you want to delete the country "${(country as ICountry).Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </>
  );
};
export default CountryCard;
