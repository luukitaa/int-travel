import { describe, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  describe("Accommodation name", () => {
    test("should set name correctly", () => {
      const accommodation = new Accommodation("Hotel", 100);
      expect(accommodation.getName()).toBe("Hotel");
    });

    test("should throw error if name is empty", () => {
      expect(() => new Accommodation("", 100)).toThrow();
      expect(() => new Accommodation("   ", 100)).toThrow();
    });

    test("should throw error if name is missing", () => {
      expect(() =>
        new Accommodation(undefined as unknown as string, 100),
      ).toThrow();
    });

    test("should update name correctly", () => {
      const accommodation = new Accommodation("Hotel", 100);

      accommodation.setName("Hostel");

      expect(accommodation.getName()).toBe("Hostel");
    });
  });

  describe("Accommodation cost", () => {
    test("should set cost correctly", () => {
      const accommodation = new Accommodation("Hotel", 100);
      expect(accommodation.getCost()).toBe(100);
    });

    test("should allow zero cost", () => {
      const accommodation = new Accommodation("Hotel", 0);
      expect(accommodation.getCost()).toBe(0);
    });

    test("should throw error if cost is negative", () => {
      expect(() => new Accommodation("Hotel", -10)).toThrow();
    });

    test("should throw error if cost is not a number", () => {
      expect(() => new Accommodation("Hotel", NaN)).toThrow();
      expect(() =>
        new Accommodation("Hotel", "100" as unknown as number),
      ).toThrow();
      expect(() =>
        new Accommodation("Hotel", undefined as unknown as number),
      ).toThrow();
    });

    test("should update cost correctly", () => {
      const accommodation = new Accommodation("Hotel", 100);

      accommodation.setCost(50);

      expect(accommodation.getCost()).toBe(50);
    });
  });
});