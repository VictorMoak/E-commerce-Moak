import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

//IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtos.editar'
import ProdutoCadastrar from './pages/admin/produtos/produtos.cadastrar'

import Clientes from './pages/admin/clientes';
import ClienteEditar from './pages/admin/clientes/clientes.editar'
import ClienteCadastrar from './pages/admin/clientes/clientes.cadastrar'

//IMPORTS CLIENT
import Home from './pages/client/home';
import ProdutoDetails from './pages/client/produtos/produtos.details'


export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                {/* Rotas Cliente */}
                <Route path="/" exact component={Home} />
                <Route path="/produtos/:desc" exact component={ProdutoDetails} />

                {/* Rotas Admin */}
                <Route path="/admin" exact component={Dashboard} />

                <Route path="/admin/produtos" exact component={Produtos} />
                <Route path="/admin/produtos/cadastrar" exact component={ProdutoCadastrar} />
                <Route path="/admin/produtos/editar/:desc" exact component={ProdutoEditar} />

                <Route path="/admin/clientes" exact component={Clientes} />
                <Route path="/admin/clientes/cadastrar" exact component={ClienteCadastrar} />
                <Route path="/admin/clientes/editar/:nm" exact component={ClienteEditar} />


            </Switch>
        </HashRouter>
    )
}