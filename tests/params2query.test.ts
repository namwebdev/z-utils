import { expect, test } from "vitest";
import { toQueryString } from "../src/params2query";

test("params2query", () => {
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
