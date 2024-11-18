module.exports = {
  siteUrl: "https://formenwerkstatt.de", // Your website URL
  generateRobotsTxt: true, // Generate a robots.txt file
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/404", "/500"], // Exclude non-essential pages
  additionalPaths: async (config) => {
    // This function will dynamically add paths
    const dynamicPaths = await fetchDynamicPaths();
    return dynamicPaths.map((path) => ({
      loc: path, // Full URL of the dynamic page
      lastmod: new Date().toISOString(),
    }));
  },
};

const fetchDynamicPaths = async () => {
  const dynamicData = [
    "/contact",
    "/jobs",
    "/about",
    "/services/beratung-und-design",
    "/services/werkzeugherstellung",
    "/services/abmusterung-und-kleinserienproduktion",
    "/services/fraesen",
    "/services/drehen",
    "/services/senkerodieren",
    "/services/drahterodieren",
    "/services/laserschweissen",
    "/services/lasergravieren",
    "/services/hochglanzpolieren",
    "/services/flachschleifen",
    "/services/optimierung",
    "/services/uberholung",
    "/services/werkzeug-reparatur",
  ];
  return dynamicData.map((slug) => `https://formenwerkstatt.de/${slug}`);
};