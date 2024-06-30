import { IconName } from '../../../@types/iconName';

export type Meta = {
  icon?: IconName;
  supportingText?: string;
};

export type Demand = {
  value: number;
  measure: '%';
};

type Image = string;

export interface ICardAuthorProps {
  fullName: string;
  rank: string;
  image: Image;
  supportingText: string;
  meta: Meta[];
}

export interface ICardCategoryProps {
  headline: string;
  image: Image;
}

export interface ICardCollectionProps {
  headline: string;
  supportingText: string;
  image: Image;
  amount?: Meta;
}

export interface ICardFeatureProps {
  headline: string;
  supportingText: string;
  demand: Demand;
  image: Image;
}

export interface ICardRecipeProps {
  headline: string;
  rating?: number;
  image: Image;
  variant?: 'row' | 'col';
}
