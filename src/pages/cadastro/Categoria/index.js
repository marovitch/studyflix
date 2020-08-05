import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
      nome:'',
      descricao:'',
      cor:'',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]:valor, //nome: 'valor'
      })
    }

    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }

    useEffect(() => {
      console.log("aloalo");

      const URL_TOP = 'http://localhost:3000/categorias';

      fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      })

/*     setTimeout(() => {
        setCategorias([
          ...categorias,
        {
              "id": 1,
              "nome": "Front end",
              "descricao": "Uma categoria show",
              "cor": "#cbd1ff"
            },
            {
              "id": 2,
              "nome": "Back end",
              "descricao": "Outra categoria show",
              "cor": "#cbd1ff"
            },
        ]);
      }, 4 * 1000); */
    }, [ ]);


    return (
      <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais);
      }}>

      <FormField
        label = "Nome da Categoria"
        type = "text"
        name = "nome"
        value = {values.nome}
        onChange = {handleChange}
      />


      <FormField as="textarea"
        label = "Descrição"
        type = "textarea"
        name = "descricao"
        value = {values.descricao}
        onChange = {handleChange}
      />
        <FormField
        label = "Cor"
        type = "color"
        name = "cor"
        value = {values.cor}
        onChange = {handleChange}
      />

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>
          Carregando...
        </div>
      )}

      <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria.nome}`}>
                {categoria.nome}
              </li>
            )
          })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;