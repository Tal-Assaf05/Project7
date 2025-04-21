import { useState, useEffect } from "react";

const Search = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        const data = await response.json();
        setCoffees(data);
        setFilteredCoffees(data);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.map((coffee) => coffee.category || "Classic")),
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  useEffect(() => {
    const filtered = coffees.filter((coffee) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        coffee.title?.toLowerCase().includes(searchLower) ||
        coffee.description?.toLowerCase().includes(searchLower) ||
        coffee.origin?.toLowerCase().includes(searchLower) ||
        coffee.ingredients?.some((ingredient) =>
          ingredient.toLowerCase().includes(searchLower)
        ) ||
        coffee.category?.toLowerCase().includes(searchLower);

      const matchesCategory =
        selectedCategory === "all" ||
        (coffee.category || "Classic") === selectedCategory;

      return matchesSearch && matchesCategory;
    });
    setFilteredCoffees(filtered);
  }, [searchQuery, selectedCategory, coffees]);

  // Styles
  const searchContainerStyle = {
    marginLeft: "220px",
    padding: "40px",
    maxWidth: "1200px",
    minHeight: "100vh",
    background: "linear-gradient(145deg, #3D2317, #2D1810)",
    color: "#F5E6D3",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(93, 64, 55, 0.3)",
    marginTop: "20px",
    marginRight: "20px",
    border: "1px solid #4D2D1F",
  };

  const headerStyle = {
    marginBottom: "40px",
    borderBottom: "2px solid #8B4513",
    paddingBottom: "15px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const searchBarStyle = {
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: "2px solid #5D4037",
    background: "rgba(45, 24, 16, 0.8)",
    color: "#E6D5B8",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    flex: "1",
  };

  const searchBarFocusStyle = {
    borderColor: "#8B4513",
    boxShadow: "0 0 10px rgba(139, 69, 19, 0.3)",
  };

  const resultsCountStyle = {
    color: "#D4B996",
    marginBottom: "20px",
    fontSize: "0.9rem",
  };

  const cardStyle = {
    background: "linear-gradient(145deg, #4D2D1F, #3D2317)",
    padding: "25px",
    borderRadius: "16px",
    marginBottom: "25px",
    transition: "all 0.3s ease",
    border: "1px solid #5D4037",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(93, 64, 55, 0.3)",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#E6D5B8",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: "600",
    letterSpacing: "-0.5px",
  };

  const descriptionStyle = {
    color: "#D4B996",
    fontSize: "1rem",
    lineHeight: "1.7",
    marginBottom: "20px",
  };

  const detailsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "20px",
    padding: "15px",
    background: "rgba(61, 35, 23, 0.5)",
    borderRadius: "12px",
    border: "1px solid rgba(93, 64, 55, 0.3)",
  };

  const detailItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px",
    borderRadius: "8px",
    background: "rgba(45, 24, 16, 0.8)",
    gap: "8px",
    border: "1px solid rgba(93, 64, 55, 0.2)",
  };

  const tagStyle = {
    background: "linear-gradient(145deg, #8B4513, #5D4037)",
    color: "#F5E6D3",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "500",
    boxShadow: "0 2px 4px rgba(93, 64, 55, 0.3)",
  };

  const loadingStyle = {
    textAlign: "center",
    padding: "60px",
    color: "#E6D5B8",
    fontSize: "1.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  };

  const filterContainerStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    alignItems: "center",
    width: "100%",
    maxWidth: "100%",
  };

  const selectStyle = {
    padding: "15px",
    borderRadius: "12px",
    border: "2px solid #5D4037",
    background: "rgba(45, 24, 16, 0.8)",
    color: "#E6D5B8",
    fontSize: "1rem",
    minWidth: "200px",
    maxWidth: "250px",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    height: "52px",
  };

  const selectFocusStyle = {
    borderColor: "#8B4513",
    boxShadow: "0 0 10px rgba(139, 69, 19, 0.3)",
  };

  return (
    <div style={searchContainerStyle}>
      <header style={headerStyle}>
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#E6D5B8",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "15px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ fontSize: "2.8rem" }}>🔍</span>
          Coffee Search
        </h1>
      </header>

      {loading ? (
        <div style={loadingStyle}>
          <div style={{ fontSize: "40px" }}>☕</div>
          <div>Brewing your coffee selection...</div>
        </div>
      ) : (
        <>
          <div style={filterContainerStyle}>
            <input
              type="text"
              placeholder="Search by name, origin, ingredients, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                ...searchBarStyle,
                ...(searchQuery ? searchBarFocusStyle : {}),
              }}
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                ...selectStyle,
                ...(selectedCategory !== "all" ? selectFocusStyle : {}),
              }}
            >
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div style={resultsCountStyle}>
            Found {filteredCoffees.length} results
            {selectedCategory !== "all" && ` in ${selectedCategory} category`}
          </div>

          <div style={{ display: "grid", gap: "25px" }}>
            {filteredCoffees.map((coffee, index) => (
              <div
                key={index}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(139, 69, 19, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(93, 64, 55, 0.3)";
                }}
              >
                <h2 style={titleStyle}>
                  <span style={{ fontSize: "1.8rem" }}>☕</span>
                  {coffee.title}
                  <span style={tagStyle}>{coffee.category || "Classic"}</span>
                </h2>

                <p style={descriptionStyle}>{coffee.description}</p>

                <div style={detailsStyle}>
                  <div style={detailItemStyle}>
                    <strong style={{ color: "#E6D5B8" }}>Origin</strong>
                    <span style={{ color: "#D4B996" }}>
                      {coffee.origin || "Various"}
                    </span>
                  </div>
                  <div style={detailItemStyle}>
                    <strong style={{ color: "#E6D5B8" }}>Ingredients</strong>
                    <span style={{ color: "#D4B996" }}>
                      {coffee.ingredients?.join(", ") || "Classic blend"}
                    </span>
                  </div>
                  <div style={detailItemStyle}>
                    <strong style={{ color: "#E6D5B8" }}>Brewing Method</strong>
                    <span style={{ color: "#D4B996" }}>
                      {coffee.brewing_method || "Traditional"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
