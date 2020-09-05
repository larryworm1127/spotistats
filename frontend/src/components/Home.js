import React from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./style";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BarChartIcon from "@material-ui/icons/BarChart";
import TopArtists from "./TopArtists";
import CollapseListItem from "./CollapseListItem";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import PeopleIcon from "@material-ui/icons/People";
import TopTracks from "./TopTracks";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


class Home extends React.Component {

  state = {
    open: true,
    selectedIndex: 0
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  getSubComponent = () => {
    switch (this.state.selectedIndex) {
      case 1:
        return <TopArtists timeRange="Short Term"/>;
      case 2:
        return <TopArtists timeRange="Medium Term"/>;
      case 3:
        return <TopArtists timeRange="Long Term"/>;
      case 4:
        return <TopTracks timeRange="Short Term"/>;
      case 5:
        return <TopTracks timeRange="Medium Term"/>;
      case 6:
        return <TopTracks timeRange="Long Term"/>;
    }
  };

  render() {
    const { classes } = this.props;
    const { open, selectedIndex } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon/>
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Spotistats
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>
          <Divider/>
          <List>
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItem>

            <CollapseListItem
              label="Top Artists"
              icon={<DashboardIcon/>}
              onSelectClick={this.handleListItemClick}
              selectedIndex={selectedIndex}
              indices={[1, 2, 3]}
            />
            <CollapseListItem
              label="Top Tracks"
              icon={<BarChartIcon/>}
              onSelectClick={this.handleListItemClick}
              selectedIndex={selectedIndex}
              indices={[4, 5, 6]}
            />
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer}/>

          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {this.getSubComponent()}
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright/>
            </Box>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
