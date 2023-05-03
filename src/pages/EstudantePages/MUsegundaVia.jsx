import { NavBar } from "../../components/NavBar";
import { MsegundaVia } from "../../scripts/GT/estudante/MsegundaVia";
import { Footer } from "../../components/Footer";

export function MUsegundaVia() {
  const title = "AGENDAMENTO DE 2° VIA";
  const script = `Cliente solicita agendamento de segunda via do seu cartão estudante municipal, verificado que os dados do aluno e da escola estão de acordo em sistema, agendamento realizado com sucesso, seguem os dados:`;

  const path =
    "SERVIÇO | ESTUDANTE | AGENDAMENTO DE 2° VIA | CADASTRO LOCALIZADO | AÇÃO DE AGENDAMENTO";
  return (
    <div className="">
      <NavBar />
      <MsegundaVia title={title} script={script} path={path} />
      <Footer />
    </div>
  );
}
