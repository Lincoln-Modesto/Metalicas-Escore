<template>
  <div class="home">
    <header class="py-5 row">
      <div class="header py-5">
        <div class="logo d-flex justify-content-center mb-2">
          <img
            src="../assets/imgs/logo-if.png"
            alt="logo-ifs"
            class="logo-img"
          />
          <img
            src="../assets/imgs/logo.png"
            alt="logo-metalica-escore"
            class="logo-img"
          />
        </div>
        <h1 class="title">Metalica Escore</h1>
        <p>
          Aplicação web para cálculo e dimensionamento de escoramento de escoras
          metálicas
        </p>
        <p>
          Desenvolvida em conjunto por Davyson Santos, Lincoln Modesto e Thiago Remacre para a defesa de TCC2 
          do discente Davyson Santos no curso de bacharelado em Engenharia Civil 
          - Instituto Federal de Sergipe (Câmpus Estância)
        </p>
        <router-link to="#calcular">
          <button type="button" class="btn btn-lg btn-success">Calcular</button>
        </router-link>
      </div>
    </header>
    <main class="container-app">
      <section class="py-5 my-3 px-3 row">
        <h2 class="mb-3"><b>A aplicação</b></h2>
        <p>
          Na construção civil, ao falar de desafios ou dificuldades no quesito
          dimensionamento e execução, pode-se citar o cimbramento de estruturas
          como uma etapa que necessita de inovações no que diz respeito a
          racionalidade, sustentabilidade e segurança.
          <br />
          <br />
          Sendo assim, o engenheiro precisa utilizar materiais com a finalidade
          de garantir que essas três características estejam presentes em seu
          projeto. O emprego de cimbramento metálico assegura esses três fatores
          na obra, uma vez que esse tipo de material pode garantir melhor
          acabamento, redução do tempo e precisão na execução e elevada
          capacidade de carga dispensando grandes deformações, proporcionando
          mais segurança a obra.
        </p>
        <div
          class="
            d-flex
            justify-content-between
            mt-3
            align-items-center
            row
            w-full
            aplication
          "
        >
          <div class="col">
            <p>
              A aplicação Metalicas Escore entra como uma ferramenta de ajuda no
              dimensionamento desses elementos estruturais. Com ela é possível
              validar e escolher dentre as escoras selecionadas, a que mais se
              adequa a situação encontrada em campo, considerando a segurança e
              racionalidade. Assim, a aplicação Metálicas escore tem a
              capacidade de escolher a escora, avaliar se ela é capaz de
              suportar o carregamento da laje e otimizar a utilização por
              escolher as escoras em ordem crescente de peso,ou seja, a
              aplicação sempre optará, desde que garantida o suporte de carga,
              pela escora mais leve afim de diminuir o peso desses elementos
              sobre a estrutura da edificação.
            </p>
            <br />
            <p>
              Portanto, a aplicação Meálicas Escore, tem por função auxiliar o
              engenheiro civil a dimensionar de maneira simples e adequada a
              alocação do seu escoramento metálico em lajes maciças e treliçadas
            </p>

            <p>
              Todas as escoras analisadas e calculadas são da fabricante
              <a href="https://www.mills.com.br/" target="_blank"
                ><b>Mills</b></a
              >
            </p>
          </div>
          <div
            class="
              ms-5
              d-flex
              justify-content-center
              align-items-end
              flex-column
              col
              aplication-img
            "
          >
            <div
              class="
                text-center
                d-flex
                justify-content-center
                flex-column
                align-items-center
              "
            >
              <img
                src="../assets/imgs/escoramento.png"
                class="img-escoramento"
                alt="escoramento"
              />
              <span class="text-center mt-2"
                >Fonte: Mills, 2016, adaptado.</span
              >
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 my-3 px-3 row" id="calcular">
        <h2><b>Cálculo</b></h2>
        <p>
          O cálculo do dimensionamento da estrutura de escoramento metálico
          feito pela aplicação obedecerá as condições encontradas na
          <b
            >ABNT NBR 15696 - Fôrmas e escoramentos para estruturas de concreto
            – projeto, dimensionamento e procedimentos executivos</b
          >, bem como a
          <b
            >NBR 8800 – Projeto de estruturas de aço e de estruturas mista de
            aço e concreto de edifícios (2008).
          </b>
          Os parâmetros a serem considerados para o dimensionamento serão o pé
          direto da edificação (metros), capeamento (centímetros) e dimensões da
          laje (metros). O pé direito influenciará diretamente na capacidade de
          carga das escoras e o capeamento no peso próprio da estrutura, já as
          dimensões da laje servirão para a correta distribuição das escoras em
          toda área da estrutura.
        </p>

        <p>
          Por favor, preencha os campos abaixo e certifique-se de que as
          respectivas unidades estão corretas
        </p>
        <div class="form-inputs mt-5 d-flex row">
          <div class="me-5 mt-4">
            <h3>Tipo da laje:</h3>
            <div class="col-sm-5 d-flex align-items-center mt-5">
              <h5>Laje Treliçada</h5>
              <input type="checkbox" v-model="state.tipoLajeMacica" @change="tipoLaje" id="switch" /><label for="switch" class="mx-3" >Toggle</label>
              <h5>Laje Maciça</h5>
            </div>
          </div>
        </div>
        <div class="form-inputs mt-5 d-flex row">
          <div class="me-5 col mt-4">
            <h3 class="mb-4">Parâmetros estruturais</h3>
            <div class="d-flex justify-content-start align-items-center row">
              <BaseInput
                title="Pé direito (m)"
                v-model="state.peDireito"
                class="me-5 col mt-2"
              />
              <BaseInput
                :title="state.title"
                v-model="state.capeamento"
                class="col mt-2"
              />
            </div>
          </div>
          <div class="col mt-4">
            <h3 class="mb-4">Distâncias</h3>
            <div class="d-flex justify-content-start align-items-center row">
              <BaseInput
                title="Largura da laje (m)"
                v-model="state.largura"
                class="me-5 col mt-2"
              />
              <BaseInput
                title="Comprimento da Laje (m)"
                v-model="state.comprimento"
                class="col mt-2"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            @click="handleCalc"
            class="btn btn-success mt-4"
          >
            Calcular
          </button>
        </div>
      </section>
      <section
        class="py-5 my-3 px-3 row"
        v-if="state.escoraResultante[0].nome && !error"
      >
        <h2 class="mb-3"><b>Resultados</b></h2>
        <div
          class="
            d-flex
            justify-content-between
            align-items-start
            row
            resultados
          "
        >
          <div class="col resultados-container">
            <div class="d-flex mt-5">
              <div>
                <h5>Cargas</h5>
                <div
                  class="
                    d-flex
                    justify-content-center
                    align-items-start
                    flex-column
                  "
                >
                  <span
                    >Peso Próprio:
                    <b>{{ state.pesoProprio.toFixed(2) }} kgf/m²</b></span
                  >
                  <span
                    >Peso Próprio Majorado:
                    <b
                      >{{ state.pesoProprioMajorado.toFixed(2) }} kgf/m²</b
                    ></span
                  >
                </div>
              </div>
              <div class="mx-5">
                <h5>Escora Selecionada</h5>
                <div
                  class="
                    d-flex
                    justify-content-center
                    align-items-start
                    flex-column
                  "
                >
                  <span
                    >Nome: <b>{{ state.escoraResultante[0].nome }}</b></span
                  >
                  <span
                    >Carga Admissível:
                    <b
                      >{{
                        state.escoraResultante[0].carga_adimissivel.toFixed(2)
                      }}
                      kgf/m²</b
                    ></span
                  >
                  <span
                    >Carga Minorada:
                    <b
                      >{{
                        state.escoraResultante[0].carga_minorada.toFixed(2)
                      }}
                      kgf/m²</b
                    ></span
                  >
                  <span
                    >Peso: <b>{{ state.escoraResultante[0].peso }} Kg</b></span
                  >
                </div>
              </div>
            </div>
            <button @click="handlePdf" class="btn btn-success mt-4">
              Gerar Relatório
            </button>
          </div>
          <div
            class="
              d-flex
              justify-content-center
              flex-column
              align-items-center
              col
            "
          >
            <h3>
              <b>{{ state.escoraResultante[0].nome }}</b>
            </h3>
            <div
              class="
                d-flex
                justify-content-center
                align-items-center
                imgs-escoras
                row
              "
            >
              <img
                :src="
                  require('../assets/imgs/' +
                    state.escoraResultante[0].path +
                    '/img1.png')
                "
                alt="escora selecionada 1"
                class="col"
              />
              <img
                :src="
                  require('../assets/imgs/' +
                    state.escoraResultante[0].path +
                    '/img2.png')
                "
                alt="escora selecionada 2"
                class="col"
              />
              <img
                :src="
                  require('../assets/imgs/' +
                    state.escoraResultante[0].path +
                    '/img3.png')
                "
                alt="escora selecionada 3"
                class="col"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div
        class="
          text-center
          d-flex
          justify-content-center
          flex-column
          align-items-center
          my-3
        "
      >
        <img
          src="../assets/imgs/logo.png"
          alt="logo-metalica-escore"
          class="logo-img"
        />
        <h3 class="title">Metalica Escore</h3>
      </div>
      <div class="footer-content d-flex justify-content-center align-items-center mt-5">
        <div class="mx-5 d-flex flex-column align-items-center">
          <h4>Davyson Santos</h4>
          <a
            href="https://br.linkedin.com/in/davyson-santos-995344120?trk=prof-samename-picture"
            target="_blank"
            class="d-flex"
          >
            Linkedin
            <img
              src="../assets/imgs/linkedIn.png"
              class="social-img"
              alt="Linkedin Davyson Santos"
            />
          </a>
        </div>
        <div class="mx-5 d-flex flex-column align-items-center">
          <h4>Lincoln Modesto</h4>
          <div class="d-flex justify-content-center align-items-center">
            <a
              href="https://www.linkedin.com/in/lincoln-modesto/"
              target="_blank"
              class="d-flex me-3"
            >
              Linkedin
              <img
                src="../assets/imgs/linkedIn.png"
                class="social-img"
                alt="Linkedin Lincoln Modesto"
              />
            </a>
            <a
              href="https://github.com/Lincoln-Modesto"
              target="_blank"
              class="d-flex"
            >
              Github
              <img
                src="../assets/imgs/github.png"
                class="social-img"
                alt="Github Lincoln Modesto"
              />
            </a>
          </div>
        </div>
        <div class="mx-5 d-flex flex-column align-items-center">
          <h4>Eng. D.S.c Thiago Remacre</h4>
          <a
            href="https://www.linkedin.com/in/thiago-a-remacre-munareto-lima-40334a32"
            target="_blank"
            class="d-flex"
          >
            Linkedin
            <img
              src="../assets/imgs/linkedIn.png"
              class="social-img"
              alt="Linkedin Davyson Santos"
            />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" >
