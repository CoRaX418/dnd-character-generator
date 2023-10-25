"use client";
import { useController, useForm } from "react-hook-form";
import { useGenerate } from "../hooks/useGenerate";
import { Alignment, STATS } from "../consts/consts";
import ReactSelect, { Options } from "react-select";

const getStatModifier = (value: number) => {
  if (value) {
    const modifier = Math.floor((value - 10) / 2);
    return modifier > 0 ? `+${modifier}` : modifier
  }
}

const getSelectOptions = <T extends object>(collection: T) => (
  Object.entries(collection).map(([key, value]) => ({
    value: key,
    label: value
  }))
)

export const HomePage = () => {
  const { handleSubmit, register, watch, reset, control } = useForm();
  const generate = useGenerate();

  const { field: alignment } = useController({ name: "alignment", control })

  const onSubmit = () => { };
  const onGenerate = () => {
    const character = generate();
    reset(character);
  };

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
          <ReactSelect className="w-56 " options={getSelectOptions(Alignment)} value={alignment.value} onChange={alignment.onChange} />
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
