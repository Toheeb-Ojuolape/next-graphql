/** @type {import('next').NextConfig} */


module.exports = () => {
    const rewrites = () => {
      return [
        {
          source: "/graphql",
          destination: "https://api.amboss.space/graphql",
        }
      ];
    };
    return {
      rewrites,
    };
  };
