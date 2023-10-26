import { BACKGROUND_PERSONALIZATION, Background } from "../consts/background";
import { Alignment, CLASSES, MAIN_STATS, STATS } from "../consts/consts";
import { RACES, RACE_NAMES } from "../consts/race";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomIntRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomValue = <T extends object>(collection: T) => {
  const length = Object.keys(collection).length;
  const random = getRandomInt(length);
  return Object.values(collection)[random];
};

const getRandomKey = <T extends object>(collection: T) => {
  const length = Object.keys(collection).length;
  const random = getRandomInt(length);
  return Object.keys(collection)[random];
};

const throwDice = (size: number, amount: number) => {
  let sum = 0;
  for (let i = 1; i <= amount; i++) {
    sum += getRandomInt(size) + 1;
  }

  return sum;
};

const getRandomStat = () => {
  const values = [
    throwDice(6, 1),
    throwDice(6, 1),
    throwDice(6, 1),
    throwDice(6, 1),
  ];

  const minValue = Math.min(...values);
  return values.reduce((total, number) =>
    number === minValue ? total : total + number
  );
};

export const useGenerate = () => {
  const getName = (race: RACES) => {
    const names = RACE_NAMES[race].split(",").map(name => name.trim())
    return names[getRandomInt(names.length) - 1]
  };

  const getStats = (heroClass: CLASSES) => {
    const mainStat = MAIN_STATS[heroClass];

    let values = Object.keys(STATS).map(getRandomStat);

    const maxValue = Math.max(...values);
    values = values.filter((value) => value !== maxValue);

    const stats = { [mainStat]: maxValue };

    Object.values(STATS).forEach((stat) => {
      if (stat !== mainStat) {
        const value = values.pop() ?? 10;
        stats[stat] = value;
      }
    });

    return stats;
  };

  const getPersonalization = (background: Background) => {
    const values = BACKGROUND_PERSONALIZATION[background];
    const trate = getRandomValue(values.trates);
    const ideal = getRandomValue(values.ideals);
    const attachment = getRandomValue(values.attachments);
    const weakness = getRandomValue(values.weaknesses)

    return {
      trate,
      ideal,
      attachment,
      weakness
    }
  }

  const generate = () => {
    const race = getRandomValue(RACES);
    const heroClass = getRandomValue(CLASSES);
    const alignment = getRandomKey(Alignment);
    const background = getRandomValue(Background);
    const name = getName(race);

    return {
      name,
      race,
      class: heroClass,
      alignment,
      background,
      ...getStats(heroClass),
      ...getPersonalization(background)
    };
  };

  return generate;
};
