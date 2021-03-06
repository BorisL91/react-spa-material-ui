import React from "react"
import PropTypes from "prop-types"
import "./styles/EmojiResultsRow.css"

const EmojiResultsRow = ({ symbol, title }) => {
  const codePointHex = symbol.codePointAt(0).toString(16)
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

  return (
    <div
      className='component-emoji-result-row copy-to-clipboard'
      data-clipboard-text={symbol}
    >
      <img alt={title} src={src} />
      <span className='emoji-title'>{title}</span>
      <span className='emoji-info'>Click to copy emoji</span>
    </div>
  )
}
EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
}
export default EmojiResultsRow
