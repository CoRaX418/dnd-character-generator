"use client";
import { useForm } from "react-hook-form";
import { useGenerate } from "../hooks/useGenerate";
import { STATS } from "../consts/consts";

export const HomePage = () => {
  const { handleSubmit, register, setValue, reset } = useForm();
  const generate = useGenerate();

  const onSubmit = () => {};
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
        </label>
        <label>
          Ловкость
          <input {...register(STATS.Agility)} type="number" />
        </label>
        <label>
          Выносливость
          <input {...register(STATS.Constitution)} type="number" />
        </label>
        <label>
          Интеллект
          <input {...register(STATS.Intelligence)} type="number" />
        </label>
        <label>
          Мудрость
          <input {...register(STATS.Wizdom)} type="number" />
        </label>
        <label>
          Харизма
          <input {...register(STATS.Charisma)} type="number" />
        </label>
      </div>
      <button onClick={onGenerate}>Сгенерировать</button>
    </form>
  );
};
