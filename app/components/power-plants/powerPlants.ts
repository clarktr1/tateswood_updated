export type PowerPlantType = "Gas" | "Wind" | "Renewable";
export type PowerPlantStatus = "current" | "previous";

export type PowerPlant = {
  name: string;
  location: string;
  type: PowerPlantType;
  capacity: string;
  status: PowerPlantStatus;
  /** [longitude, latitude] */
  coordinates: [number, number];
};

export const powerPlants: PowerPlant[] = [
  // Current assets
  {
    name: "OLS Chino",
    location: "Chino, CA",
    type: "Gas",
    capacity: "29 MW",
    status: "current",
    coordinates: [-117.6892, 34.0122],
  },
  {
    name: "Oyster Creek",
    location: "Houston, TX",
    type: "Gas",
    capacity: "400 MW",
    status: "current",
    coordinates: [-95.3698, 29.7604],
  },
  {
    name: "Lakeswind Power",
    location: "Kansas City, MO",
    type: "Wind",
    capacity: "50 MW",
    status: "current",
    coordinates: [-94.5786, 39.0997],
  },
  {
    name: "Tres Port Power",
    location: "Port Lavaca, TX",
    type: "Gas",
    capacity: "100 MW",
    status: "current",
    coordinates: [-96.6261, 28.6153],
  },
  {
    name: "Tres City Power",
    location: "Corpus Christi, TX",
    type: "Gas",
    capacity: "100 MW",
    status: "current",
    coordinates: [-97.3964, 27.8006],
  },

  // previous assets
  {
    name: "Broad River Energy",
    location: "Gaffney, SC",
    type: "Gas",
    capacity: "850 MW",
    status: "previous",
    coordinates: [-81.6412, 35.0737],
  },
  {
    name: "Brandywine Power",
    location: "Brandywine, MD",
    type: "Gas",
    capacity: "230 MW",
    status: "previous",
    coordinates: [-76.8508, 38.6923],
  },
  {
    name: "Salem Harbor Power",
    location: "Salem, MA",
    type: "Gas",
    capacity: "674 MW",
    status: "previous",
    coordinates: [-70.8967, 42.5195],
  },
  {
    name: "Gregory Power",
    location: "Gregory, TX",
    type: "Gas",
    capacity: "400 MW",
    status: "previous",
    coordinates: [-97.2947, 27.9161],
  },
  {
    name: "Jackson Power",
    location: "Jackson, MI",
    type: "Gas",
    capacity: "540 MW",
    status: "previous",
    coordinates: [-84.4013, 42.2459],
  },
  {
    name: "Green Energy Team",
    location: "Kauaʻi, HI",
    type: "Renewable",
    capacity: "7.5 MW",
    status: "previous",
    coordinates: [-159.5261, 22.0964],
  },
  {
    name: "Rocky Road Power",
    location: "Elgin, IL",
    type: "Gas",
    capacity: "375 MW",
    status: "previous",
    coordinates: [-88.2826, 42.0354],
  },
  {
    name: "Tilton Power",
    location: "Danville, IL",
    type: "Gas",
    capacity: "188 MW",
    status: "previous",
    coordinates: [-87.63, 40.1245],
  },
  {
    name: "Florida Power Development",
    location: "Brooksville, FL",
    type: "Renewable",
    capacity: "66 MW",
    status: "previous",
    coordinates: [-82.389, 28.5544],
  },
  {
    name: "PHR Peaker Plant",
    location: "Texas City, TX",
    type: "Gas",
    capacity: "380 MW",
    status: "previous",
    coordinates: [-94.9027, 29.3838],
  },
  {
    name: "Victoria Power Plant",
    location: "Victoria, TX",
    type: "Gas",
    capacity: "290 MW",
    status: "previous",
    coordinates: [-96.9999, 28.8053],
  },
  {
    name: "Friendswood Energy",
    location: "Friendswood, TX",
    type: "Gas",
    capacity: "120 MW",
    status: "previous",
    coordinates: [-95.201, 29.5294],
  },
];
