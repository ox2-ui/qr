import React, { PropTypes } from 'react';
import qrcode from 'yaqrcode';

/**
 * Qr Component
 */
const Qr = ({ className, size, style, value, ...other }) => (
  <img
    className={className}
    src={qrcode(value, { size })}
    style={style}
    {...other}
  />
);

Qr.defaultProps = {
  size: 100,
};

Qr.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Gerated qr image size in pixels
   */
  size: PropTypes.number.isRequired,
  /**
   * Override the inline-styles of the image element.
   */
  style: PropTypes.object,
  /**
   * Value to generate qr from.
   */
  value: PropTypes.string.isRequired,
};

export default Qr;
