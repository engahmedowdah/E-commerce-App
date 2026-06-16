import SidebarCard from "../SidebarCard/SidebarCard";
function ListSidebarCards({ listSidebarCards }: { listSidebarCards: { icon: string, alt: string, name: string, path: string }[] }) {
    return (
        <nav className="flex-1 space-y-1 overflow-y-auto mb-6 pr-2 scrollbar-hide">
            {listSidebarCards.map(element => {
                return (
                    <SidebarCard key={element.name} icon={element.icon} alt={element.alt} name={element.name} path={element.path} />
                )
            })}
        </nav>
    )
}
export default ListSidebarCards;
