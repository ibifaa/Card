import productData from "../product-data";

export const Products = () => {
  return (
    <article className="flex justify-center items-center">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-600">
        {productData.map((myProducts) => (
          <div key={myProducts.product} className="flex">
            <img
              src={myProducts.imageUrl}
              alt={myProducts.imageAlt}
              className="mr-5"
            />
            <div className="my-10">
              <h5 className="font-medium  text-base">{myProducts.product}</h5>
              <p> {myProducts.price}</p>
              <p> {myProducts.count}</p>
              <p className="mt-5"> {myProducts.description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
