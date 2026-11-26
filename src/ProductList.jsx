import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

// Inline SVG thumbnail so the app has no external image dependencies.
// Swap `image` for real photo URLs whenever you like.
const thumb = (leaf, pot) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#eef3ec"/>` +
      `<path d="M100 130V70" stroke="${leaf}" stroke-width="5" stroke-linecap="round"/>` +
      `<path d="M100 100C60 100 45 70 45 40c40 0 55 30 55 60Z" fill="${leaf}"/>` +
      `<path d="M100 115c32 0 52-20 56-52-36 0-56 20-56 52Z" fill="${leaf}" opacity=".75"/>` +
      `<path d="M65 130h70l-9 50H74Z" fill="${pot}"/></svg>`
  );

const categories = [
  {
    title: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: 15, desc: 'Produces oxygen at night and tolerates low light.', image: thumb('#2f7d4f', '#c96f4a') },
      { name: 'Spider Plant', cost: 12, desc: 'Fast-growing and easy; filters common indoor toxins.', image: thumb('#5aa469', '#d98c5f') },
      { name: 'Peace Lily', cost: 18, desc: 'White blooms and a reputation for cleaner air.', image: thumb('#1f6b52', '#b5573a') },
      { name: 'Boston Fern', cost: 20, desc: 'Lush fronds that add humidity to dry rooms.', image: thumb('#3d9a4b', '#c96f4a') },
      { name: 'Rubber Plant', cost: 17, desc: 'Glossy leaves that clear dust and fumes.', image: thumb('#214f3a', '#d98c5f') },
      { name: 'Aloe Vera', cost: 14, desc: 'Cleans the air and soothes minor burns.', image: thumb('#6bb58a', '#b5573a') },
    ],
  },
  {
    title: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', cost: 20, desc: 'Calming scent that helps you wind down.', image: thumb('#7f78c4', '#c96f4a') },
      { name: 'Jasmine', cost: 18, desc: 'Sweet evening fragrance from small white flowers.', image: thumb('#4f9f6f', '#d98c5f') },
      { name: 'Rosemary', cost: 15, desc: 'Piney aroma, and great in the kitchen too.', image: thumb('#3a7f5f', '#b5573a') },
      { name: 'Mint', cost: 12, desc: 'Cool, fresh scent; keep it in its own pot.', image: thumb('#59b36f', '#c96f4a') },
      { name: 'Lemon Balm', cost: 14, desc: 'Bright citrus fragrance for teas and bouquets.', image: thumb('#8cc152', '#d98c5f') },
      { name: 'Gardenia', cost: 22, desc: 'Creamy, rich blooms with a heady perfume.', image: thumb('#2a6e4e', '#b5573a') },
    ],
  },
  {
    title: 'Low-Maintenance Succulents',
    plants: [
      { name: 'Jade Plant', cost: 16, desc: 'Thick leaves store water; forgives a missed week.', image: thumb('#3f8f68', '#c96f4a') },
      { name: 'Echeveria', cost: 10, desc: 'Rosette-shaped and happy on a sunny sill.', image: thumb('#86b8a3', '#d98c5f') },
      { name: 'Haworthia', cost: 11, desc: 'Small, striped, and fine in bright shade.', image: thumb('#2d7a5a', '#b5573a') },
      { name: 'String of Pearls', cost: 19, desc: 'Trailing beads that look great in hanging pots.', image: thumb('#6fae7d', '#c96f4a') },
      { name: 'Burro\u2019s Tail', cost: 17, desc: 'Cascading stems; water sparingly.', image: thumb('#5c9c78', '#d98c5f') },
      { name: 'Zebra Cactus', cost: 13, desc: 'Compact and striking with almost no care.', image: thumb('#24654a', '#b5573a') },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = (name) => cartItems.some((item) => item.name === name);

  return (
    <main className="product-list">
      {categories.map((category) => (
        <section key={category.title} className="category">
          <h2>{category.title}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => {
              const added = isInCart(plant.name);
              return (
                <article key={plant.name} className="product-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.cost}</p>
                  <p className="desc">{plant.desc}</p>
                  <button
                    className="add-button"
                    disabled={added}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {added ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
