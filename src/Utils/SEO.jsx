import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Grace Wilson | Digital Marketing Specialist",
  description = "Professional digital marketer helping brands grow through SEO, social media marketing, paid advertising, and content strategy.",
  image = "https://i.ibb.co.com/WNqYCBcV/fuad.png",
  url = "https://grace-wilson.vercel.app",
}) => {
  return (
    <Helmet>
      {/* BASIC SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="digital marketer, SEO expert, social media marketing, content marketing, paid ads, branding, marketing strategist, online marketing"
      />

      <meta name="author" content="Grace Wilson" />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