import { defineComponent, reactive, ref } from "vue";
import { EscoraDTO } from "@/types/escoras.dto";
import { useToast } from "vue-toastification";
import { jsPDF } from "jspdf";
import { lajesImgs } from "@/utils/base64Files";
/* eslint-disable */
//@ts-ignore
import { escorasImg } from "@/utils/base64FilesEscoras";
/* eslint-disable */
import BaseInput from "@/components/BaseInput.vue";

const peso_proprio_concreto = 25; //kn/m³
const cargas_adicionais = 7.627; //kn/m²

const escoras: Array<EscoraDTO> = [
  {
    nome: "Escoraço",
    path: "escoraco",
    carga_adimissivel: 0,
    carga_minorada: 0,
    peso: 13.58,
  },
  {
    nome: "Escoraço II",
    carga_adimissivel: 0,
    path: "escoraco_2",
    carga_minorada: 0,
    peso: 18.41,
  },
  {
    nome: "Escora 2T",
    path: "escora_2t",
    carga_adimissivel: 0,
    carga_minorada: 0,
    peso: 17.8,
  },
  {
    nome: "Escora Deck",
    path: "escora_deck",
    carga_adimissivel: 0,
    carga_minorada: 0,
    peso: 25.77,
  },
  {
    nome: "Escora Pa",
    path: "escora_pa",
    carga_adimissivel: 0,
    carga_minorada: 0,
    peso: 17.08,
  },
  {
    nome: "Escora Pb",
    path: "escora_pb",
    carga_adimissivel: 0,
    carga_minorada: 0,
    peso: 22.8,
  },
];

