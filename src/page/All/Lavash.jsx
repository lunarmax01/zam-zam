import React, { useState } from "react";

function BurgerCard({ price, quantity, increase, decrease, handleOrder }) {
  return (
    <div className="w-full max-w-xs h-[360px] rounded-xl overflow-hidden flex flex-col relative shadow-md bg-white">
      <img
        src="public/lavash.jpg"
        alt="Burger Czarnuszek"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />
      <div className="px-3 py-2 text-black text-sm absolute bottom-0 w-full bg-black/60 backdrop-blur-sm z-20">
        <h2 className="font-bold text-base mb-1 text-white">
          Burger Czarnuszek
        </h2>
        <p className="text-xs text-gray-200 line-clamp-3">
          200 g mol go'shti, tindal, aralash salat, piyoz, jalapeno, bekon,
          cheddar, qovurilgan piyoz, qora zira
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-semibold text-green-400">
            {price.toFixed(0)}K
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={decrease}
              className="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300"
            >
              −
            </button>
            <span className="text-white">{quantity}</span>
            <button
              onClick={increase}
              className="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleOrder}
          className="w-full mt-3 bg-green-500 text-white py-1 rounded hover:bg-green-600 text-sm"
        >
          Buyurtma berish
        </button>
      </div>
    </div>
  );
}

function Burger() {
  const [quantity, setQuantity] = useState(1);
  const price = 26000;
  const min = 1;
  const max = 10;

  const increase = () => {
    if (quantity < max) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > min) setQuantity(quantity - 1);
  };

  const handleOrder = () => {
    alert(
      `${quantity} ta 'Burger Czarnuszek' buyurtma qilindi.\nUmumiy narx: ${
        quantity * price
      } So'm`
    );
  };

  const cards = Array.from({ length: 4 });

  return (
    <div className="w-full px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
      {cards.map((_, i) => (
        <BurgerCard
          key={i}
          price={price / 1000}
          quantity={quantity}
          increase={increase}
          decrease={decrease}
          handleOrder={handleOrder}
        />
      ))}
    </div>
  );
}

export default Burger;
