import React from "react";
import PropTypes from "prop-types";
import i18n from "../assets/langs/i18n";
import { useTranslation } from "react-i18next";
const Footer = (props) => {
  const { t } = useTranslation();
  return (
    <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
      <p className="copyright">
        {t("presentedBy")}
        <br />
        {t("nominalSupportBy")}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