export default defineComponent({
  components: {
    BaseInput,
  },
  setup() {
    const toast = useToast();

    const state = reactive({
      peDireito: "",
      capeamento: "",
      largura: "",
      comprimento: "",
      escoraResultante: [{} as EscoraDTO],
      pesoProprio: 0,
      pesoProprioMajorado: 0,
      numeroDeEscorasLargura: 0,
      numeroDeEscorasComprimento: 0,
      distanciaEntreEscoras: 0,
      tipoLajeMacica: false,
      title: "Capeamento (cm)",
    });
    const error = ref(false);
    const escoraço = -285.71 * Number(state.peDireito) + 1885.7;
    const escoraço_2 = -291.29 * Number(state.peDireito) + 2010.67;
    const escora_2t = -416.666 * Number(state.peDireito) + 3250;
    const escora_deck = -571.42 * Number(state.peDireito) + 4827.14;
    const escora_pa = -447.15 * Number(state.peDireito) + 3253.23;
    const escora_pb = -261.43 * Number(state.peDireito) + 2611.11;
    const arrEscorasCarga = [
      { nome: "Escoraço", value: escoraço, alias: "Escoraço" },
      { nome: "Escoraço II", value: escoraço_2, alias: "Escoraço_II" },
      { nome: "Escora 2T", value: escora_2t, alias: "Escora_2T" },
      { nome: "Escora Deck", value: escora_deck, alias: "Escora_Deck" },
      { nome: "Escora Pa", value: escora_pa, alias: "Escora_Pa" },
      { nome: "Escora Pb", value: escora_pb, alias: "Escora_Pb" },
    ];

    function tipoLaje(): void {
      state.tipoLajeMacica ? state.title = "Espessura (cm)" : state.title = "Capeamento (cm)"
    }

    function handleCalc(): void {
      if (
        state.peDireito === "" ||
        state.capeamento === "" ||
        state.largura === "" ||
        state.comprimento === ""
      ) {
        toast.error("Por favor, preencha todos os valores!");
        return;
      }

      if (
        Number(state.capeamento) < 0 ||
        Number(state.peDireito) < 0 ||
        Number(state.comprimento) < 0 ||
        Number(state.largura) < 0
      ) {
        toast.error("Nenhum valor pode ser um número negativo!");
        return;
      }

      if (Number(state.peDireito) > 4.5) {
        toast.error("O pé direito máximo é de 4.5 metros!");
        return;
      }

      if (Number(state.peDireito) < 1.7) {
        toast.error("O pé direito mínimo é de 1.7 metros!");
        return;
      }

      if (Number(state.comprimento) > 5 || Number(state.largura) > 5) {
        toast.error("Comprimento e largura máximos são de até 5 metros");
        return;
      }

      handleCargaEscora();
      handleCargaAtuante();
      handleDistancias();
    }

    function handleCargaEscora(): void {
      const arr: Array<EscoraDTO> = escoras;

      arr.map((item: EscoraDTO, i: number) => {
        arrEscorasCarga.forEach((EscoraCarga) => {
          if (item.nome === EscoraCarga.nome) {
            escoras[i] = {
              ...item,
              carga_adimissivel: EscoraCarga.value,
              carga_minorada: EscoraCarga.value / 1.5,
            } as EscoraDTO;
          }
        });
      });
    }

    function handleCargaAtuante(): void {
      state.pesoProprio =
        (Number(state.capeamento) * 0.01 * peso_proprio_concreto +
          cargas_adicionais) *
        100;

      state.pesoProprioMajorado = state.pesoProprio * 1.4; // kg/m²
      handleSelecionaEscora();
    }

    function handleSelecionaEscora(): void {
      const peso_escora: Array<number> = [];

      const escoras_filtradas = escoras.filter((escora) => {
        if (escora.carga_minorada > state.pesoProprioMajorado) {
          peso_escora.push(escora.peso);
          return escora;
        }
      });

      /* eslint-disable */
      //@ts-ignore
      const value = Math.min(...peso_escora);
      /* eslint-disable */
      const escora_selecionada = escoras_filtradas.filter(
        (escora: EscoraDTO) => {
          return escora.peso === value;
        }
      );

      state.escoraResultante = [...escora_selecionada];

      if (state.escoraResultante.length === 0) {
        error.value = true;
        toast.error(
          "Os valores fornecidos não estão dentro dos limites aceitos"
        );
        return;
      }
    }

    function handleDistancias(): void {
      state.numeroDeEscorasComprimento = Number(state.comprimento) / 1.3;
      state.numeroDeEscorasLargura = Number(state.largura) / 1.3;

      if (state.comprimento > state.largura) {
        state.distanciaEntreEscoras =
          Number(state.comprimento) / state.numeroDeEscorasComprimento;
      } else {
        state.distanciaEntreEscoras =
          Number(state.largura) / state.numeroDeEscorasLargura;
      }
    }

    function handlePdf(): void {
      const qtdEscoras = {
        laje1x1: 1,
        laje1x2: 2,
        laje1x3: 3,
        laje1x4: 4,
        laje1x5: 5,
        laje2x2: 4,
        laje2x3: 6,
        laje2x4: 8,
        laje2x5: 10,
        laje3x3: 9,
        laje3x4: 12,
        laje3x5: 15,
        laje4x4: 16,
        laje4x5: 20,
        laje5x5: 25,
      };

      let x = 0;
      let y = 0;

      if (
        Math.round(Number(state.comprimento)) >=
        Math.round(Number(state.largura))
      ) {
        y = Math.round(Number(state.comprimento));
        x = Math.round(Number(state.largura));
      } else {
        y = Math.round(Number(state.largura));
        x = Math.round(Number(state.comprimento));
      }

      const propLaje = `laje${x}x${y}`;
      const lajeImgArr = Object.values(lajesImgs).filter(
        (laje) => laje.name === propLaje
      );
      const lajeImg = lajeImgArr[0]();

      const escoraAlias = arrEscorasCarga.filter(
        (escora) => escora.nome === state.escoraResultante[0].nome
      );

      /* eslint-disable */
      const EscoraImgArr = Object.values(escorasImg).filter(
        //@ts-ignore
        (escora) => escora.name === escoraAlias[0].alias
      );
      //@ts-ignore
      const escoraImg = EscoraImgArr[0]();
      /* eslint-disable */

      const numEscora = (qtdEscoras as any)[propLaje];

      const doc = new jsPDF();

      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text("Resultados e detalhamento", 20, 20);

      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Dados do usuário", 20, 40);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Pé direito:", 20, 50);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.peDireito} metros`, 45, 50);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text(`${state.title.replace(' (cm)', "")}`, 20, 60);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.capeamento} centímetros`, 53, 60);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Comprimento:", 100, 50);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.comprimento} metros`, 135, 50);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Largura:", 100, 60);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.largura} metros`, 120, 60);

      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Cargas", 20, 80);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Peso próprio:", 20, 90);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.pesoProprio.toFixed(2)} kgf/m²`, 52, 90);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("peso próprio Majorado:", 20, 100);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.pesoProprioMajorado.toFixed(2)} kgf/m²`, 73, 100);

      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Escora Selecionada", 20, 120);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Nome:", 20, 130);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.escoraResultante[0].nome}`, 38, 130);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Número de escoras:", 120, 130);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${numEscora}`, 165, 130);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Carga admissível:", 20, 140);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(
        `${state.escoraResultante[0].carga_adimissivel.toFixed(2)} kgf/m²`,
        63,
        140
      );

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Distância entre escoras:", 120, 140);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.distanciaEntreEscoras} metros`, 175, 140);

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Carga minorada:", 20, 150);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(
        `${state.escoraResultante[0].carga_minorada.toFixed(2)} kgf/m²`,
        60,
        150
      );

      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Peso:", 20, 160);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`${state.escoraResultante[0].peso} kg`, 38, 160);

      // doc.addImage(escora1 as  any, "PNG", 50, 180, 21, 100);
      // doc.addImage(escora2 as  any, "PNG", 20, 180, 21, 100);
      // doc.addImage(escora3 as  any, "PNG", 80, 180, 21, 100);

      // doc.addPage("a4");
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Croqui:", 20, 170);
      doc.addImage(lajeImg as any, "PNG", 20, 175, 80, 110);
      doc.addImage(escoraImg as any, "PNG", 140, 155, 40, 130);

      doc.save("Metalicas Escore - Resultados e detalhamento.pdf");
    }

    return {
      state,
      handleCalc,
      handlePdf,
      tipoLaje,
      error,
    };
  },
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
  overflow-x: hidden;
  background-color: #fff;
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

