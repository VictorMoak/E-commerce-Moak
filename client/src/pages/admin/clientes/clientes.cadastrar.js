import React, { useState } from 'react';
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
        paddingTop: theme.spacing(2),
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

export default function ClienteCadastrar() {
    const classes = useStyles();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dt_nascimento, setDtNasc] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    async function handleSubmit() {
        const dados = { nome: nome, cpf: cpf, dt_nascimento: dt_nascimento,
            cep: cep, logradouro: logradouro, bairro: bairro, cidade: cidade, uf: uf}
        console.log(dados)
        const response = await api.post('/api/addclientes', dados)

        if (response.status === 200) {
            window.location.href = '/admin/clientes'
        } else {
            alert('Erro ao cadastrar cliente.')
        }
    }

    return (
        <div className={classes.root}>

            <MenuAdmin title={'CLIENTES'} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Button style={{ marginBottom: 15 }} variant="contained" href='/admin/clientes/'> Voltar</Button>
                            <Paper className={classes.paper}>
                                <h2>Cadastro de Clientes</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="nome"
                                            name="nome"
                                            label="Nome Completo"
                                            fullWidth
                                            autoComplete="nome"
                                            value={nome}
                                            onChange={e => setNome(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField
                                            required
                                            id="cpf"
                                            name="cpf"
                                            label="CPF"
                                            fullWidth
                                            autoComplete="cpf"
                                            value={cpf}
                                            onChange={e => setCpf(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField
                                            required
                                            type="date"
                                            id="dt_nascimento"
                                            name="dt_nascimento"
                                            label="Data de Nascimento"
                                            fullWidth
                                            autoComplete="dt_nascimento"
                                            value={dt_nascimento}
                                            onChange={e => setDtNasc(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            required
                                            id="cep"
                                            name="cep"
                                            label="CEP"
                                            fullWidth
                                            autoComplete="cep"
                                            value={cep}
                                            onChange={e => setCep(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <TextField
                                            required
                                            id="logradouro"
                                            name="logradouro"
                                            label="Logradouro"
                                            fullWidth
                                            autoComplete="logradouro"
                                            value={logradouro}
                                            onChange={e => setLogradouro(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={5}>
                                        <TextField
                                            required
                                            id="bairro"
                                            name="bairro"
                                            label="Bairro"
                                            fullWidth
                                            autoComplete="bairro"
                                            value={bairro}
                                            onChange={e => setBairro(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={5}>
                                        <TextField
                                            required
                                            id="cidade"
                                            name="cidade"
                                            label="Cidade"
                                            fullWidth
                                            autoComplete="cidade"
                                            value={cidade}
                                            onChange={e => setCidade(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <TextField
                                            required
                                            id="uf"
                                            name="uf"
                                            label="UF"
                                            fullWidth
                                            autoComplete="uf"
                                            value={uf}
                                            onChange={e => setUf(e.target.value)}
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