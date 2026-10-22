"use client";

import { FoodType } from "@/libs/food";

type Props = FoodType & {
  onAdd: () => void;
};

export default function FoodCardComponent(props: Props) {
  return (
    <section className="flex justify-between border rounded-2xl p-4 w-full">
      <div>
        <h2 className="text-xl font-bold">
          {props.title}
        </h2>

        <p className="font-semibold">
          {props.price}$
        </p>

        <p className="mt-3">
          {props.description}
        </p>
      </div>

      <div className="relative">
        <img
          className="h-[180px] w-[180px] object-cover rounded-xl"
          src={props.image}
          alt={props.title}
        />

        <button
          onClick={props.onAdd}
          className="absolute right-1 bottom-1 border rounded-full w-8 h-8 bg-white text-black"
        >
          +
        </button>
      </div>
    </section>
  );
}