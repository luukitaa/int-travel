
import { describe, beforeEach, test, expect } from "vitest";
import TripManager from "../tripManager.ts";
import City from "../city.ts";

describe("TripManager", () => {
  let manager: TripManager;

  beforeEach(() => {
    manager = new TripManager();
  });

  test("get cities", () => {
    expect(manager.getAllCities()).toEqual([]);
  });

  test("add city", () => {
    const city = new City(
      "Montevideo",
      "Uruguay",
      new Date("2026-11-20"),
      new Date("2026-11-25"),
    );

    expect(manager.addCity(city)).toBe(city);
    expect(manager.getAllCities()).toEqual([city]);
  });

  test("find city by name", () => {
    const city = new City(
      "Montevideo",
      "Uruguay",
      new Date("2026-11-20"),
      new Date("2026-11-25"),
    );

    manager.addCity(city);

    expect(manager.findCityByName("Montevideo")).toBe(city);
  });

  test("find city by name returns null if not found", () => {
    expect(manager.findCityByName("NonExistentCity")).toBeNull();
  });

  test("get cities returns a copy", () => {
    const cities = manager.getAllCities();
    cities.push(
      new City(
        "Montevideo",
        "Uruguay",
        new Date("2026-11-20"),
        new Date("2026-11-25"),
      ),
    );

    expect(manager.getAllCities()).toEqual([]);
  });
});
