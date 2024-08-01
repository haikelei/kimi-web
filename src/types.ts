export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

type Airline = {
  id: number;
  iataCode: string;
  icaoCode: string;
  callsign: string;
  name: string;
  nameCn: string;
  country: string;
  countryCn: string;
};

type Airport = {
  id: number;
  airportName: string;
  airportNameCn: string;
  city: string;
  cityCn: string;
  country: string;
  countryCn: string;
  iataFaaCode: string;
  icaoCode: string;
  latitude: number;
  longitude: number;
  altitude: number;
  timezoneOffset: number;
  dstInfo: string;
  tzDatabaseTimezone: string;
  type: string;
};

export type Flight = {
  id: string;
  availableDate: string;
  flightNumber: string | null;
  airline: Airline;
  departureAirport: Airport;
  arrivalAirport: Airport;
  departureTime: string;
  arrivalTime: string;
  duration: string | null;
  layoverCount: number | null;
  price: number;
  availableSeats: number | null;
  mileageRewards: number | null;
  active: boolean | null;
  remarks: string;
  flightSegments: FlightSegment[] | null;
  updatedTime: string | null;
};

export type FlightSegment = {
  flightNumber: string | null;
  airline: Airline;
  departureAirport: Airport;
  arrivalAirport: Airport;
  departureTime: string;
  arrivalTime: string;
  duration: string | null;
  price: number;
  availableSeats: number | null;
  mileageRewards: number | null;
  active: boolean | null;
  remarks: string;
  updatedTime: string | null;
};

export type AirCardProps = {
  data: Flight;
  onClickBuy: () => void;
};

export interface ApiUser {
  /**
   * 用户id
   */
  id: number;

  /**
   * 账号
   */
  account: string;

  /**
   * 用户名
   */
  name: string;

  /**
   * 密码
   */
  password: string;

  /**
   * 用户手机号
   */
  phone: string;

  /**
   * 用户邮箱
   */
  email: string;

  /**
   * 头像地址
   */
  avatar: string;

  /**
   * 状态, 0:正常, 1:已注销，2:被锁定
   */
  status: number;
}
