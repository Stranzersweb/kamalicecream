import Image from 'next/image';

const BestSellers = () => {
  const bestSellers = [
    { id: 1, name: 'Vanilla', image: 'Vanilla.jpeg' },
    { id: 2, name: 'Chocobar', image: 'chocobar.jpeg' },
    { id: 3, name: 'Pista', image: 'pista.jpeg' },
    { id: 4, name: 'Mint Chocolate Chip', image: 'mint-chocolate-chip.jpeg' },
    // Add more flavors as needed
  ];

  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    background: 'linear-gradient(90deg, rgba(175,148,79,1) 0%, rgba(172,83,42,1) 45%, rgba(52,34,19,1) 89%)',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
   
  };

  return (
    <div className=" p-10 h-full" style={containerStyle}>
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mt-10">Best Sellers</h1>
    </div>
    <div className="m-2 sm:m-6 md:m-8 lg:m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bestSellers.map((flavor) => (
        <div key={flavor.id} className="bg-white p-4 align-center rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105">
          <Image
            src={`/Images/flavours/${flavor.image}`}
            alt={flavor.name}
            className=" border-black w-50 h-55 p-5 justify-center object-contain mb-4 rounded transition-transform transform hover:scale-105"
            width={300}
            height={200}
          />
          <h3 className="text-xl top-100 bottom-0 text-center text-black font-semibold mb-2">{flavor.name}</h3>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default BestSellers;
