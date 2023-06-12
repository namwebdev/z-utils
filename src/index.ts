export function typeOf<T>(value: T): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

export function isValidHttpUrl(string: string) {
  const res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}
