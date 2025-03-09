import React, { useEffect, useState } from "react";
import Search from "../ui/Search";
import ProductCard from "../ui/ProductCard";

const Products = () => {
  const apiURL = "https://v2.api.noroff.dev/online-shop";
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(apiURL);
        const json = await response.json();

        if (json && json.data && Array.isArray(json.data)) {
          setProducts(json.data);
        } else {
          throw new Error("Invalid data format");
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Search
        query={query}
        setQuery={setQuery}
        filteredProducts={filteredProducts}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
