import type { ICountry } from "../../../../../../shared/types/Countries/ICountry.types";
import React from 'react';
import {
  CountryFormHeader,
  CountryGeneralInfo,
  CountryVisibility,
  CountrySEOPreview,
} from '../';
interface Props {
  formData: {
    Name: string;
    CurrencySymbol: string;
    Slug: string;
    IsActivated: boolean;
  };
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onGenerateSlug: () => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const CreateCountryForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onGenerateSlug,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <CountryFormHeader
        mode="create"
        title={(formData as unknown as ICountry).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <CountryVisibility
            mode="create"
            isActivated={(formData as unknown as ICountry).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <CountryGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
            onGenerateSlug={onGenerateSlug}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CountrySEOPreview
              mode="create"
              name={(formData as unknown as ICountry).Name}
              slug={(formData as unknown as ICountry).Slug}
              description={(formData as unknown as ICountry).Name}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateCountryForm;
