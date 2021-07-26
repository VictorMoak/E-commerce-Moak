import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin'
import ImgAdmin from '../../../assets/img/admin.png'
import Footer from '../../../components/footer-admin'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


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
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));


export default function ProdutosListagem() {
    const classes = useStyles();

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function loadProdutos() {
            const response = await api.get("/api/produtos");
            setProdutos(response.data);
        }
        loadProdutos();
    }, [])

    async function handleDelete(desc) {
        if (window.confirm('Deseja realmente excluir o produto ' + desc + '?')) {
            var result = await api.delete('/api/produtos-delete/' + desc);
            if (result.status == 200) {
                window.location.href = '/admin/produtos';
                alert(desc + ' Excluído com Sucesso!');
            } else {
                alert('Ocorreu um erro, por favor tente novamente!');
            }
        }
    }

    return (
        <div className={classes.root}>
            <MenuAdmin title={'PRODUTOS'} />
            < main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Button style={{ marginBottom: 15, marginRight: 8 }} variant="contained" href='/admin/'> Voltar</Button>
                            <Button style={{ marginBottom: 15 }} variant="contained" color="primary" href='/admin/produtos/cadastrar/'> Cadastrar</Button>
                            <Paper className={classes.paper}>
                                <h2>Listagem de Produtos</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Descrição</TableCell>
                                                        <TableCell align="center">Preço R$</TableCell>
                                                        <TableCell align="center">Estoque Mínimo</TableCell>
                                                        <TableCell align="center">Opções</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {produtos.map((row) => (
                                                        <TableRow key={row.descricao}>
                                                            <TableCell component="th" scope="row">
                                                                {row.descricao}
                                                            </TableCell>
                                                            <TableCell align="center">{row.preco}</TableCell>
                                                            <TableCell align="center">{row.estoqueMin}</TableCell>
                                                            <TableCell align="center">
                                                                <ButtonGroup aria-label="outlined primary button group">
                                                                    <Button color="primary" href={'/admin/produtos/editar/' + row.descricao}>Atualizar</Button>
                                                                    <Button color="secondary" onClick={() => handleDelete(row.descricao)}>Excluir</Button>
                                                                </ButtonGroup>

                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
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
        </div >
    );
}