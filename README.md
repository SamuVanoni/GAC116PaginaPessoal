# 👨‍💻 Portfólio Pessoal

## 🚀 Sobre o Projeto

Este projeto consiste no desenvolvimento de uma Página Pessoal (Portfólio) criada para a disciplina de **Programação Web (GAC116)** da Universidade Federal de Lavras (UFLA).

O principal objetivo prático foi construir uma página estruturada com HTML, CSS e JavaScript puros, aplicando conceitos avançados de responsividade e organização de código. Como diferencial, o projeto conta com **duas versões distintas da mesma página**, permitindo a comparação prática entre as abordagens de dois dos maiores frameworks CSS do mercado: **Bootstrap 5** (focado em componentes) e **Tailwind CSS** (focado em classes utilitárias *utility-first*).

## ✨ Funcionalidades

* **Design Responsivo:** Layout adaptável para telas de smartphones, tablets e desktops em ambas as versões.
* **Dual Framework:** O projeto pode ser visualizado tanto com estilização via Bootstrap 5.3 quanto via Tailwind CSS.
* **Dark / Light Mode:** Alternância de tema dinâmico implementado com JavaScript puro.
* **Persistência de Dados:** O tema escolhido pelo usuário (Claro ou Escuro) é salvo no `localStorage` do navegador, mantendo a consistência mesmo ao trocar de versão ou recarregar a página.
* **Dados Reais:** Apresentação de currículo real contendo experiências profissionais em engenharia de dados, formação acadêmica, habilidades técnicas e projetos desenvolvidos.

## 📂 Estrutura do Projeto

O código foi organizado para separar claramente as responsabilidades de cada framework e sua respectiva lógica de interatividade:

* **`index.html`**: Versão 1 da página, construída utilizando os componentes e classes do Bootstrap 5.
* **`tailwind.html`**: Versão 2 da página, construída utilizando as classes utilitárias do Tailwind CSS.
* **`theme.js`**: Motor JavaScript responsável por manipular o atributo `data-bs-theme` da versão Bootstrap.
* **`theme-tailwind.js`**: Motor JavaScript responsável por manipular a classe `dark` na raiz da versão Tailwind.

## 🔄 Abordagem de Desenvolvimento

O portfólio foi construído de forma incremental, dividido nas seguintes etapas:

* **Etapa 1:** Estruturação semântica do HTML base, utilizando tags apropriadas (`<section>`, `<article>`, `<header>`) e extração de dados reais do currículo profissional.
* **Etapa 2:** Estilização completa da Versão 1 focada na documentação e nos componentes prontos do Bootstrap.
* **Etapa 3:** Implementação da lógica JavaScript para alternância de temas (Dark/Light) integrando com o sistema nativo do framework e o Local Storage.
* **Etapa 4:** Criação da Versão 2 traduzindo o design da página para as classes do Tailwind CSS.
* **Etapa 5:** Interligação das duas páginas via barra de navegação e ajustes finais de acessibilidade e ícones.

## 💻 Como Visualizar

Você pode acessar o portfólio online diretamente pelo seu navegador, hospedado no GitHub Pages!

👉 **[Acesse a Página Pessoal aqui!](https://samuvanoni.github.io/GAC116PaginaPessoal/code/)**

**Instruções de Navegação:**
1. Ao abrir o site, você estará na versão construída com **Bootstrap**.
2. Clique no botão de **🌙 / ☀️** na barra de navegação superior para testar o Dark Mode.
3. Clique no botão **"Versão Tailwind"** para carregar a página construída com o segundo framework e note como a sua preferência de tema foi mantida!

## 👤 Autores

| [<img src="https://avatars.githubusercontent.com/u/123120658?v=4" width="100px"><br><sub>@SamuVanoni</sub>](https://github.com/SamuVanoni) |
| :---: |

## 📄 Licença

Este projeto está sob a licença **MIT**. Ele foi desenvolvido estritamente para fins de estudos, pesquisa e aprimoramento prático em programação front-end na Universidade Federal de Lavras (UFLA). Você é livre para utilizar, modificar e distribuir o código conforme necessário para o seu aprendizado.