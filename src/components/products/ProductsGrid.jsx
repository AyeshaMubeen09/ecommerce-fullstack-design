import products from "../../data/products";
import ProductCard from "./ProductCard";

function ProductsGrid({ view }) {
  const displayedProducts =
    view === "list"
      ? products.slice(0, 6)
      : products;

  return (
    <div
      className={
        view === "grid"
          ? `
              grid
              grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              gap-3
              md:gap-4
            `
          : `
              space-y-3
              md:space-y-4
            `
      }
    >
      {displayedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          view={view}
        />
      ))}
    </div>
  );
}

export default ProductsGrid;