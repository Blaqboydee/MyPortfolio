import { describe, it, expect } from "vitest";
import { HarvestManager } from "./solution";

describe("advanced plan and record interactions", () => {
it("constructor rejects bad iso strings", () => {
expect(() => new HarvestManager("20251001")).toThrow("InvalidDate: date must be a valid ISO date string");
expect(() => new HarvestManager("2025-02-30")).toThrow("InvalidDate: date must be a valid ISO date string");
});
it("plan validation order enforces invalid date first", () => {
const hm = new HarvestManager("2025-10-01");
expect(() => hm.planHarvest("f1", "p1", "20251002", "2025-10-05", 10)).toThrow("InvalidDate: date must be a valid ISO date string");
expect(() => hm.planHarvest("f1", "p1", "2025-10-06", "2025-10-05", 10)).toThrow("InvalidDateRange: start date must be on or before end date");
expect(() => hm.planHarvest("f1", "p1", "2025-09-30", "2025-10-02", 10)).toThrow("InvalidStartDate: start date must be on or after current date");
});
it("rejects negative and infinite expected yield", () => {
const hm = new HarvestManager("2025-10-01");
expect(() => hm.planHarvest("f2", "p1", "2025-10-02", "2025-10-03", -1)).toThrow("InvalidValue: expectedYieldKg must be a non negative finite number");
expect(() => hm.planHarvest("f2", "p2", "2025-10-02", "2025-10-03", Infinity)).toThrow("InvalidValue: expectedYieldKg must be a non negative finite number");
expect(() => hm.planHarvest("f2", "p3", "2025-10-02", "2025-10-03", NaN)).toThrow("InvalidValue: expectedYieldKg must be a non negative finite number");
});
it("duplicate plan id per field and overlapping detection", () => {
const hm = new HarvestManager("2025-10-01");
hm.planHarvest("f3", "pA", "2025-10-02", "2025-10-05", 100);
expect(() => hm.planHarvest("f3", "pA", "2025-10-06", "2025-10-07", 50)).toThrow("DuplicatePlanId: plan id already used for field");
expect(() => hm.planHarvest("f3", "pB", "2025-10-05", "2025-10-10", 50)).toThrow("OverlappingPlan: plan overlaps existing plan for field");
hm.planHarvest("f3", "pC", "2025-10-06", "2025-10-10", 50);
});
it("records require a covering plan and date validation precedence", () => {
const hm = new HarvestManager("2025-10-01");
expect(() => hm.recordYield("fX", "20251005", 1, 10, 10, 10)).toThrow("InvalidDate: date must be a valid ISO date string");
hm.planHarvest("f4", "p1", "2025-10-02", "2025-10-04", 100);
expect(() => hm.recordYield("f4", "2025-10-05", 1, 10, 10, 10)).toThrow("PlanNotFound: no active plan for field covering date");
});
it("coordinate and numeric validations", () => {
const hm = new HarvestManager("2025-10-01");
hm.planHarvest("f5", "p1", "2025-10-02", "2025-10-10", 100);
expect(() => hm.recordYield("f5", "2025-10-03", 0, 10, 10, 10)).toThrow("InvalidValue: area and yield must be positive numbers");
expect(() => hm.recordYield("f5", "2025-10-03", 1, 0, 10, 10)).toThrow("InvalidValue: area and yield must be positive numbers");
expect(() => hm.recordYield("f5", "2025-10-03", 1, 10, -1, 10)).toThrow("InvalidCoordinate: x and y must be finite numbers between 0 and 1000000");
expect(() => hm.recordYield("f5", "2025-10-03", 1, 10, 10, 1000001)).toThrow("InvalidCoordinate: x and y must be finite numbers between 0 and 1000000");
expect(() => hm.recordYield("f5", "2025-10-03", 1, NaN, 10, 10)).toThrow("InvalidValue: area and yield must be positive numbers");
});
it("duplicate record detection same key and different values", () => {
const hm = new HarvestManager("2025-10-01");
hm.planHarvest("f6", "p1", "2025-10-02", "2025-10-10", 100);
hm.recordYield("f6", "2025-10-03", 1, 100, 100, 100);
expect(() => hm.recordYield("f6", "2025-10-03", 2, 200, 100, 100)).toThrow("DuplicateRecord: identical record already exists");
expect(() => hm.recordYield("f6", "2025-10-03", 1, 100, 100.0, 100.000)).toThrow("DuplicateRecord: identical record already exists");
});
});

describe("additional generateYieldMap tests", () => {
  it("throws InvalidGridSize for 0, -1, and non integer", () => {
    const hm = new HarvestManager("2025-10-01");
    expect(() => hm.generateYieldMap(0)).toThrow("InvalidGridSize: gridSize must be integer greater than 0");
    expect(() => hm.generateYieldMap(-1)).toThrow("InvalidGridSize: gridSize must be integer greater than 0");
    expect(() => hm.generateYieldMap(10.5 as unknown as number)).toThrow("InvalidGridSize: gridSize must be integer greater than 0");
  });

  it("rounds repeating decimal yield to six decimal places", () => {
    const hm = new HarvestManager("2025-10-01");
    hm.planHarvest("fr", "p1", "2025-10-02", "2025-10-02", 100);
    hm.recordYield("fr", "2025-10-02", 3, 1, 10, 10);
    const map = hm.generateYieldMap(100);
    expect(map.cells.length).toBe(1);
    expect(map.cells[0].totalWeightKg).toBe(1);
    expect(map.cells[0].totalAreaHa).toBeCloseTo(3);
    expect(map.cells[0].yieldKgPerHa).toBe(0.333333);
  });

  it("returns cells sorted by x index then y index even when records added out of order", () => {
    const hm = new HarvestManager("2025-10-01");
    hm.planHarvest("fs", "p1", "2025-10-02", "2025-10-03", 100);
    hm.recordYield("fs", "2025-10-02", 1, 10, 150, 10);
    hm.recordYield("fs", "2025-10-03", 1, 20, 10, 150);
    const map = hm.generateYieldMap(100);
    expect(map.cells.length).toBe(2);
    expect(map.cells[0].xIndex).toBe(0);
    expect(map.cells[0].yIndex).toBe(1);
    expect(map.cells[1].xIndex).toBe(1);
    expect(map.cells[1].yIndex).toBe(0);
  });

  it("returns empty cells array when no records exist", () => {
    const hm = new HarvestManager("2025-10-01");
    const map = hm.generateYieldMap(50);
    expect(map.cells.length).toBe(0);
  });
});

