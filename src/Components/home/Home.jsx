import card_img from "../../assets/Home/home_card.png";

const Home = () => {
    
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={card_img}
          alt="Card image"
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            React Learning
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            This project helps you learn React concepts like building
            components, managing state, routing with React Router, and using the
            context API. It includes simple examples and pages to practice these
            features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
