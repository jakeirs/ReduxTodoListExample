import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
    /** active jest przekazany za pomocą func mapStateToProps w FilterLink.js */
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault();
                /** funkcja onClick() została napisana w FilterLink.js i przekazana za pomocą
                 * mapDispatchToProps func (która jest drugim parametrem connect func)
                 * W komponencie Link odbieram za pomocą Props.onClick */
                onClick()
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link