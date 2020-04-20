import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Clipboard from "clipboard"
import EmojiResultsRow from "./EmojiResultsRow"

const EmojiResults = ({ emojiData }) => {
  useEffect(() => {
    new Clipboard(".copy-to-clipboard")
  }, [emojiData])

  return (
    <div className='component-emoji-results'>
      {emojiData.map((data) => (
        <EmojiResultsRow
          key={data.title}
          symbol={data.symbol}
          title={data.title}
        />
      ))}
    </div>
  )
}
EmojiResults.propTypes = {
  emojiData: PropTypes.array.isRequired,
}

export default EmojiResults
