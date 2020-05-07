export const categoryToText = (category) => {
  if (category === "TWO_HANDED") {
    return "Two Handed";
  }
  else if (category === "ONE_HANDED") {
    return "One Handed";
  }
  else if (category === "AERIALS") {
    return "Aerials";
  }
  else if (category === "SPINS") {
    return "Spins";
  }
  else if (category === "TWIRLS") {
    return "Twirls";
  }
  else if (category === "DISPLAYS") {
    return "Displays";
  }
  else if (category === "FANS") {
    return "Fans";
  }
  else if (category === "SHUFFLES") {
    return "Shuffles";
  }
  else if (category === "ISOLATIONS") {
    return "Isolations";
  }
  else if (category === "OTHERS") {
    return "Others";
  }
  else {
    return category;
  }
};

export const skillLevelToText = (skill) => {
  if (skill === "TO_BE_LEARNED") {
    return ["To Be Learned", 0, "#e74c3c"];
  }
  else if (skill === "BEGGINER") {
    return ["Begginer", 20, "#e67e22"];
  }
  else if (skill === "AVERAGE") {
    return ["Average", 40, "#f1c40f"];
  }
  else if (skill === "SKILLED") {
    return ["Skilled", 60, "#47b372"];
  }
  else if (skill === "ADVANCED") {
    return ["Advanced", 80, "#00a8ff"];
  }
  else if (skill === "GODLIKE") {
    return ["Godlike", 100, "#8c7ae6"];
  }
  else {
    return skill;
  }
};