describe("aggregation, rounding, large scale, and caching semantics", () => {
it("aggregates multiple records into same cell and rounds to six decimals", () => {
const hm = new HarvestManager("2025-10-01");
hm.planHarvest("f7", "p1", "2025-10-02", "2025-10-10", 1000);
hm.recordYield("f7", "2025-10-03", 1, 100, 10, 10);
hm.recordYield("f7", "2025-10-04", 2, 200, 130, 10);
hm.recordYield("f7", "2025-10-05", 0.5, 50, 50, 50);
const map = hm.generateYieldMap(100);
expect(map.gridSizeMeters).toBe(100);
expect(map.cells.length).toBe(2);
expect(map.cells[0].xIndex).toBe(0);
expect(map.cells[0].yIndex).toBe(0);
expect(map.cells[0].totalWeightKg).toBe(150);
expect(map.cells[0].totalAreaHa).toBeCloseTo(1.5);
expect(map.cells[0].yieldKgPerHa).toBe(100);
expect(map.cells[1].xIndex).toBe(1);
expect(map.cells[1].yIndex).toBe(0);
expect(map.cells[1].totalWeightKg).toBe(200);
expect(map.cells[1].totalAreaHa).toBeCloseTo(2);
expect(map.cells[1].yieldKgPerHa).toBe(100);
});
it("caches returned objects by grid size and returns same reference until mutation", () => {
const hm = new HarvestManager("2025-10-01");
hm.planHarvest("f8", "p1", "2025-10-02", "2025-10-03", 100);
hm.recordYield("f8", "2025-10-02", 1, 10, 5, 5);
const a = hm.generateYieldMap(50);
const b = hm.generateYieldMap(50);
expect(a).toBe(b);
hm.recordYield("f8", "2025-10-03", 1, 20, 5, 5);
const c = hm.generateYieldMap(50);
expect(c).not.toBe(a);
const d = hm.generateYieldMap(50);
expect(c).toBe(d);
hm.planHarvest("f8", "p2", "2025-10-04", "2025-10-05", 10);
const e = hm.generateYieldMap(50);
expect(e).not.toBe(c);
});
it("multiple grid sizes are cached independently and do not leak metadata", () => {
const hm = new HarvestManager("2025-10-01");
hm.planHarvest("f9", "p1", "2025-10-02", "2025-10-05", 100);
hm.recordYield("f9", "2025-10-03", 1, 100, 10, 10);
const g100 = hm.generateYieldMap(100);
const g200 = hm.generateYieldMap(200);
expect(g100).not.toBe(g200);
const g100b = hm.generateYieldMap(100);
expect(g100).toBe(g100b);
const keys = Object.keys(g100);
expect(keys.includes("modAt")).toBe(false);
});
it("handles extreme numbers and large inputs deterministically", () => {
const hm = new HarvestManager("2025-10-01");
hm.planHarvest("f10", "p1", "2025-10-02", "2025-11-01", 1e12);
for (let i = 0; i < 1000; i = i + 1) {
const x = i * 1000;
const y = i * 1000;
hm.recordYield("f10", "2025-10-10", 0.001, 0.5, x % 1000000, y % 1000000);
}
const m = hm.generateYieldMap(5000);
expect(m.cells.length).toBeGreaterThan(0);
});
});

describe("ordering, stability, and boundary conditions", () => {
it("single day plan and boundaries are inclusive", () => {
const hm = new HarvestManager("2025-10-01");
hm.planHarvest("fb", "p1", "2025-10-05", "2025-10-05", 10);
hm.recordYield("fb", "2025-10-05", 1, 10, 0, 0);
hm.planHarvest("fb2", "p2", "2025-10-06", "2025-10-06", 10);
hm.recordYield("fb2", "2025-10-06", 2, 20, 1000000, 1000000);
const m = hm.generateYieldMap(1000000);
expect(m.cells.length).toBe(2);
const c0 = m.cells.find((c) => c.xIndex === 0 && c.yIndex === 0);
const c1 = m.cells.find((c) => c.xIndex === 1 && c.yIndex === 1);
expect(c0).toBeDefined();
expect(c1).toBeDefined();
if (c0) {
expect(c0.totalWeightKg).toBe(10);
expect(c0.totalAreaHa).toBe(1);
expect(c0.yieldKgPerHa).toBe(10);
}
if (c1) {
expect(c1.totalWeightKg).toBe(20);
expect(c1.totalAreaHa).toBe(2);
expect(c1.yieldKgPerHa).toBe(10);
}
});
});