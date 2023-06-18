import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">主催：TimeDate / 国際平和の日コンサート実行委員会<br/>後援：在日スイス大使館 / 全日本合唱連盟</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
