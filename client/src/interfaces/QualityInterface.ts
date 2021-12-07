export interface QualityCategoryProps {
  name: string;
  comments?: { QualityCode: number; Message: string; }[];
}