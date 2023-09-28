import { expect, test, describe } from "vitest";
import { toQueryString } from "../src/params2query";

describe("params2query", () => {
  test("Convert empty or invalid params", () => {
    const emptyParam = {};
    const invalidParams = [undefined, true, false, null];

    const params = [emptyParam, ...invalidParams];
    params.forEach((p) => {
      const queryString = toQueryString(p);
      expect(queryString).toBe("");
    });
  });
  test("Convert valid params", () => {
    const params = {
      id: 1,
      offset: 10,
      page: 2,
      filter: ["increase", "counted"],
      category_id: "adidas",
    };
    const queryString = toQueryString(params);

    const result =
      "id=1&offset=10&page=2&filter=increase&filter=counted&category_id=adidas";
    expect(queryString).toBe(result);
  });
});
