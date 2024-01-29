import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiMysql,
  } from 'react-icons/di';
  
  import '../styles/components/tecnologies.sass';
  
  const tecnologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />, description: 'HTML5 é a espinha dorsal da estrutura web, proporcionando uma base robusta para o conteúdo. Com seus elementos semânticos e capacidades aprimoradas de multimídia, o HTML5 garante uma estrutura moderna e eficiente para páginas web.' },
    { id: 'css', name: 'CSS3', icon: <DiCss3 />, description: 'CSS3 é o guru do estilo no desenvolvimento web. Suas funcionalidades avançadas dão vida aos elementos HTML, permitindo layouts sofisticados, animações e designs responsivos. Com o CSS3, as interfaces de usuário se tornam visualmente atraentes e se adaptam sem problemas a vários dispositivos.' },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, description: 'JavaScript, a linguagem da interatividade, dá vida às páginas web. Com sua versatilidade e amplo suporte nos navegadores, o JavaScript possibilita experiências de usuário dinâmicas e envolventes. É a força motriz por trás das funcionalidades no lado do cliente, tornando as aplicações web responsivas e interativas.' },
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />, description: 'Node.js é a espinha dorsal do JavaScript no lado do servidor. Sua arquitetura orientada a eventos e não bloqueante capacita os desenvolvedores a construir aplicações servidor escaláveis e eficientes. Node.js é a escolha preferida para aplicações em tempo real, garantindo uma comunicação fluida entre clientes e servidores.' },
    { id: 'mysql', name: 'MySQL', icon: <DiMysql />, description: 'MySQL se destaca como uma fortaleza confiável no mundo dos bancos de dados. Com suas robustas capacidades de gerenciamento de dados, o MySQL assegura o armazenamento, recuperação e manipulação eficientes de dados. É um companheiro confiável para aplicações de diversas complexidades, oferecendo desempenho e segurança ideais.' },
    { id: 'react', name: 'React', icon: <DiReact />, description: 'React, desenvolvido pelo Facebook, redefine o desenvolvimento front-end. Sua arquitetura baseada em componentes e o DOM virtual simplificam a criação de interfaces de usuário interativas. O React facilita o desenvolvimento de componentes modulares e reutilizáveis, tornando o processo de construção de interfaces de usuário dinâmicas e responsivas altamente eficiente.' },
  ];
  
  const TecnologiesContainer = () => {
    return (
      <section className='tecnologies-container'>
        <h2>Tecnologias</h2>
        <div className='tecnologies-grid'>
          {tecnologies.map((tech) => (
            <div className='tecnologies-card' id={tech.id} key={tech.id}>
              <div className="front">
                {tech.icon}
                <h3 className='titulo'>{tech.name}</h3>
              </div>
              <div className='technologies-info'>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TecnologiesContainer;
  