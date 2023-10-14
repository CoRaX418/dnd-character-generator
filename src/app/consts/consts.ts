export enum CLASSES {
  Bard = "Бард",
  Barbarian = "Варвар",
  Warrior = "Воин",
  Wizard = "Волшебник",
  Druid = "Друид",
  Cleric = "Жрец",
  Artificer = "Изобретатель",
  Warlock = "Колдун",
  Monk = "Монах",
  Paladin = "Паладин",
  Rogue = "Плут",
  Ranger = "Следопыт",
  Sorcerer = "Чародей",
}

export enum RACES {
  Human = "Человек",
  Dwarf = "Дварф",
  Elf = "Эльф",
  Tiefling = "Тифлинг",
  Halfling = "Полурослик",
}

export enum STATS {
  Strength = "strength",
  Agility = "agility",
  Constitution = "constitution",
  Intelligence = "intelligence",
  Wizdom = "wizdom",
  Charisma = "charisma",
}

export const MAIN_STATS = {
  [CLASSES.Artificer]: STATS.Intelligence,
  [CLASSES.Barbarian]: STATS.Strength,
  [CLASSES.Bard]: STATS.Charisma,
  [CLASSES.Cleric]: STATS.Intelligence,
  [CLASSES.Druid]: STATS.Wizdom,
  [CLASSES.Monk]: STATS.Agility,
  [CLASSES.Paladin]: STATS.Charisma,
  [CLASSES.Ranger]: STATS.Agility,
  [CLASSES.Rogue]: STATS.Agility,
  [CLASSES.Sorcerer]: STATS.Charisma,
  [CLASSES.Warlock]: STATS.Charisma,
  [CLASSES.Warrior]: STATS.Strength,
  [CLASSES.Wizard]: STATS.Intelligence,
};
