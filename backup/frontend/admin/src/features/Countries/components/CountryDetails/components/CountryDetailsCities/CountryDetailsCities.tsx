import React, { useEffect, useState } from "react";
import type { ICountry } from "../../../../../../shared/types/Countries/ICountry.types";
import type { ICity } from "../../../../../../shared/types/Cities/ICity.types";
import { useToast, ConfirmModal } from "../../../../../../shared/components";
import {
  GetAllCities,
  CreateCity,
  UpdateCity,
  DeleteCity,
  ActiveCityByID,
} from "../../../../../../business/services/Cities";
interface Props {
  country: ICountry;
}
const CountryDetailsCities: React.FC<Props> = ({ country }) => {
  const { success, error } = useToast();
  const [cities, setCities] = useState<ICity[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newCityName, setNewCityName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [editCity, setEditCity] = useState<ICity | null>(null);
  const [editCityName, setEditCityName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [deleteCityId, setDeleteCityId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const fetchCities = async () => {
    try {
      setLoading(true);
      const cities = await GetAllCities({ CountryID: country._id! });
      setCities(cities?.data);
    } catch (err: unknown) {
      error("Failed to load cities", (err as Error).message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (country._id) {
      fetchCities();
    }
  }, [country._id]);
  const handleToggleActive = async (city: ICity) => {
    if (!city._id) return;
    setTogglingId(city._id);
    try {
      await ActiveCityByID({ CityID: city._id });
      success(
        `${city.Name} Status Updated`,
        `Successfully ${city.IsActivated ? "deactivated" : "activated"} the city.`
      );
      setCities((prev) =>
        prev.map((c) => (c._id === city._id ? { ...c, IsActivated: !c.IsActivated } : c))
      );
    } catch (err: unknown) {
      error("Failed to update status", (err as Error).message || "Something went wrong.");
    } finally {
      setTogglingId(null);
    }
  };
  const handleCreateCity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCityName.trim()) return;
    setIsAdding(true);
    try {
      await CreateCity({
        city: {
          Name: newCityName.trim(),
          CountryID: country._id as string,
          IsActivated: true,
        },
      });
      success("City Created", `Successfully added "${newCityName.trim()}" to ${country.Name}.`);
      setNewCityName("");
      setIsAddOpen(false);
      fetchCities();
    } catch (err: unknown) {
      error("Failed to create city", (err as Error).message || "Something went wrong.");
    } finally {
      setIsAdding(false);
    }
  };
  const handleUpdateCity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editCity || !editCityName.trim()) return;
    setIsEditing(true);
    try {
      await UpdateCity({
        CityID: editCity._id as string,
        city: {
          Name: editCityName.trim(),
          CountryID: country._id as string,
          IsActivated: editCity.IsActivated || false,
        },
      });
      success("City Updated", `Successfully updated city to "${editCityName.trim()}".`);
      setEditCity(null);
      setEditCityName("");
      fetchCities();
    } catch (err: unknown) {
      error("Failed to update city", (err as Error).message || "Something went wrong.");
    } finally {
      setIsEditing(false);
    }
  };
  const handleDeleteCity = async () => {
    if (!deleteCityId) return;
    setIsDeleting(true);
    try {
      await DeleteCity({ CityID: deleteCityId });
      success("City Deleted", "Successfully removed the city.");
      setDeleteCityId(null);
      fetchCities();
    } catch (err: unknown) {
      error("Failed to delete city", (err as Error).message || "Something went wrong.");
    } finally {
      setIsDeleting(false);
    }
  };
  const filteredCities = cities.filter((city) => {
    const matchesSearch = city.Name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && city.IsActivated) ||
      (statusFilter === "inactive" && !city.IsActivated);
    return matchesSearch && matchesStatus;
  });
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/30 shadow-sm glass-panel flex flex-col w-full hover:shadow-md transition-shadow mb-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-b border-outline-variant/30 pb-6 mb-8 gap-4">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-on-surface flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]">location_city</span>
            </span>
            Cities in {country.Name}
          </h3>
          <p className="text-on-surface-variant text-sm mt-1">
            Manage regional destinations and shipping coverage hubs within this country.
          </p>
        </div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add City
        </button>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center gap-4 mb-8">
        <div className="relative w-full sm:flex-1">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant/70">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </span>
          <input
            type="text"
            placeholder="Search cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low text-on-surface border border-outline-variant/20 rounded-xl outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/50 font-medium text-sm"
          />
        </div>
        <div className="flex bg-surface-container-low border border-outline-variant/20 rounded-xl p-1 w-full sm:w-auto self-stretch sm:self-auto">
          {(["all", "active", "inactive"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                statusFilter === filter
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
          <span className="text-sm font-semibold text-on-surface-variant">Loading cities...</span>
        </div>
      ) : filteredCities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-outline-variant/50 rounded-2xl bg-surface-container-low/30">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <span className="material-symbols-outlined text-3xl">location_city</span>
          </div>
          <h4 className="text-lg font-bold text-on-surface mb-1">No Cities Found</h4>
          <p className="text-sm text-on-surface-variant max-w-sm px-4">
            {searchQuery
              ? "We couldn't find any cities matching your search query. Try typing something else."
              : "No cities have been configured for this country yet. Click the 'Add City' button to create one."}
          </p>
        </div>
      ) : (
        <div className="w-full overflow-hidden border border-outline-variant/30 rounded-2xl bg-surface-container-low/40">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/30 text-on-surface-variant text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">City Name</th>
                <th className="py-4 px-6 text-center">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {filteredCities.map((city) => (
                <tr
                  key={city._id}
                  className="hover:bg-surface-container-low/50 transition-colors text-sm text-on-surface"
                >
                  <td className="py-4 px-6 font-semibold">{city.Name}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => handleToggleActive(city)}
                        disabled={togglingId === city._id}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          city.IsActivated
                            ? "bg-green-500/10 text-green-600 hover:bg-green-500/20"
                            : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high"
                        } disabled:opacity-50`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            city.IsActivated ? "bg-green-500" : "bg-on-surface-variant/60"
                          }`}
                        />
                        {city.IsActivated ? "Active" : "Inactive"}
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => {
                          setEditCity(city);
                          setEditCityName(city.Name);
                        }}
                        className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-container-high hover:text-primary transition-colors"
                        title="Edit City"
                      >
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button
                        onClick={() => setDeleteCityId(city._id || null)}
                        className="w-9 h-9 rounded-xl bg-error/10 flex items-center justify-center text-error hover:bg-error hover:text-white transition-colors"
                        title="Delete City"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
          <form
            onSubmit={handleCreateCity}
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl max-w-md w-full shadow-2xl p-6 md:p-8 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">location_city</span>
                Add New City
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddOpen(false);
                  setNewCityName("");
                }}
                className="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">
                City Name
              </label>
              <input
                type="text"
                placeholder="Enter city name..."
                value={newCityName}
                onChange={(e) => setNewCityName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-surface-container-low text-on-surface border border-outline-variant/20 rounded-xl outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/40 font-semibold"
              />
            </div>
            <div className="flex items-center gap-4 justify-end mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsAddOpen(false);
                  setNewCityName("");
                }}
                className="px-5 py-2.5 bg-surface-container-highest text-on-surface rounded-xl font-semibold hover:bg-surface-container-high transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isAdding}
                className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-sm disabled:opacity-50 text-sm flex items-center gap-2"
              >
                {isAdding ? "Adding..." : "Add City"}
              </button>
            </div>
          </form>
        </div>
      )}
      {editCity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
          <form
            onSubmit={handleUpdateCity}
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl max-w-md w-full shadow-2xl p-6 md:p-8 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">edit</span>
                Edit City Name
              </h3>
              <button
                type="button"
                onClick={() => {
                  setEditCity(null);
                  setEditCityName("");
                }}
                className="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">
                City Name
              </label>
              <input
                type="text"
                placeholder="Enter city name..."
                value={editCityName}
                onChange={(e) => setEditCityName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-surface-container-low text-on-surface border border-outline-variant/20 rounded-xl outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/40 font-semibold"
              />
            </div>
            <div className="flex items-center gap-4 justify-end mt-4">
              <button
                type="button"
                onClick={() => {
                  setEditCity(null);
                  setEditCityName("");
                }}
                className="px-5 py-2.5 bg-surface-container-highest text-on-surface rounded-xl font-semibold hover:bg-surface-container-high transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isEditing}
                className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-sm disabled:opacity-50 text-sm"
              >
                {isEditing ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}
      <ConfirmModal
        isOpen={deleteCityId !== null}
        onClose={() => setDeleteCityId(null)}
        onConfirm={handleDeleteCity}
        title="Delete City"
        message="Are you sure you want to delete this city? This will permanently remove it from shipping regions and cannot be undone."
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default CountryDetailsCities;
