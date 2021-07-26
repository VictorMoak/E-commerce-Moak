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


export default function ClientesListagem() {
    const classes = useStyles();

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function loadClientes() {
            const response = await api.get("/api/clientes");
            setClientes(response.data);
        }
        loadClientes();
    }, [])

    async function handleDelete(nome) {
        if (window.confirm('Deseja realmente excluir o cliente ' + nome + '?')) {
            var result = await api.delete('/api/clientes/' + nome);
            if (result.status == 200) {
                window.location.href = '/admin/clientes';
                alert(nome + ' Excluído com Sucesso!');
            } else {
                alert('Ocorreu um erro, por favor tente novamente!');
            }
        }
    }

    return (
        <div className={classes.root}>
            <MenuAdmin title={'CLIENTES'} />
            < main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Button style={{ marginBottom: 15, marginRight: 8 }} variant="contained" href='/admin/'> Voltar</Button>
                            <Button style={{ marginBottom: 15 }} variant="contained" color="primary" href='/admin/clientes/cadastrar/'> Cadastrar</Button>
                            <Paper className={classes.paper}>
                                <h2>Listagem de Clientes</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Nome Completo</TableCell>
                                                        <TableCell align="center">CPF</TableCell>
                                                        <TableCell align="center">Data de Nascimento</TableCell>
                                                        <TableCell align="center">CEP</TableCell>
                                                        <TableCell align="center">Logradouro</TableCell>
                                                        <TableCell align="center">Bairro</TableCell>
                                                        <TableCell align="center">Cidade</TableCell>
                                                        <TableCell align="center">UF</TableCell>
                                                        <TableCell align="center">Opções</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {clientes.map((row) => (
                                                        <TableRow key={row.nome}>
                                                            <TableCell component="th" scope="row">
                                                                {row.nome}
                                                            </TableCell>
                                                            <TableCell align="center">{row.cpf}</TableCell>
                                                            <TableCell align="center">{row.dt_nascimento}</TableCell>
                                                            <TableCell align="center">{row.cep}</TableCell>
                                                            <TableCell align="center">{row.logradouro}</TableCell>
                                                            <TableCell align="center">{row.bairro}</TableCell>
                                                            <TableCell align="center">{row.cidade}</TableCell>
                                                            <TableCell align="center">{row.uf}</TableCell>
                                                            <TableCell align="center">
                                                                <ButtonGroup aria-label="outlined primary button group">
                                                                    <Button color="primary" href={'/admin/clientes/editar/' + row.nome}>Atualizar</Button>
                                                                    <Button color="secondary" onClick={() => handleDelete(row.nome)}>Excluir</Button>
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