import "../../styles/index.css";
import "../../styles/styles.css";
import { AiOutlineCopy } from "react-icons/ai";

export function NaoIntegracao(props) {
  async function copy() {
    const copyElement = document.getElementById("copy");
    const range = document.createRange();
    range.selectNode(copyElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      const successful = document.execCommand("copy");
      const message = successful
        ? "Texto copiado com sucesso!"
        : "Falha ao copiar o texto.";
      alert(message);
    } catch (err) {
      console.error("Erro ao copiar o texto:", err);
    }

    window.getSelection().removeAllRanges();
  }
  return (
    <div className="w-full h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="animateCard bgScriptEx overflow-hidden flex flex-col relative w-[75vw] h-[73vh] m-auto text-center border-t-[1px] border-b-[2px] border-r-[3px] border-l-[4.5px] border-black/80 rounded-lg p-3 sm:h-[590px] md:h-[590px] sm:w-[350px] tall:h-[67vh]">
        <div className="flex flex-col items-center justify-center flex-1 h-[100%] ">
          <h1 className="ml-6 font-black [font-size:23px] text-center [letter-spacing:2px] underline [line-height:20px] absolute top-5 tall:absolute tall:top-0 tall:text-[12px] md:text-[14px] sm:text-[12px]">
            {props.title}
            <h3 className="text-[14px] font-light text-white mt-3 tall:mt-0 animate-bounce no-underline">
              (*Abrir demanda somente com o titular)
            </h3>
          </h1>
          <h2
            id="copy"
            className="font-bold absolute top-[8vh] [font-size:15px] [letter-spacing:1px] w-[750px] sm:w-[230px] sm:font-normal md:w-[330px] tall:text-[10px] md:text-[12px] sm:text-[10px]"
          >
            {props.script}
            <br />
            <br />
            <p>Dados para abertura da ocorrência:</p>
            <div className="flex flex-col text-left font-light text-[12px] [line-height:17px] tall:[line-height:11px] tall:text-[9px] md:text-[10px] md:text-center sm:text-[7px]">
              <br />
              <br />
              <p>Nome do Usuário:</p>
              <p>Nº do CPF:</p>
              <p>Nº do Cartão:</p>
              <p>Data e Horário da não integração:</p>
              <p>
                -------------------------------------------------------------
              </p>
              <p>
                Forma de Ressarcimento: (Recarga no cartão ou Conta Corrente/
                Poupança)
              </p>
              <p>Banco:</p>
              <p>Agência:</p>
              <p>Conta:</p>
              <p>
                -------------------------------------------------------------
              </p>
              <p>Endereço:</p>
              <p>Bairro:</p>
              <p>Município:</p>
              <p>Cep:</p>
              <p>Rua/av:</p>
              <p>Número:</p>
              <p>Complemento:</p>
              <p>Referencia:</p>
            </div>
          </h2>
          <h3 className="absolute bottom-4 tall:text-[12px]">{props.path}</h3>
          <span
            className="absolute  animate-pulse bottom-3 right-3 cursor-pointer"
            onClick={() => {
              copy();
            }}
          >
            <AiOutlineCopy className="w-9 h-9" />
          </span>
        </div>
      </div>
    </div>
  );
}
