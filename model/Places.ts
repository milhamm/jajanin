export type Owner = {
  name: String;
  email: String;
};

export type PlaceRequest = {
  store_name: string;
  owner_id?: string;
  phone_number: string;
  address: string;
  average_cost: number;
  longitude: number;
  latitude: number;
  more_info: string;
};

export type PlaceResponse = {
  success: boolean;
  code: number;
  data: Array<{
    store_name: String;
    phone_number: String;
    address: string;
    average_cost: Number;
    longitude: Number;
    latitude: Number;
    more_info: String;
  }>;
};
