import "./ListUserHeader.css";
const ListUserHeader = () => {
  return (
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight text-primary leading-none">Users Management</h2>
        <p className="mt-2 text-on-surface-variant font-medium">Manage your users and their details</p>
      </div>
    </div>
  );
};
export default ListUserHeader;
