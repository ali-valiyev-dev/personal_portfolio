import PropTypes from "prop-types";

const SocialIcon = ({ href, IconComponent, alt }) => (
  <a
    href={href}
    aria-label={alt}>
    <IconComponent
      sx={{
        backgroundColor: "white",
        color: "black",
        fontSize: { xs: "48px", lg: "56px" },
        padding: { xs: "8px", lg: "12px" },
        borderRadius: "4px",
        border: "2px solid black",
        transition:
          "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
        "&:hover": { backgroundColor: "black", color: "white" },
      }}
    />
  </a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SocialIcon;
