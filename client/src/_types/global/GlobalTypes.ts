import { Dispatch, SetStateAction } from 'react';

export type SetFn<T> = Dispatch<SetStateAction<T>>;
export type Hook<T> = [T, Dispatch<SetStateAction<T>>];

declare global {
  interface Window {}
}

export type WebsiteCopy = {
  header: string;
  subheader: string;
  featureTitle1: string;
  featureDesc1: string;
  featureTitle2: string;
  featureDesc2: string;
  featureTitle3: string;
  featureDesc3: string;
  ctaSlogan: string;
};
