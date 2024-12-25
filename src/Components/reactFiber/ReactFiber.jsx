import { useState, useEffect } from "react";

const ReactFiber = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch products from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Show all products initially
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  const handleSearch = (term) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <div className="min-h-screen">
      <div className="flex text-black">
        {/* Left Sidebar */}
        <div className="w-64 min-h-screen bg-blue-100 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sidebar</h2>
          <nav>
            <div className="space-y-2">
              <div>
                <h1 className="bg-blue-200 p-2 rounded cursor-pointer">
                  React Fiber
                </h1>
                <p>
                  It is designed to improve rendering performance, enable
                  incremental rendering. React Fiber breaks rendering work into
                  smaller units, allowing React to pause, prioritize, and resume
                  rendering tasks based on their importance.
                </p>
              </div>
              <div>
                <h1 className="bg-blue-200 p-2 text-black rounded cursor-pointer">
                  Fiber Tree
                </h1>
                <p>
                  React creates a fiber tree, where each node represents a unit
                  of work for rendering a component or updating state.
                </p>
              </div>
              <div>
                <h1 className="bg-blue-200 p-2 rounded cursor-pointer">
                  Reconciliation
                </h1>
                <p>
                  During the reconciliation process, React Fiber compares the
                  current fiber tree (current state of the UI) with the new
                  fiber tree (updated UI) to calculate the minimum number of
                  changes required.
                </p>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex-1 py-10 px-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <header className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Understanding React Fiber
              </h1>
              <p className="text-gray-600">
                When you take user input, React will initiate a search in the
                background by breaking down the task into smaller units of work.
              </p>
              <p className="text-gray-600">
                Unlike traditional rendering, where each change triggers a full
                re-render, React Fiber optimizes rendering by pausing and
                resuming tasks. This means if you type rapidly, the search
                process will pause when it needs to render the current state
                first and then continue working, making the UI feel smoother and
                more responsive.
              </p>
            </header>

            <section>
              <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                Product Search
              </h1>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleSearch(e.target.value);
                }}
                className="w-full px-4 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isLoading ? (
                <p className="mt-4 text-blue-500">Loading products...</p>
              ) : (
                <ul className="mt-6 space-y-3">
                  {filteredProducts?.map((product) => (
                    <li
                      key={product.id}
                      className="bg-gray-50 text-black border rounded-md shadow-sm p-4"
                    >
                      {product.title}
                    </li>
                  ))}
                </ul>
              )}
              {!isLoading && filteredProducts.length === 0 && searchTerm && (
                <p className="mt-4 text-red-500">No products found.</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactFiber;
