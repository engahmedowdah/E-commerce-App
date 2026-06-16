import "./CollectionDetailsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import { GetCollectionByID } from "../../../../business/services";
import CollectionDetails from "../../components/CollectionDetails/CollectionDetails";
const CollectionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [collection, setCollection] = useState<ICollection | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetCollectionByID({ CollectionID: id })
      .then((res: ICollection) => {
        setCollection(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <CollectionDetails collection={collection} Loading={Loading} />
    </div>
  );
};
export default CollectionDetailsPage;
