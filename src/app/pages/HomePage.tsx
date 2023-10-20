"use client";
import { useForm } from "react-hook-form";
import { useGenerate } from "../hooks/useGenerate";
import { STATS } from "../consts/consts";

const getStatModifier = (value: number) => {
  if (value) {
    const modifier = Math.floor((value - 10) / 2);
    return modifier > 0 ? `+${modifier}` : modifier
  }
}

export const HomePage = () => {
  const { handleSubmit, register, watch, reset } = useForm();
  const generate = useGenerate();

  const onSubmit = () => { };
  const onGenerate = () => {
    const character = generate();
    reset(character);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>DND Character Generator</h1>
      <div>
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
          <input {...register("alignment")} />
        </label>
        <label>
          Предыстория
          <input {...register("background")} />
        </label>
      </div>
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
      <button onClick={onGenerate}>Сгенерировать</button>
    </form>
  );
};
