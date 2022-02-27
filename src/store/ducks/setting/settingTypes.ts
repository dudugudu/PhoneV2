/**
 * Data types
 */

export interface contactTypes {
  number?: string;
  name?: string;
  last_name?: string;
  favorito?: number;
}
export interface settingPhoneTypes {
  theme: string;
  number: string;
}

/**
 * State types
 */
export interface settingTypes {
  setting: settingPhoneTypes;
  contacts: contactTypes[];
}
