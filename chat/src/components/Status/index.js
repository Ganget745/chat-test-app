import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Status.scss'

const Status = ({ online }) => <span className={classNames('status', {'status--online': online})}>{online ? 'online' : 'ofline'}</span>

Status.propTypes = {
  online: PropTypes.bool
}

export default Status
