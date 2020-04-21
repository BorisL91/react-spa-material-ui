import React from "react"
import SwipeableViews from "react-swipeable-views"

import { TabPanel, a11yProps } from "./TabPanel"
//material-ui stuff
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import Emojis from "../../components/Emoji/EmojiApp"
import Recipes from "../../components/Recipe/RecipeMain"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}))

export default function FullWidthTabs() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position='sticky' color='default' top='0'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Emoji Search' {...a11yProps(0)} />
          <Tab label='Recipe Search' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
          <Tab label='Item Four' {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Emojis />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Recipes />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
