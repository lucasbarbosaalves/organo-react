import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
  ]

  const inicial = [
    {
      nome: 'Matheus Landuci',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/matheuslanduci.png',
      time: times[0].nome
    },
    {
      nome: 'Lucas Alves',
      cargo: 'Desenvolvedor Java',
      imagem: 'https://github.com/lucasbarbosaalves.png',
      time: times[0].nome
    },  {
      nome: 'Matheus Landuci',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/matheuslanduci.png',
      time: times[0].nome
    },
    {
      nome: 'Lucas Alves',
      cargo: 'Desenvolvedor Java',
      imagem: 'https://github.com/lucasbarbosaalves.png',
      time: times[0].nome
    },
    {
      nome: 'Luis Felipe Tomaz',
      cargo: 'Analista de dados',
      imagem: 'https://github.com/luisTomaz.png',
      time: times[2].nome
    }, 
    {
      nome: 'Luis Felipe Tomaz',
      cargo: 'Analista de dados',
      imagem: 'https://github.com/luisTomaz.png',
      time: times[2].nome
    }
  
  ]


  const [colaboradores, setColaboradores] = useState(inicial)


  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;