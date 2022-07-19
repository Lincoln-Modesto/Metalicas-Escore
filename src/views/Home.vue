<template>
  <div class="home">
    <header class="py-5 row">
      <div class="header py-5">
        <div class="logo d-flex justify-content-center mb-2">
          <img src="../assets/imgs/logo-if.png" alt="logo-ifs" class="logo-img">
          <img src="../assets/imgs/logo.png" alt="logo-metalica-escore" class="logo-img">
        </div>
        <h1 class="title">Metalica Escore</h1>
        <p>Aplicação web para cálculo e dimensionamento de escoramento de escoras metálicas</p>
        <p>Desenvolvida por Davyson Santos para a defesa de TCC2 do curso de bacharelado em Engenharia Civil - Instituto Federal de Sergipe (Câmpus Estância)</p>
        <router-link to="#calcular">
          <button type="button" class="btn btn-lg btn-success">Calcular</button>
        </router-link>
      </div>
    </header>
    <main class="container-app">
      <section class="py-5 my-3 px-3 row">
        <h3 class="mb-3"><b>A aplicação</b></h3>
        <p>Na construção civil, ao falar de desafios ou dificuldades no quesito dimensionamento e execução,
          pode-se citar o cimbramento de estruturas como uma etapa que necessita de inovações no que diz respeito a
          racionalidade, sustentabilidade e segurança.
          <br>
          <br>
          Sendo assim, o engenheiro precisa utilizar materiais com a finalidade de garantir que essas três
          características
          estejam presentes em seu projeto.
          O emprego de cimbramento metálico assegura esses três fatores na obra, uma vez que esse tipo de material pode
          garantir melhor acabamento,
          redução do tempo e precisão na execução e elevada capacidade de carga dispensando grandes deformações,
          garantindo, assim, a segurança na obra.
        </p>
        <div class="d-flex justify-content-between mt-3 align-items-center row w-full aplication">
          <div class="col">
            <p>Metalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas
              EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas
              Escore Metalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas
              EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas Escore</p>
            <br>
            <p>Metalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas
              EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas
              Escore Metalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas
              EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas Escore</p>
          </div>
          <div class="ms-5 d-flex justify-content-center align-items-end flex-column col aplication-img">
            <div class="text-center d-flex justify-content-center flex-column align-items-center">
              <img src="../assets/imgs/escoramento.png" class="img-escoramento" alt="escoramento" />
              <span class="text-center mt-2">Fonte: Mills, 2016, adaptado.</span>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 my-3 px-3 row" id="calcular">
        <h3><b>Cálculo</b></h3>
        <p>Metalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas
          EscoreMetalicas EscoreMetalicas EscoreMetalicas Escore Metalicas EscoreMetalicas EscoreMetalicas
          EscoreMetalicas
          EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas EscoreMetalicas Escore</p>
        <div class="form-inputs mt-5 d-flex row">
          <div class="me-5 col mt-4">
            <h5 class="mb-4">Parâmetros estruturais</h5>
            <div class="d-flex justify-content-start align-items-center row">
              <BaseInput title="Pé direito (m)" v-model="state.peDireito" class="me-5 col mt-2" />
              <BaseInput title="Capeamento (cm)" v-model="state.capeamento" class="col mt-2"/>
            </div>
          </div>
          <div class="col mt-4">
            <h5 class="mb-4">Distâncias</h5>
            <div class="d-flex justify-content-start align-items-center row">
              <BaseInput title="Largura da laje (m)" v-model="state.largura" class="me-5 col mt-2" />
              <BaseInput title="Comprimento da Laje (m)" v-model="state.comprimento" class="col mt-2"/>
            </div>
          </div>
        </div>
        <div>
          <button type="button" @click="handleCalc" class="btn btn-success mt-4">Calcular</button>
        </div>
      </section>
      <section class="py-5 my-3 px-3 row" v-if="state.escoraResultante[0].nome">
        <h3 class="mb-3"><b>Resultados</b></h3>
        <div class="d-flex justify-content-between align-items-start row resultados">
          <div class="col resultados-container">
            <div class="d-flex mt-5">
              <div>
                <h5>Cargas</h5>
                <div class="d-flex justify-content-center align-items-start flex-column">
                  <span>Peso: <b>{{ state.pesoProprio.toFixed(2) }} kn/m³</b></span>
                  <span>Peso Próprio Majorado: <b>{{ state.pesoProprioMajorado.toFixed(2) }} kn/m³</b></span>
                </div>
              </div>
              <div class="mx-5">
                <h5>Escora Selecionada</h5>
                <div class="d-flex justify-content-center align-items-start flex-column">
                  <span>Nome: <b>{{ state.escoraResultante[0].nome }}</b></span>
                  <span>Carga Admissível: <b>{{ state.escoraResultante[0].carga_adimissivel.toFixed(2) }}
                      kg/m²</b></span>
                  <span>Carga Minorada: <b>{{ state.escoraResultante[0].carga_minorada.toFixed(2) }} kg/m²</b></span>
                  <span>Peso: <b>{{ state.escoraResultante[0].peso }} Kg</b></span>
                </div>
              </div>
            </div>
            <button class="btn btn-success mt-4">Gerar Relatório</button>
          </div>
          <div class="d-flex justify-content-center flex-column align-items-center col">
            <h3><b>{{ state.escoraResultante[0].nome }}</b></h3>
            <div class="d-flex justify-content-center align-items-center imgs-escoras row">
              <img :src="require('../assets/imgs/' + state.escoraResultante[0].path + '/img1.png')"
                alt="escora selecionada 1" class="col">
              <img :src="require('../assets/imgs/' + state.escoraResultante[0].path + '/img2.png')"
                alt="escora selecionada 2" class="col">
              <img :src="require('../assets/imgs/' + state.escoraResultante[0].path + '/img3.png')"
                alt="escora selecionada 3" class="col">
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div class="text-center d-flex justify-content-center flex-column align-items-center my-3">
        <img src="../assets/imgs/logo.png" alt="logo-metalica-escore" class="logo-img">
        <h2 class="title">Metalica Escore</h2>
      </div>
      <div class="d-flex justify-content-center align-items-center mt-5">
        <div class="mx-5 d-flex flex-column align-items-center">
          <h4>Davyson Santos</h4>
          <a href="" target="_blank" class="d-flex">
            Linkedin
            <img src="../assets/imgs/linkedIn.png" class="social-img" alt="Linkedin Davyson Santos">
          </a>
        </div>
        <!-- <div class="mx-5">
          <h4>Lincoln Modesto</h4>
          <div class="d-flex justify-content-center align-items-center">
            <a href="https://www.linkedin.com/in/lincoln-modesto/" target="_blank" class="d-flex me-3">
              Linkedin
              <img src="../assets/imgs/linkedIn.png" class="social-img" alt="Linkedin Lincoln Modesto">
            </a>
            <a href="https://github.com/Lincoln-Modesto" target="_blank" class="d-flex">
              Github
              <img src="../assets/imgs/github.png" class="social-img" alt="Github Lincoln Modesto">
            </a>
          </div>
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import BaseInput from '@/components/BaseInput.vue'
import { EscoraDTO } from '@/types/escoras.dto'
import { useToast } from 'vue-toastification'

