import { geoAlbersUsa } from "d3-geo";

export const MAP_WIDTH = 1275;
export const MAP_HEIGHT = 828;

export const projection = geoAlbersUsa()
  .scale(1550)
  .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);