@media (max-width: 927px) {
  .aplication {
    flex-direction: column;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x));
    padding-left: calc(var(--bs-gutter-x));
  }

  .aplication > div {
    padding: 0;
  }

  .aplication-img {
    align-items: center !important;
    margin: 0 !important;
  }
}

@media (max-width: 825px) {
  .resultados {
    flex-direction: column-reverse;
  }

  .resultados-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

/*----------Toggle----------- */

input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 80px;
	height: 40px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	width: 30px;
	height: 30px;
	background: #fff;
	border-radius: 90px;
	transition: 0.3s;
}

input:checked + label {
	background: #198754;
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 130px;
}

/*----------Footer----------- */
footer {
  width: 100%;
  height: 300px;
  background-image: url("../assets/imgs/footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 500px) {
  .title {
    font-weight: 600;
    font-size: 2rem;
  }

  .logo-img {
    zoom: 0.7;
  }

  .img-escoramento {
    zoom: 0.7;
  }
}

@media (max-width: 986px) {
  footer {
    height: 470px;
  }

  .footer-content{
    flex-direction: column;
    margin-top: 20px !important;
  }

  .footer-content div {
    margin: 10px 0;
    text-align: center;
  }
}

.social-img {
  width: 24px;
  height: 24px;
  margin-left: 5px;
}
</style>