export interface PackageProps {
  title: string;
  price: string;
  sessions: string;
  features: string[];
  isRecommended?: boolean;
}
export interface RawPackageFromAPI {
  id: number;
  title: string;
  sessions: number;
  features: {
    progress_tracking?: boolean;
    nutrition_plan?: boolean;
    priority_booking?: boolean;
    full_access?: boolean;
  };
}
export interface PackageType {
  id: number;
  title: string;
  price: string;
  sessions: string;
  features: string[];
}
