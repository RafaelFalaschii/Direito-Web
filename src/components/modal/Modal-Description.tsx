import Penal from '../../assets/advogado-1.jpg';
import Consumidor from '../../assets/advogado-2.jpg';
import Civil from '../../assets/advogado-3.jpg';
import Trabalhista from '../../assets/advogado-4.jpg';



export type Description = {
  id: number;
  name: string;
  oab: string;
  area: string;
  description: string;
  image: string;
};

export const descriptions: Description[] = [
  {
    id: 1,
    name: "Ricardo Monteiro",
    oab: "OAB-GO 00000",
    area: "Direito Penal",
    description: `Graduada pela UFG, com atuação destacada na defesa criminal e em processos de alta complexidade. Experiência sólida em júris, audiências e estratégias de contestação. Perfil técnico e combativo, com foco na proteção de garantias fundamentais e excelência na condução de processos penais e investigações.`,
    image: Penal,
  },
  {
    id: 2,
    name: "Fernando Almeida",
    oab: "OAB-GO 00000",
    area: "Direito Do Consumidor",
    description: `Fernando Almeida atua com excelência na defesa dos direitos do consumidor, oferecendo soluções ágeis e eficazes em casos de abusos contratuais, cobranças indevidas e responsabilidade por vícios de produtos e serviços. Com abordagem estratégica e foco em resultados, representa clientes em demandas individuais e coletivas, tanto na esfera judicial quanto administrativa.`,
    image: Consumidor,
  },
  {
    id: 3,
    name: "Mariana Tavares",
    oab: "OAB-GO 00000",
    area: "Direito Civil",
    description: `Formado pela UFG, com ampla experiência em demandas empresariais e contencioso cível. Atuação estratégica na análise de provas, condução de audiências e elaboração de peças processuais complexas. Forte presença em disputas judiciais e extrajudiciais, com domínio técnico e postura resolutiva diante de litígios.`,
    image: Civil,
  },
  {
    id: 4,
    name: "Eduardo Vasconcelos",
    oab: "OAB-GO 00000",
    area: "Direito Trabalhista",
    description: `Com décadas de atuação e sólida experiência em relações de trabalho, Eduardo Vasconcelos é referência em ações sindicais, defesa patronal e direitos do trabalhador. Hábil na condução de negociações, audiências e litígios complexos, alia técnica refinada à prática estratégica, sempre com foco em soluções eficientes e seguras para seus clientes.`,
    image: Trabalhista,
  },
];