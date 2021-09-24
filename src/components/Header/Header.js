import React, { useState } from 'react'
import { Container, Grid, useMediaQuery, useTheme, IconButton, SwipeableDrawer } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../Menu/Menu';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    //Breakpoints
    const theme = useTheme();
    const isMatched = useMediaQuery(theme.breakpoints.down('md'));

    // Mobile Menu
    const [menu, setMenu] = useState(false);
    const toggleMenu = (open) => (event) => {
        setMenu(open);
    }

    return (
        <header className={classes.header}>
            <Container>
                <Grid container>
                    <Grid item xs={6} className={classes.headerLogo}>
                        <h1 className={classes.headerTitle}><span className={classes.headerEduardo}>Eduardo</span>Dorneles</h1>
                    </Grid>

                    { 
                        isMatched ?
                        <Grid item xs={6} className={classes.headerMobileNav}>
                            <nav className={classes.mobileNav}>
                                <IconButton aria-label="Menu" color="white" size="large" onClick={toggleMenu(true)}>
                                    <MenuIcon size="large" />
                                </IconButton>
                            </nav>
                        </Grid>
                        :
                        <Grid item xs={6} className={classes.headerNav}>
                            <nav>
                                <ul className={classes.navUl}>
                                    <li className={classes.navLi}>
                                        <Link className={classes.navLink} to="/">home</Link>
                                    </li>
                                    <li className={classes.navLi}>
                                        <Link className={classes.navLink} to="/projetos">projetos</Link>
                                    </li>
                                    <li className={classes.navLi}>
                                        <Link className={classes.navLink} to="/contato">contato</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Grid>    
                    }
                </Grid>
            </Container>

            <SwipeableDrawer anchor={"right"} open={menu} onOpen={() => {setMenu(true)}} onClose={toggleMenu(false)} >
                <Menu setMenu={setMenu} />
            </SwipeableDrawer>
        </header>
    )
}

export default Header;