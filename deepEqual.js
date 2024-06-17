function compare(a, b) {
  if (typeof a === typeof b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      return compareArray(a, b);
    }

    if (typeof a === "object" && typeof b === "object") {
      return compareObject(a, b);
    }

    return a === b;
  }

  return false;
}

function compareArray(a = [], b = []) {
  if (a.length !== b.length) {
    return false;
  }

  return a.every((aItem) => b.some((bItem) => compare(aItem, bItem)));
}



function compareObject(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (let key in a) {
    if (key === "myIgnoredKey") {
      continue;
    }
    if (!(key in b) || !compare(a[key], b[key])) return false;
  }
  return true;
}

let responseA = {
  asap: [
    {
      banana: [
        {
          apple: [],
          january: "twelve",
        },
        {
          apple: [
            {
              march: "FRIDAY",
              february: [
                {
                  january: "ten",
                  april: "five",
                },
              ],
            },
            {
              march: "MONDAY",
              february: [
                {
                  january: "ten",
                  april: "five",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let responseB = {
  asap: [
    {
      banana: [
        {
          apple: [],
          january: "twelve",
        },
        {
          apple: [
            {
              march: "MONDAY",
              february: [
                {
                  january: "ten",
                  april: "five",
                },
              ],
            },
            {
              march: "FRIDAY",
              february: [
                {
                  january: "ten",
                  april: "five",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

console.time("time");
console.log(compare(responseA, responseB));
console.timeEnd("time");
