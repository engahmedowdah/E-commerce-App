import React, { useEffect, useState, useRef, useCallback } from "react";
import type { IPermission } from "../../types/Permissions/IPermission.types";
import { GetAllPermissions } from "../../../business/services/Permissions";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddPermissions: (permissions: IPermission[]) => void;
  existingPermissionIDs?: string[];
}
const PermissionSelectionModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onAddPermissions,
  existingPermissionIDs = [],
}) => {
  const [permissions, setPermissions] = useState<IPermission[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const searchRef = useRef<HTMLInputElement>(null);
  const fetchPermissions = useCallback(async () => {
    setLoading(true);
    try {
      const res = await GetAllPermissions({ limit: 200, sort: "name_asc" });
      setPermissions(res.data ?? []);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    if (isOpen) {
      setSelected(new Set());
      setSearch("");
      fetchPermissions();
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [isOpen, fetchPermissions]);
  if (!isOpen) return null;
  const filtered = search
    ? permissions.filter(
        (p) =>
          p.Name.toLowerCase().includes(search.toLowerCase()) ||
          p.Description?.toLowerCase().includes(search.toLowerCase())
      )
    : permissions;
  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const handleAdd = () => {
    const selectedPerms = permissions.filter((p) => selected.has(p._id as string));
    onAddPermissions(selectedPerms);
    onClose();
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="bg-white rounded-[24px] shadow-2xl w-full max-w-xl flex flex-col overflow-hidden"
        style={{ maxHeight: "82vh" }}
      >
        <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-[18px] font-bold text-gray-900">Assign Permissions</h2>
            <p className="text-[13px] text-gray-500 mt-0.5">
              {selected.size > 0
                ? `${selected.size} permission${selected.size > 1 ? "s" : ""} selected`
                : "Search and select permissions to assign"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] text-gray-600">close</span>
          </button>
        </div>
        <div className="px-7 py-4 border-b border-gray-50">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-gray-400">
              search
            </span>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search permissions…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#F3F4F6] rounded-[12px] pl-11 pr-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-all"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400 gap-2">
              <span className="material-symbols-outlined text-[36px]">lock</span>
              <span className="text-[14px] font-medium">No permissions found</span>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {filtered.map((perm) => {
                const id = perm._id as string;
                const isExisting = existingPermissionIDs.includes(id);
                const isSelected = selected.has(id);
                return (
                  <button
                    key={id}
                    type="button"
                    disabled={isExisting}
                    onClick={() => !isExisting && toggleSelect(id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-[14px] text-left transition-all border ${
                      isExisting
                        ? "bg-gray-50 border-transparent opacity-50 cursor-default"
                        : isSelected
                        ? "bg-indigo-50 border-indigo-200"
                        : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-100"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 ${
                      isSelected ? "bg-indigo-100" : "bg-gray-100"
                    }`}>
                      <span className={`material-symbols-outlined text-[18px] ${isSelected ? "text-indigo-600" : "text-gray-500"}`}>
                        lock
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[14px] text-gray-900 truncate">{perm.Name}</div>
                      {perm.Description && (
                        <div className="text-[12px] text-gray-500 truncate">{perm.Description}</div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      {isExisting ? (
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1 bg-gray-100 rounded-full">
                          Assigned
                        </span>
                      ) : (
                        <div className={`w-5 h-5 rounded-[5px] border-2 flex items-center justify-center transition-colors ${
                          isSelected ? "bg-indigo-600 border-indigo-600" : "border-gray-300 bg-white"
                        }`}>
                          {isSelected && (
                            <span className="material-symbols-outlined text-white text-[14px]">check</span>
                          )}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between px-7 py-4 border-t border-gray-100 bg-gray-50/50">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-700 font-semibold text-[14px] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={selected.size === 0}
            onClick={handleAdd}
            className="px-6 py-2.5 rounded-[10px] bg-gray-900 text-white font-bold text-[14px] hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">add_circle</span>
            Assign {selected.size > 0 ? `${selected.size} ` : ""}Permission{selected.size !== 1 ? "s" : ""}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PermissionSelectionModal;
