const SelectSize = ({ productType, onChange, setSize }) => {
  // Product Type = shirt, pants, jacket, shoes, hats / Passed in from product-card
  // console.log("productType = ", productType);

  // Color options
  const sizes = ["Size", "S", "M", "L", "XL", "XXL"];

  const shoeSizes = ["Size", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"];

  const sizeHandler = (event) => {
    console.log("SELECT event: ", event);
    const size = event.target.value;
    // console.log("Color Changed! Event:", event);
    console.log("Size Changed! size:", size);
    setSize(size);
  };

  // if (productType === "pants") console.log("pants");
  // else console.log("not pants, productType: ", productType);

  return (
    <div>
      {/* //Product is Shoes, display Shoes selection options */}
      <select className="select-container" onChange={(event) => sizeHandler(event)}>
        {shoeSizes.map((shoeSize) => {
          return <option key={shoeSize}>{shoeSize}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectSize;

// return (
//   <div>
//     {/* Product is Pants, display pants selection options  */}
//     {productType === "pants" ? (
//       <select className="select-container" onChange={(event) => sizeHandler(event)}>
//         {pantSizes.map((pantSize) => {
//           return <option key={pantSize}>{pantSize}</option>;
//         })}
//       </select>
//     ) : productType === "shoes" ? (
//       //Product is Shoes, display Shoes selection options
//       <select className="select-container" onChange={(event) => sizeHandler(event)}>
//         {shoeSizes.map((shoeSize) => {
//           return <option key={shoeSize}>{shoeSize}</option>;
//         })}
//       </select>
//     ) : (
//       //NOT Shoes OR Pants, display normal size selection options
//       <select className="select-container" onChange={(event) => sizeHandler(event)}>
//         {sizes.map((size) => {
//           return <option key={size}>{size}</option>;
//         })}
//       </select>
//     )}
//   </div>
// );