const peso_proprio_concreto = 25 //kn/m³
const cargas_adicionais = 7.627 //kn/m²

const escoras: Array<EscoraDTO> = [{
  nome: 'Escoraço',
  path: 'escoraco',
  carga_adimissivel: 0,
  carga_minorada: 0,
  peso: 13.58
},
{
  nome: 'Escoraço II',
  carga_adimissivel: 0,
  path: 'escoraco_2',
  carga_minorada: 0,
  peso: 18.41
},
{
  nome: 'Escora 2T',
  path: 'escora_2t',
  carga_adimissivel: 0,
  carga_minorada: 0,
  peso: 17.80
},
{
  nome: 'Escora Deck',
  path: 'escora_deck',
  carga_adimissivel: 0,
  carga_minorada: 0,
  peso: 25.77
},
{
  nome: 'Escora Pa',
  path: 'escora_pa',
  carga_adimissivel: 0,
  carga_minorada: 0,
  peso: 17.08
},
{
  nome: 'Escora Pb',
  path: 'escora_pb',
  carga_adimissivel: 0,
  carga_minorada: 0,
  peso: 22.80
}]

export default defineComponent({
  components: {
    BaseInput
  },
  setup() {
    const toast = useToast()

    const state = reactive({
      peDireito: '',
      capeamento: '',
      largura: '',
      comprimento: '',
      escoraResultante: [{} as EscoraDTO],
      pesoProprio: 0,
      pesoProprioMajorado: 0
    })

    function handleCalc() {

      if (
        state.peDireito === '' ||
        state.capeamento === '' ||
        state.largura === '' ||
        state.comprimento === ''
      ) {
        toast.error('Por favor, preencha todos os valores!')
        return
      }

      if (
        Number(state.capeamento) < 0 ||
        Number(state.peDireito) < 0 ||
        Number(state.comprimento) < 0 ||
        Number(state.largura) < 0
      ) {
        toast.error('Por favor, os nenhum valor pode ser um número negativo!')
        return
      }

      handleCargaEscora()
      handleCargaAtuante()
    }

    function handleCargaEscora() {
      const arr: Array<EscoraDTO> = escoras

      const escoraço = -285.71 * Number(state.peDireito) + 1885.70
      const escoraço_2 = -597.08 * Number(state.peDireito) + 2756.89
      const escora_2t = -416.666 * Number(state.peDireito) + 3250
      const escora_deck = -571.42 * Number(state.peDireito) + 4827.14
      const escora_pa = -447.15 * Number(state.peDireito) + 3253.23
      const escora_pb = -261.43 * Number(state.peDireito) + 2611.11

      const arrEscorasCarga = [
        { nome: 'Escoraço', value: escoraço },
        { nome: 'Escoraço II', value: escoraço_2 },
        { nome: 'Escora 2T', value: escora_2t },
        { nome: 'Escora Deck', value: escora_deck },
        { nome: 'Escora Pa', value: escora_pa },
        { nome: 'Escora Pb', value: escora_pb }]

      arr.map((item: EscoraDTO, i: number) => {
        arrEscorasCarga.forEach((EscoraCarga) => {
          if (item.nome === EscoraCarga.nome) {
            escoras[i] = {
              ...item,
              carga_adimissivel: EscoraCarga.value,
              carga_minorada: (EscoraCarga.value) / 1.5
            } as EscoraDTO
          }
        })
      })
    }

    function handleCargaAtuante() {
      state.pesoProprio = ((Number(state.capeamento) * 0.01) * peso_proprio_concreto) + (cargas_adicionais)

      state.pesoProprioMajorado = state.pesoProprio * 140 // kg/m²
      handleSelecionaEscora()
    }

    function handleSelecionaEscora() {
      const peso_escora: Array<number> = []

      const escoras_filtradas = escoras.filter((escora) => {
        if (escora.carga_minorada > state.pesoProprioMajorado) {
          peso_escora.push(escora.peso)
          return escora
        }
      })

      const value = Math.min(...peso_escora)
      const escora_selecionada = escoras_filtradas.filter((escora: EscoraDTO) => {
        return escora.peso === value
      })

      state.escoraResultante = [...escora_selecionada]
    }

    return {
      state,
      handleCalc
    }
  }
});
</script>

<style scoped>
a {
  text-decoration: none;
  transition: 0.5s all ease-in;
  color: #444;
}

a:hover {
  color: #222;
  text-decoration: underline;
}

.home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/*----------header----------- */

.logo-img {
  height: 100px;
  width: 107px;
}

header {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
}

.title {
  font-weight: 600;
  font-size: 3rem;
}

/*----------Main----------- */

.container-app {
  max-width: 1440px;
  width: 100%;
}

.img-escoramento {
  height: 385px;
  width: 403px;
}

.imgs-escoras img {
  width: 86px;
  height: 400px;
}

  @media (max-width: 927px){
    .aplication{
      flex-direction: column;
      padding: 0;
    }

    .aplication > div{ 
      padding: 0;
    }

    .aplication-img{
      align-items: center !important;
    }
  }

  @media (max-width: 825px){
    .resultados{
      flex-direction: column-reverse;
    }

    .resultados-container{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

/*----------Footer----------- */
footer {
  width: 100%;
  height: 300px;
  background-image: url('../assets/imgs/footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
}


.social-img {
  width: 24px;
  height: 24px;
  margin-left: 5px;
}
</style>