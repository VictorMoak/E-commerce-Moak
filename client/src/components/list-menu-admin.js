import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';

export const mainListItems = (
    <div>
        <ListItem button component="a" href="/admin/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component="a" href="/admin/clientes/index">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem button component="a" href="/admin/produtos/index">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
        </ListItem>

    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Opções</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sair" />
        </ListItem>
    </div>
);