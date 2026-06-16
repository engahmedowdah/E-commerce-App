import type { ICountry } from '../../../../../../shared/types/Countries/ICountry.types';
import {
  CountryDetailsInfo,
  CountryDetailsStatus,
  CountryDetailsCities,
  CountryDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  country: ICountry;
}
const CountryDetailsContent: React.FC<Props> = ({ activeTab, country }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <CountryDetailsInfo
              name={(country as ICountry).Name}
              description={(country as ICountry).Name as string}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <CountryDetailsStatus country={country} />
          </div>
        </div>
      )}
      {activeTab === 'Cities' && (
        <CountryDetailsCities country={country} />
      )}
      {activeTab === 'Settings' && (
        <CountryDetailsSettings />
      )}
    </div>
  );
};
export default CountryDetailsContent;
