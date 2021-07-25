import React from 'react';

//import Inicio from './pages/client/painel';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;



// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import api from './services/api';



// class ProdutosCadastrar extends Component {

//   state = {
//     produtos: [],
//   }

//   async componentDidMount() {
//     const response = await api.get('/api/produtos');

//     this.setState({ produtos: response.data });
//   }

//   render() {

//     const { produtos } = this.state;

//     return (
//       <div>
//         <h1>Cadastro de Produtos</h1>

//         {console.log(produtos)}

//         {produtos.map(produto => (
//           <li key={produto.descricao}>
//             <h2>Descrição: </h2>
//             {produto.descricao}
//           </li>
//         ))}
//       </div>
//     );

//   };


// };
// export default ProdutosCadastrar;





