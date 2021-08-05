export interface IDetailsLanguage {
  code: string;
  name: string;
  native: string;
}

export interface IDetailsLocation {
  geoname_id: number;
  capital: string;
  languages: IDetailsLanguage[];
  country_flag: string;
  country_flag_emoji: string;
  country_flag_emoji_unicode: string;
  calling_code: string;
  is_eu: boolean;
}

export interface IDetails {
  ip: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  location: IDetailsLocation;
}
