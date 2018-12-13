/***************************************************************************************************************************************************************
 *
 * CardList component
 *
 * TODO: Add prop types and default props
 * @disable-docs
 *
 * Cards serve as an entry point to more detailed information
 *
 **************************************************************************************************************************************************************/

import AUtextInput from '../_uikit/layout/text-inputs'

import React from 'react';
import PropTypes from 'prop-types';

const FormList = ({ formItems }) => (
    formItems.map( formItem => (
    <div className="form-item">
        <label className="label--block" htmlFor={formItem.id}>{formItem.label}</label>
        <AUtextInput className={formItem.className} id={formItems.id} name={formItem.id} />
    </div>

    ))
);

export default FormList;
