"use client";

import FoodCardComponent from '@/components/FoodCardComponent'
import { foodData, FoodType } from '@/libs/food'
import React, { useState } from 'react'

export default function FoodPage() {

  const [selectedFoods, setSelectedFoods] = useState<FoodType[]>([])

  function addFood(food: FoodType) {
    setSelectedFoods((prev) => [...prev, food])
  }

  return (
    <div className='p-10'>
      <div className='grid grid-cols-2 gap-2'>
        {foodData.map((food) =>
          <FoodCardComponent
            key={food.title}
            title={food.title}
            price={food.price}
            description={food.description}
            image={food.image}
            onAdd={() => addFood(food)}
          />
        )}
      </div>
      <div className='grid grid-cols-2 gap-2 mt-10'>

        {selectedFoods.map(({ title, price, description, image }, index) =>
          <section
            key={index}
            className="flex justify-between border rounded-2xl p-4 w-[500px]"
          >
            <div>
              <h2 className="text-xl font-bold">
                {title}
              </h2>

              <p className="font-semibold">
                {price}$
              </p>

              <p className="mt-3">
                {description}
              </p>
            </div>

            <div>
              <img
                className="h-[180px] w-[180px] object-cover rounded-xl"
                src={image}
                alt={title}
              />
            </div>
          </section>
        )}

      </div>

    </div>
  )
}