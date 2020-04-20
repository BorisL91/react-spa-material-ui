import React, { useState } from "react"

import filterEmoji from "../../util/filterEmoji"

import Header from "./Header"
import SearchInput from "./SearchInput"
import EmojiResults from "./EmojiResults"

const Emojis = () => {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20))

  const handleSearchChange = (event) => {
    setFilteredEmoji(filterEmoji(event.target.value, 20))
  }

  return (
    <>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </>
  )
}
export default Emojis
