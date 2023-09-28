export type QueryParamsType = Record<string | number, any> | null;

function encodeQueryParam(key: string, value: any) {
  const encodedKey = encodeURIComponent(key);
  return `${encodedKey}=${encodeURIComponent(
    typeof value === "number" ? value : `${value}`
  )}`;
}

function addQueryParam(query: QueryParamsType, key: string) {
  return encodeQueryParam(key, query?.[key]);
}

function addArrayQueryParam(query: QueryParamsType, key: string) {
  const value = query?.[key];
  return value.map((v: any) => encodeQueryParam(key, v)).join("&");
}

export function toQueryString(query: QueryParamsType = {}): string {
  if (query === null) return "";

  const getQueryItem = (key: string) => {
    if (Array.isArray(query[key])) return addArrayQueryParam(query, key);
    return addQueryParam(query, key);
  };

  const keys = Object.keys(query).filter(
    (key) => "undefined" !== typeof query[key]
  );
  return keys.map((key) => getQueryItem(key)).join("&");
}
