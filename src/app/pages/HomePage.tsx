"use client";
import { useController, useForm, useWatch } from "react-hook-form";
import { useGenerate } from "../hooks/useGenerate";
import { Alignment, CLASSES, HEALTH_DICE, STATS } from "../consts/consts";
import ReactSelect from "react-select";
import { SelectOption } from "../types/types";

const getStatModifier = (value: number) => {
  if (value) {
    const modifier = Math.floor((value - 10) / 2);
    return modifier > 0 ? `+${modifier}` : modifier
  }
}

const getHealthPoints = (heroClass: CLASSES, constitution: number) => {
  return HEALTH_DICE[heroClass] + Number(getStatModifier(constitution));
}

const getSelectOptions = <T extends object>(collection: T): Array<SelectOption> => Object.entries(collection).map(([key, value]) => ({ id: key, label: value }))

export const HomePage = () => {
  const { handleSubmit, register, watch, reset, control } = useForm();
  const generate = useGenerate();

  const { field: alignment } = useController({ name: "alignment", control })
  const fieldValues = useWatch({ control })

  const onSubmit = () => { };
  const onGenerate = () => {
    const character = generate();
    reset(character);
  };

  const onAlignmentChange = (newValue: SelectOption | null) => alignment.onChange(newValue?.id)

  const alignmentOptions = getSelectOptions(Alignment)

  const hp = getHealthPoints(fieldValues["class"], fieldValues["constitution"])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>DND Character Generator</h1>
      <div className="flex">
        <label>
          Имя
          <input {...register("name")} />
        </label>
        <label>
          Раса
          <input {...register("race")} />
        </label>
        <label>
          Класс
          <input {...register("class")} />
        </label>
        <label>
          Мировоззрение
          <ReactSelect className="w-56" options={alignmentOptions} value={alignmentOptions.find(option => option.id === alignment.value)} onChange={onAlignmentChange} />
        </label>
        <label>
          Предыстория
          <input {...register("background")} />
        </label>
      </div>
      <div className="flex justify-between">
        <div>
          <label>
            Сила
            <input {...register(STATS.Strength)} type="number" />
            {getStatModifier(watch(STATS.Strength))}
          </label>
          <label>
            Ловкость
            <input {...register(STATS.Agility)} type="number" />
            {getStatModifier(watch(STATS.Agility))}
          </label>
          <label>
            Выносливость
            <input {...register(STATS.Constitution)} type="number" />
            {getStatModifier(watch(STATS.Constitution))}
          </label>
          <label>
            Интеллект
            <input {...register(STATS.Intelligence)} type="number" />
            {getStatModifier(watch(STATS.Intelligence))}
          </label>
          <label>
            Мудрость
            <input {...register(STATS.Wizdom)} type="number" />
            {getStatModifier(watch(STATS.Wizdom))}
          </label>
          <label>
            Харизма
            <input {...register(STATS.Charisma)} type="number" />
            {getStatModifier(watch(STATS.Charisma))}
          </label>
        </div>
        {!!hp &&
          (<div>
            <label>HP</label>
            {getHealthPoints(fieldValues["class"], fieldValues["constitution"])}
          </div>
          )}
        <div>
          <label>
            Черта характера
            <textarea {...register("trate")} />
          </label>
          <label>
            Идеал
            <textarea {...register("ideal")} />
          </label>
          <label>
            Привязанность
            <textarea {...register("attachment")} />
          </label>
          <label>
            Слабость
            <textarea {...register("weakness")} />
          </label>
        </div>
      </div>
      <button onClick={onGenerate}>Сгенерировать</button>
    </form>
  );
};
