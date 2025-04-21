const About = () => {
  // Styles
  const aboutContainerStyle = {
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

  const sectionStyle = {
    background: "rgba(45, 24, 16, 0.8)",
    padding: "30px",
    borderRadius: "16px",
    marginBottom: "30px",
    border: "1px solid #5D4037",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "#E6D5B8",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "15px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    letterSpacing: "-0.5px",
  };

  const subtitleStyle = {
    fontSize: "1.8rem",
    color: "#E6D5B8",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const textStyle = {
    color: "#D4B996",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    marginBottom: "15px",
  };

  const featureListStyle = {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
  };

  const featureItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "15px",
    color: "#D4B996",
    fontSize: "1.1rem",
  };

  const iconStyle = {
    fontSize: "1.5rem",
    color: "#E6D5B8",
  };

  return (
    <div style={aboutContainerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>
          <span style={{ fontSize: "2.8rem" }}>☕</span>
          About Coffee Explorer
        </h1>
      </header>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>
          <span style={iconStyle}>🌍</span>
          Our Mission
        </h2>
        <p style={textStyle}>
          Coffee Explorer is your gateway to discovering the rich and diverse
          world of coffee. We're passionate about helping coffee enthusiasts
          explore different varieties, origins, and brewing methods from around
          the globe.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>
          <span style={iconStyle}>✨</span>
          Features
        </h2>
        <ul style={featureListStyle}>
          <li style={featureItemStyle}>
            <span style={iconStyle}>📊</span>
            Interactive Dashboard with coffee statistics and visualizations
          </li>
          <li style={featureItemStyle}>
            <span style={iconStyle}>🔍</span>
            Advanced search and filtering capabilities
          </li>
          <li style={featureItemStyle}>
            <span style={iconStyle}>📱</span>
            Detailed coffee profiles with comprehensive information
          </li>
          <li style={featureItemStyle}>
            <span style={iconStyle}>📈</span>
            Data visualization through charts and graphs
          </li>
          <li style={featureItemStyle}>
            <span style={iconStyle}>🌐</span>
            Responsive design for all devices
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>
          <span style={iconStyle}>📚</span>
          Data Source
        </h2>
        <p style={textStyle}>
          Our coffee data is sourced from the Sample APIs Coffee Database,
          providing accurate and up-to-date information about various coffee
          types, their origins, ingredients, and brewing methods.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>
          <span style={iconStyle}>💡</span>
          How to Use
        </h2>
        <ul style={featureListStyle}>
          <li style={featureItemStyle}>
            <span style={iconStyle}>🏠</span>
            Dashboard: View coffee statistics and explore the collection
          </li>
          <li style={featureItemStyle}>
            <span style={iconStyle}>🔎</span>
            Search: Find specific coffees using our advanced search features
          </li>
          <li style={featureItemStyle}>
            <span style={iconStyle}>📖</span>
            Details: Click on any coffee to view its complete profile
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>
          <span style={iconStyle}>🤝</span>
          Contact Us
        </h2>
        <p style={textStyle}>
          Have questions or suggestions? We'd love to hear from you! Reach out
          to us through our contact form or social media channels.
        </p>
      </div>
    </div>
  );
};

export default About;
