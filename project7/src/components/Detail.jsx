import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const response = await fetch(
          `https://api.sampleapis.com/coffee/hot/${id}`
        );
        const data = await response.json();
        setCoffee(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coffee details:", error);
        setLoading(false);
      }
    };

    fetchCoffee();
  }, [id]);

  // Styles
  const detailContainerStyle = {
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

  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  };

  const imageContainerStyle = {
    background: "rgba(45, 24, 16, 0.8)",
    borderRadius: "16px",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
  };

  const infoContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "#E6D5B8",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const descriptionStyle = {
    color: "#D4B996",
    fontSize: "1.1rem",
    lineHeight: "1.7",
  };

  const detailsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  };

  const detailCardStyle = {
    background: "rgba(45, 24, 16, 0.8)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #5D4037",
  };

  const detailTitleStyle = {
    color: "#E6D5B8",
    fontSize: "1.1rem",
    marginBottom: "10px",
    fontWeight: "600",
  };

  const detailContentStyle = {
    color: "#D4B996",
    fontSize: "1rem",
    lineHeight: "1.5",
  };

  const tagStyle = {
    background: "linear-gradient(145deg, #8B4513, #5D4037)",
    color: "#F5E6D3",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "1rem",
    fontWeight: "500",
    display: "inline-block",
    marginTop: "10px",
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

  return (
    <div style={detailContainerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>
          <span style={{ fontSize: "2.5rem" }}>☕</span>
          Coffee Details
        </h1>
      </header>

      {loading ? (
        <div style={loadingStyle}>
          <div style={{ fontSize: "40px" }}>☕</div>
          <div>Brewing your coffee details...</div>
        </div>
      ) : coffee ? (
        <div style={contentStyle}>
          <div style={imageContainerStyle}>
            <span style={{ fontSize: "120px" }}>☕</span>
          </div>

          <div style={infoContainerStyle}>
            <h2 style={titleStyle}>{coffee.title}</h2>
            <span style={tagStyle}>
              {coffee.category || "Traditional Brew"}
            </span>

            <p style={descriptionStyle}>{coffee.description}</p>

            <div style={detailsGridStyle}>
              <div style={detailCardStyle}>
                <h3 style={detailTitleStyle}>Origin</h3>
                <p style={detailContentStyle}>{coffee.origin || "Various"}</p>
              </div>

              <div style={detailCardStyle}>
                <h3 style={detailTitleStyle}>Ingredients</h3>
                <p style={detailContentStyle}>
                  {coffee.ingredients?.join(", ") || "Classic blend"}
                </p>
              </div>

              <div style={detailCardStyle}>
                <h3 style={detailTitleStyle}>Brewing Method</h3>
                <p style={detailContentStyle}>
                  {coffee.brewing_method || "Traditional"}
                </p>
              </div>

              <div style={detailCardStyle}>
                <h3 style={detailTitleStyle}>Preparation Time</h3>
                <p style={detailContentStyle}>
                  {coffee.preparation_time || "5-10 minutes"}
                </p>
              </div>

              <div style={detailCardStyle}>
                <h3 style={detailTitleStyle}>Serving Size</h3>
                <p style={detailContentStyle}>
                  {coffee.serving_size || "Standard cup"}
                </p>
              </div>

              <div style={detailCardStyle}>
                <h3 style={detailTitleStyle}>Temperature</h3>
                <p style={detailContentStyle}>{coffee.temperature || "Hot"}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={loadingStyle}>
          <div>No coffee found with that ID</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
