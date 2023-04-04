export const dateParser = (num) => {
  let options = {
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let timestamp = Date.parse(num);

  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

  return date.toString();
};

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const upperCase = (word) => {
  let newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
};

export const calcLeadQuality = (lead) => {
  if (
    lead.first_name &&
    lead.last_name &&
    lead.email &&
    lead.role &&
    lead.isVerified === true
  ) {
    return 100;
  } else if (lead.first_name && lead.last_name && lead.email && lead.role) {
    return 78;
  } else if (lead.first_name && lead.last_name && lead.email) {
    return 66;
  } else if (lead.first_name && lead.last_name) {
    return 45;
  } else return 25;
};
