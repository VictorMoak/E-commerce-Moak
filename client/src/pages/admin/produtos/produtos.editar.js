import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import TextField from '@material-ui/core/TextField';
import Footer from '../../../components/footer-admin';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import api from '../../../services/api';
import { useParams } from 'react-router-dom';

//Stilos CSS
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: 15,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

    formControl: {
        width: '100%'
    }
}));

export default function ProdutoCadastrar() {
    const classes = useStyles();

    const [descricao = '', setDescricao] = useState('');
    const [preco = '', setPreco] = useState('');
    const [estoqueMin = '', setEstoqueMin] = useState('');

    const { desc } = useParams();

    useEffect(() => {
        async function getProduto() {
            var response = await api.get('/api/produtos-details/' + desc);
            console.log(response);
            setDescricao(response.data.descricao);
            setPreco(response.data.preco);
            setEstoqueMin(response.data.estoqueMin);
        }
        getProduto();
    }, [])

    async function handleSubmit() {
        const dados = { descricao: descricao, preco: preco, estoqueMin: estoqueMin }
        console.log(dados)
        const response = await api.put('/api/produtos-update/' + desc, dados)

        if (response.status === 200) {
            window.location.href = '/admin/produtos'
        } else {
            alert('Erro ao atualizar produto.')
        }
    }

    return (
        <div className={classes.root}>

            <MenuAdmin title={'PRODUTOS'} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Paper className={classes.paper}>
                                <h2>Atualização de Produtos</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            required
                                            id="descricao"
                                            name="descricao"
                                            label="Descrição"
                                            fullWidth
                                            autoComplete="descricao"
                                            value={descricao}
                                            onChange={e => setDescricao(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="preco"
                                            name="preco"
                                            label="Preço"
                                            fullWidth
                                            autoComplete="preco"
                                            value={preco}
                                            onChange={e => setPreco(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField
                                            required
                                            id="estoqueMin"
                                            name="estoqueMin"
                                            label="Estoque Mínimo"
                                            fullWidth
                                            autoComplete="estoqueMin"
                                            value={estoqueMin}
                                            onChange={e => setEstoqueMin(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Button variant="contained" onClick={handleSubmit} color="primary">
                                            Salvar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Footer />
                    </Box>
                </Container>
            </main>
        </div>
    );
}