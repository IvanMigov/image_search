import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getClassName } from '../../utils/component';

import './Images.scss';

const ccn = getClassName('images');

const Images = ({ images }) => {
  if (!images) {
    return null;
  }

  if (!images.length) {
    return <div className={ccn()} >No result on this image</div>
  }

  return (
    <div className={ccn()}>
      {images.map(({ id, link }) => <img
        className={ccn('thumb')}
        src={link}
        key={id}
      />)}
    </div>
  )
};



Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id:   PropTypes.string,
    link: PropTypes.string
  }))
};

const mapStateToProps = ({ search: { images } }) => ({ images });


export default connect(mapStateToProps)(Images);
