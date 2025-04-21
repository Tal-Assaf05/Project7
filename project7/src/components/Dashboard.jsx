import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalCoffees: 0,
    avgIngredients: 0,
    uniqueOrigins: 0,
    mostCommonCategory: "",
    ingredientCount: 0,
  });
  const [chartData, setChartData] = useState({
    categories: [],
    origins: [],
  });

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        const data = await response.json();
        setCoffees(data);

        // Calculate statistics
        const totalCoffees = data.length;
        const allIngredients = data.flatMap(
          (coffee) => coffee.ingredients || []
        );
        const uniqueOrigins = new Set(data.map((coffee) => coffee.origin)).size;
        const categories = data.map((coffee) => coffee.category);
        const mostCommonCategory = categories.reduce((a, b) =>
          categories.filter((v) => v === a).length >=
          categories.filter((v) => v === b).length
            ? a
            : b
        );

        // Prepare chart data
        const categoryCounts = {};
        const originCounts = {};

        data.forEach((coffee) => {
          const category = coffee.category || "Classic";
          const origin = coffee.origin || "Various";

          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
          originCounts[origin] = (originCounts[origin] || 0) + 1;
        });

        const categoryData = Object.entries(categoryCounts).map(
          ([name, value]) => ({
            name,
            value,
          })
        );

        const originData = Object.entries(originCounts).map(
          ([name, value]) => ({
            name,
            value,
          })
        );

        setChartData({
          categories: categoryData,
          origins: originData,
        });

        setStats({
          totalCoffees,
          avgIngredients: (allIngredients.length / totalCoffees).toFixed(1),
          uniqueOrigins,
          mostCommonCategory: mostCommonCategory || "Classic",
          ingredientCount: allIngredients.length,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  // Enhanced styles with sophisticated coffee palette
  const dashboardStyle = {
    marginLeft: "220px",
    padding: "40px",
    maxWidth: "1200px",
    minHeight: "100vh",
    background: "linear-gradient(145deg, #3D2317, #2D1810)", // Rich coffee gradient
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

  // Statistics box style
  const statBoxStyle = {
    background: "linear-gradient(145deg, #4D2D1F, #3D2317)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #5D4037",
    boxShadow: "0 4px 15px rgba(93, 64, 55, 0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease",
  };

  const statValueStyle = {
    fontSize: "2rem",
    color: "#E6D5B8",
    fontWeight: "600",
    margin: "0",
  };

  const statLabelStyle = {
    fontSize: "0.9rem",
    color: "#D4B996",
    textAlign: "center",
    margin: "0",
  };

  const statsContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  };

  const chartContainerStyle = {
    background: "linear-gradient(145deg, #4D2D1F, #3D2317)",
    padding: "25px",
    borderRadius: "16px",
    marginBottom: "25px",
    border: "1px solid #5D4037",
    boxShadow: "0 4px 15px rgba(93, 64, 55, 0.3)",
  };

  const chartTitleStyle = {
    color: "#E6D5B8",
    fontSize: "1.2rem",
    marginBottom: "20px",
    textAlign: "center",
  };

  const COLORS = [
    "#8B4513",
    "#A0522D",
    "#CD853F",
    "#DEB887",
    "#D2B48C",
    "#BC8F8F",
    "#DAA520",
    "#B8860B",
    "#CD853F",
    "#D2691E",
  ];

  const handleCoffeeClick = (coffeeId) => {
    navigate(`/detail/${coffeeId}`);
  };

  return (
    <div style={dashboardStyle}>
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
          <span style={{ fontSize: "2.8rem" }}>☕</span>
          Coffee Explorer
        </h1>
      </header>

      {loading ? (
        <div style={loadingStyle}>
          <div style={{ fontSize: "40px" }}>☕</div>
          <div>Brewing your coffee selection...</div>
        </div>
      ) : (
        <>
          <div style={statsContainerStyle}>
            <div style={statBoxStyle}>
              <h3 style={statValueStyle}>{stats.totalCoffees}</h3>
              <p style={statLabelStyle}>Total Coffee Varieties</p>
            </div>
            <div style={statBoxStyle}>
              <h3 style={statValueStyle}>{stats.avgIngredients}</h3>
              <p style={statLabelStyle}>Average Ingredients per Coffee</p>
            </div>
            <div style={statBoxStyle}>
              <h3 style={statValueStyle}>{stats.uniqueOrigins}</h3>
              <p style={statLabelStyle}>Unique Origins</p>
            </div>
            <div style={statBoxStyle}>
              <h3 style={statValueStyle}>{stats.mostCommonCategory}</h3>
              <p style={statLabelStyle}>Most Common Category</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "25px",
              marginBottom: "25px",
            }}
          >
            <div style={chartContainerStyle}>
              <h3 style={chartTitleStyle}>Coffee Categories Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData.categories}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#5D4037" />
                  <XAxis dataKey="name" stroke="#E6D5B8" />
                  <YAxis stroke="#E6D5B8" />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(45, 24, 16, 0.9)",
                      border: "1px solid #5D4037",
                      color: "#E6D5B8",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="value"
                    fill="#8B4513"
                    name="Number of Coffees"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={chartContainerStyle}>
              <h3 style={chartTitleStyle}>Coffee Origins Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData.origins}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) =>
                      `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {chartData.origins.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "rgba(45, 24, 16, 0.9)",
                      border: "1px solid #5D4037",
                      color: "#E6D5B8",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ display: "grid", gap: "25px" }}>
            {coffees.map((coffee, index) => (
              <div
                key={index}
                style={cardStyle}
                onClick={() => handleCoffeeClick(coffee.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(139, 69, 19, 0.3)";
                  e.currentTarget.style.cursor = "pointer";
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

export default Dashboard;
