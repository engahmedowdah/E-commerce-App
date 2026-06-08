//Types
import React from "react";

//Components
import { CollectionDashboardOverviewCard } from "..";

//Types
import type { ICollection } from "../../../../../shared/types/Collections/ICollection.types";

//Props
interface Props {
  collections: ICollection[];
  Loading?: boolean;
}

const ListCollectionDashboardOverviewCards: React.FC<Props> = ({ collections, Loading }) => {
  const totalCollections = collections.length;  
  const activeCollections = collections.filter(c => c.IsActivated).length;
  const inactiveCollections = collections.filter(c => !c.IsActivated).length;
  
  const totalProducts = collections.reduce((acc, c) => acc + (c.Products?.length || 0), 0);
  const avgProducts = totalCollections > 0 ? (totalProducts / totalCollections).toFixed(2) : "0.00";

  const cards = [
    {
      label: "Total Collections",
      value: totalCollections,
      icon: "inventory_2",
      variant: "primary" as const,
    },
    {
      label: "Active",
      value: activeCollections,
      icon: "check_circle",
      variant: "success" as const,
    },
    {
      label: "Inactive",
      value: inactiveCollections,
      icon: "pause_circle",
      variant: "warning" as const,
    },
    {
      label: "Avg. Products",
      value: avgProducts,
      icon: "analytics",
      variant: "info" as const,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <CollectionDashboardOverviewCard
          key={index}
          label={card.label}
          value={card.value}
          icon={card.icon}
          variant={card.variant}
          loading={Loading}
        />
      ))}
    </div>
  );
};

export default ListCollectionDashboardOverviewCards;
