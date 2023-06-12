import { expect, test } from "vitest";
import { typeOf, isValidHttpUrl } from "../src/";

test("typeOf", () => {
  expect(typeOf(1)).toEqual("number");
  expect(typeOf("abc")).toEqual("string");
  expect(typeOf("")).toEqual("string");
  expect(typeOf([])).toEqual("array");
  expect(typeOf({})).toEqual("object");
  expect(typeOf(null)).toEqual("null");
  expect(typeOf(undefined)).toEqual("undefined");
});

test("isValidHttpUrl", () => {
  expect(isValidHttpUrl("")).toBeFalsy();
  expect(isValidHttpUrl("http:/qweasd")).toBeFalsy();
  expect(isValidHttpUrl("https://sdfasdp.ppppppppppp")).toBeFalsy();
  expect(isValidHttpUrl("magnet:?xt=urn:btih:123")).toBeFalsy();
  expect(isValidHttpUrl("http://phuongnam.space/")).toEqual(true);
  expect(isValidHttpUrl("https://stackoverflow.com/")).toEqual(true);
});
