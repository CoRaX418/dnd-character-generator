import { CLASSES, MAIN_STATS, RACES, STATS } from "../consts/consts";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomIntRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomValue = <T extends object>(collection: T) => {
  const length = Object.keys(collection).length;
  const random = getRandomInt(length);
  return Object.values(collection)[random];
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
  const getName = () => {
    return "Амогус";
  };

  const getAlignment = () => {
    return "Нейтральный";
  };

  const getBackground = () => {
    return "Солдат";
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

  const generate = () => {
    const name = getName();
    const race = getRandomValue(RACES);
    const heroClass = getRandomValue(CLASSES);
    const alignment = getAlignment();
    const background = getBackground();

    return {
      name,
      race,
      class: heroClass,
      alignment,
      background,
      ...getStats(heroClass),
    };
  };

  return generate;
};
