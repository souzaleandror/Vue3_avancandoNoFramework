##### 06/02/2024

Curso de Vue3: avançando no framework

@01-Bem começado, metade feito 

@@01
Apresentação

[00:00] Olá, meu nome é Vinícius Neves e eu estou mega feliz de ter você aqui comigo para estudarmos juntos esse framework incrível que é o Vue, agora na versão 3. Nós vamos trabalhar em cima de um projeto que já existe, trazendo um paralelo para o mundo real, para o mercado de trabalho, onde é muito comum trabalharmos em softwares que já estão rodando.
[00:17] Então nós vamos adicionar e refatorar alguma coisa de algo que já existe. É totalmente diferente de quando estamos criando algo novo, algo do zero. O que vamos ver aqui? Vamos dar uma olhada no Tracker e olha o que ele está fazendo agora.

[00:30] Nós vamos adicionar todo esse conceito de projetos. Por exemplo, aqui eu tenho cadastrado dois projetos pessoais, eu tenho o meu plano de estudos e eu tenho um específico para estudar Vuex na versão 4.

[00:46] Agora, quando eu vou na minha lista de tarefas, eu posso dizer que eu estou, por exemplo, estudando mutations, que é um dos temas que vamos estudar neste curso. Vou dizer aqui que ele faz parte do projeto de Vuex. Vou dar o "Play", ele vai começar a contar o tempo, quando eu finalizo, ele desce aqui e já exibe a tarefa para mim. Ele vai vincular ao projeto, vai dizer quanto tempo eu gastei. Ele vai fazer o tracking.

[01:09] Ele vai controlar quanto tempo eu estou gastando em cada tarefa no meu dia. É isso o que vamos ver juntos. Vamos para um pouco de spoiler aqui, vamos dar uma olhada no que vamos desenvolver. Logo de cara, que eu deixei aqui para te dar um pouco de spoiler. Vamos ver algumas vantagens de se trabalhar com typescript.

[01:25] Vamos ver alguns operadores bem bacanas, que podemos utilizar. Também vamos aprender a reaproveitar código, utilizando o mixin.

[01:34] Ao invés de ficarmos fazendo aquele copy e paste, "Ctrl + C" e "Ctrl + V", de um método, de um componente para o outro, vamos ver uma boa forma de reaproveitar. Além de reaproveitarmos código com o mixin, vamos aprender a criar hooks customizados.

[01:48] Vamos ver quais são as vantagens e as desvantagens, e onde eu posso usar o mixin e onde eu vou usar o hook. Uma outra coisa bem bacana, que vamos ver durante o curso inteiro, é a parte do Vuex.

[02:02] É controlar o estado da aplicação. Teremos que compartilhar com a nossa lista de tarefas, fazer com que isso fique persistido, não podemos perder a lista de projetos conforme vamos e voltamos de uma rota para a outra. Então tem muita coisa bacana para aprendermos, eu estou doido para começar. Te espero no próximo vídeo, vem comigo, vamos evoluir esse Alura Tracker juntos. Te vejo lá.

@@02
Preparando o ambiente

Para seguir com o nosso curso, vamos precisar do NodeJS. Se você ainda não possui, veja aqui como fazer a instalação.
Além disso, vamos utilizar o projeto do curso anterior. Mas fique tranquilo, se quiser começar daqui você pode baixar o projeto completo aqui no github.

Você pode baixar o zip e descompactar a pasta, ou então forkar ou clonar o projeto. Depois, basta rodar npm i ou yarn para instalar as dependências e npm run dev ou yarn serve para executar o Alura Tracker na versão 1.0.

Agora sim, estamos prontos para colocar a mão na massa! Por que já dizia o mestre, bem começado… metade feito!

@@03
Vue-router e a primeira rota

[00:00] Olá. Que incrível ter você comigo aqui neste curso de Vue.js. Se você me acompanhou no curso anterior, você já tem esse Alura Tracker rodando e você já conhece ele. Se você não conhece, fique tranquilo, vamos dar uma olhada nele agora, e você poderá baixar o repositório e colocar ele para funcionar, exatamente como você está vendo aqui, para começarmos a adicionar coisas novas a ele.
[00:21] Então o que é o Aluta Tracker? Ele é uma aplicação responsável por controlar o tempo gasto em cada tarefa. Por exemplo, podemos vir no Alura Tracker e colocar "Estudar Vue 3". Dou o "Play", o cronômetro vai começar a contar quanto tempo eu estou levando para executar essa tarefa.

[00:39] Quando eu finalizo a tarefa, ele limpa o formulário, zera o cronômetro e adiciona a tarefa executada aqui na lista.

[00:47] Então se eu vir aqui, por exemplo, e "Estudar Typescript", eu dou o "Play" aqui, cronômetro mais uma vez começa a correr. Quando eu finalizo, limpa o cronômetro, limpa o input e adiciona a tarefa executada aqui.

[00:59] Isso foi o que desenvolvemos no curso anterior. Se você ainda não tem aí, fique tranquilo, você pode baixar e colocar para rodar. Mas o que acontece? As aplicações são vivas, elas recebem funcionalidades o tempo todo, ou algumas funcionalidades são alteradas, outras são removidas.

[01:15] É isso que vamos simular aqui, é isso o que vamos fazer com o Tracker, vamos adicionar funcionalidades em uma aplicação já existente. O que temos que fazer antes de começar a preparar essa aplicação para receber essas funcionalidades? E como podemos fazer - temos várias formas que podemos fazer isso, mas como podemos fazer isso com o Vue3 e como faremos no Alura Tracker?

[01:40] Vamos pensar na seguinte abordagem: se eu estou na raiz da minha ligação - repare, aqui eu estou no meu localhost, mas esse endereço pode mudar. Por exemplo, você pode publicar no Vercel, ou publicar no seu domínio particular. Estamos aqui na raiz. Quando estivermos na raiz do projeto, nós queremos exibir aqui a funcionalidade principal do Tracker, que é essa lista de tarefas.

[02:06] Mas eu quero, por exemplo, adicionar uma nova funcionalidade aqui, alguma coisa do tipo "localhost:8080/#/nova-funcionalidade". Eu quero alguma coisa mais ou menos assim, dada a nossa URL, eu vou renderizar uma visualização diferente e eu vou trocar toda a interface que eu estou exibindo para o usuário. Nós queremos fazer funcionalidades baseadas em URLs.

[02:35] E o Vue, que é esse framework progressivo, que já conhecemos, ele já tem uma forma bem bacana de fazermos isso, que é o Vue Router. Então vamos para a nossa aplicação, vamos instalar esse Vue Router. Vou abrir o meu VS Code.

[02:52] Repare que eu já estou com o meu Tracker já baixado, rodando. Mandei aqui um npm run server, e ele está rodando a aplicação para mim. Eu vou agora adicionar um novo console e o que eu quero fazer é pedir para o npm instalar para mim, npm install - se você gosta de digitar um pouco menos, igual eu, pode fazer só um npm i, que é a mesma coisa.

[03:16] Eu quero instalar o npm i vue-router. Porém, preste atenção, estamos utilizando a versão 3 do Vue, e a versão do Vue Router que é compatível com a versão 3 é a versão 4, então eu quero instalar o Vue Router na versão 4, npm i vue-router@4. Esse comando vai adicionar essa dependência no pacote, vai baixar ela para nós, e depois que ela estiver baixada, vamos começar a configurar o nosso roteador.

[03:41] Então esse processo pode demorar um pouco. Não tem problema, fique tranquilo, quando ele terminar ele estará disponível para começarmos a configurar. Terminou de instalar aqui para mim, ele vai dar aqui algumas mensagens, não tem problema, vou deixar essas mensagens de lado.

[03:55] Mas o que importa para mim é que ele instalou com sucesso o meu Vue Router. Se olharmos no nosso package JSON - deixa eu fechar esse terminal aqui. Teremos aqui, repare aqui comigo, o Vue Router na versão 4.

[04:08] O que queremos fazer? É configurar a rota inicial da aplicação. Quando o usuário acessar a raiz do nosso projeto, nós queremos exibir a nossa visualização de tarefas. Vamos dar uma olhada nessa estrutura atual aqui. Se abrirmos o "App.vue", do lado esquerdo, veremos que está tudo aqui.

[04:25] A barra lateral está aqui, repare que eu tenho uma main, que é a div principal da aplicação, ela tem colunas, eu tenho uma coluna com a barra lateral e outra coluna, que é uma coluna maior - repare, essa primeira tem 1/4, essa outra tem 3/4. E esse conteudo, se não me engano, nós adicionamos um badge. Vamos dar uma olhada no final, nós adicionamos um fundo para ele aqui.

[04:48] Nesse conteúdo temos um fundo e o que queremos agora é pegar e dada a URL - deixa eu dar um "Ctrl + X" nesse código - eu quero renderizar aqui !!! a visualização de acordo com a URL (com a rota).

[05:12] Então é isso que eu quero mudar. Deixa eu colar de volta, só para eu não perder. Vou voltar aqui, pronto. Então esse miolo aqui é o que queremos alterar segundo a URL.

[05:25] Então queremos alterar essa visualização, queremos alterar isso de acordo com a URL acessada. Vamos começar a configurar o nosso roteador. Vou clicar em "src", no menu lateral, com o botão direito, novo arquivo, vou criar uma pasta chamada "roteador/". Dentro dessa pasta chamada "roteador/" eu vou criar um arquivo chamado "roteador/index.ts".

[05:42] Eu estou fazendo isso aqui, que ele vai exportar para mim, por padrão, na hora em que eu fizer o import, se eu fizer um import de roteador, ele já vai ver que tem um index aqui e vai ler esse arquivo para mim. Como vamos configurar? Precisamos de duas coisas. Primeiro precisamos das rotas em si.

[06:01] Essas rotas, elas serão um array de alguma coisa, const rotas = [] então todo o meu roteamento estará aqui, uma visualização para cada rota. Eu também vou ter um roteador, um const roteador = {}. Esse roteador vai conhecer essas rotas, e poderemos configurar ele para ele funcionar do jeito que nós queremos. E, no final, eu quero fazer o export default roteador;. É isso o que eu quero fazer.

[06:30] Como eu gero esse roteador? Ele não pode ser um objeto simplesmente utilizando Vue 4 e utilizando o typescript, então eu vou chamar uma função chamada const roteador = createRouter(). Repare, o VS Code já achou aqui para mim, eu vou clicar, ele vai importar, = createRouter(). Esse é o roteador que eu vou criar.

[06:54] Repare que ele recebe aqui um objeto de opções, para configurar ele. Eu vou criar aqui um objeto de configurações. Eu vou dizer o history mode dele, history:. O que esse history mode quer dizer? Vou voltar na aplicação. Repare que ele adiciona para nós na URL.

[07:10] Isso quer dizer, para o navegador, se eu estou alterando só depois dessa tralha, ele não vai recarregar a página, ele não vai entender que eu estou trocando uma requisição, ele vê que é uma âncora, mas está mudando, então isso facilita para o navegador entender que isso não é uma nova URL, que ele vai fazer uma nova requisição. É por isso que esse é o modo padrão do nosso roteador.

[07:36] Existem outras formas, mas esse modo padrão é o que vamos utilizar. Para criarmos esse modo padrão, vamos chamar um método que chama create - repare que ele já me facilitou, history: createWebHashHistory(), ou seja, eu quero aquele hash, aquela hashtag para me ajudar a configurar e controlar as minhas rotas.

[07:57] Então nós já passamos o history, agora precisamos passar as rotas para a aplicação. Nós temos um objeto aqui, o routes:, que serão as nossas routes: rotas, routes é rotas em inglês. Agora temos que pegar e passar essas rotas adiante. Esse array de const rotas = [], vamos tipar ele aqui, ele será um objeto do tipo const rota: RouterRecordRaw[] = [].

[08:21] Repare que ele já autocompletou para mim. Ele será um array de RouteRecordRaw, ou seja, esse é o tipo, a interface que representa cada rota da aplicação. Repare que ele já está compilando, agora, para finalizarmos a configuração dele, vamos adicionar a nossa primeira rota.

[08:43] Para configurarmos esta rota, teremos várias opções que podemos fazer, que podemos utilizar, mas vamos trabalhar inicialmente com três propriedades: o caminho, o path da rota, ou seja, nesse momento eu só quero olhar a rota raiz, quando o usuário entrar na aplicação, path: '/',.

[09:02] Eu vou dar um nome para essa rota, o nome desta rota será name: 'Tarefas',, e esta rota terá um componente. Que componente é esse? Repare, nós só temos o App.vue aqui, com vários componentes aqui dentro.

[09:16] Repare que é esse Formulario que queremos trocar dinamicamente. Os novos componentes em si são componentes pequenos, é uma barra lateral, o cronômetro, o formulário. Nesse cenário, o "roteador", queremos um componente maior, queremos uma visualização. Então vamos criar esse "roteador”, inclusive vamos criar ele em um lugar que indique que ele é uma visualização ao invés de ele ser simplesmente um componente comum.

[09:38] No menu lateral, em "src", vou clicar com o botão direito, em novo arquivo, eu vou criar uma pasta chamada "views", de visualizações. Dentro dessa pasta eu vou criar uma view chamada "Tarefas.vue", que é a minha visualização de tarefas. Pronto, criei o arquivo, olha o que eu vou fazer.

[09:58] Eu venho no “App.vue”, como aqui ele já tem tudo, todos os imports que eu preciso, eu vou copiar todo o conteúdo dele, vou jogar para a minha visualização de tarefas e vou tirar daqui, limpar o que eu não preciso. Vou tirar essas duas linhas do final, vou tirar essa primeira parte, esse <main> também sai. Vou ajustar essa indentação aqui.

[10:24] Pronto, já adicionei. Então ele já tem aqui só o que eu preciso, que é o meu Formulario, vou botar ele para dentro, com a minha lista de tarefas. Repare que ele já disse: você está registrando essa barra lateral, mas você não está usando, então posso vir aqui e remover ela dos components.

[10:43] Esse import ITarefa eu estou importando e não estou usando, a minha lista de tarefas - minto, eu estou usando, mas ele não está encontrando. Temos que voltar uma pasta, import ITarefa from "../interfaces/ITarefa" - repare, estamos em views, "../", "src > interfacve". A mesma coisa para os nossos componentes, então eu vou ajustar todos com ../, pronto.

[11:07] Agora eu já estou fazendo os imports certos. Só que, por exemplo, esse modoEscuro, ele não tem nada a ver com essa visualização, nem esse alterarModo e nem esse monte de CSS aqui embaixo. Pronto.

[11:20] Agora sim, ele está pronto para ser utilizado. Vou salvar ele aqui e vou dizer agora, no meu component: que eu quero renderizar tarefas, component: Tarefas,. Deixa eu ver se ele vai achar para mim, ele não achou, então vamos importar ele na mão. import Tarefas from '../views/Tarefas.vue',.

[11:48] Agora sim, dentro da nossa pasta "views" temos a nossa visualização de tarefas, que será exibida quando o caminho for o caminho raiz, a barra, a raiz da nossa URL. Só que isso aqui não é suficiente, nós precisamos indicar para o view utilizar esse roteador. Vamos no nosso main, que é onde criamos a nossa aplicação. Antes de montar, vamos só indentar aqui, vamos pedir para o view utilizar o nosso roteador, use(roteador).

[12:17] “Routeador” não, roteador. Deixa eu ver aqui, repare, ele já faz um auto import para mim, vou clicar, ele está fazendo um import do roteador, que é esse index dentro da pasta "roteador", e está utilizando o roteador.

[12:29] Agora, no meu "App.vue", eu posso vir e tirar esse miolo do Formulario, porque aqui - vou colocar um comentário aqui, <| -- AQUI VAI A VIEW CORRESPONDENTE -->. Pronto.

[12:48] Vou salvar. Vamos ver o que ele está reclamando. Ele já está me dizendo: “cara, você está importando esses componentes, mas você não está fazendo nada com eles, você está registrando à toa”.

[13:01] Vou tirar aqui, vou deletar esses componentes, vou deletar também dos imports. Vamos aproveitar e limpar o nosso "App.vue". Eu não tenho mais uma lista de tarefas, nem tenho um método de salvar tarefas, nem tenho esse computed. Agora sim, está bem clean, só teremos os estilos correspondentes.

[13:20] Ele terá os métodos correspondentes, eu posso até tirar o import ITarefas dessa interface. Ele está bem mais clean, o nosso "App.vue" aqui, agora ele está bem enxuto. Tudo pronto, vamos testar se esse monte de coisa que fizemos aqui está funcionando. Nós criamos o roteador, criamos a visualização e utilizamos o roteador aqui, apontamos para o view, que essa aplicação tem esse roteador.

[13:43] Vamos voltar na aplicação, vou atualizar aqui, repare, ele traz o app, mas cadê o meu miolo, cadê a minha aplicação? Cadê a minha visualização?

[13:55] Nós pegamos, configuramos tudo, fizemos tudo, só que precisamos indicar também para o Vue Router onde ele vai colocar a visualização correspondente à rota. Como fazemos isso? Apontando um componente chamado <router-view>, repare que ele até já sugeriu para mim.

[14:14] Vou abrir ele aqui, vou fechar ele aqui, <router-view></router-view>. Agora sim, estamos indicando para o nosso roteador onde ele vai renderizar a visualização. Vou voltar no navegador, agora sim, está bem bacana, ele já me trouxe a minha visualização de tarefas.

[14:31] Podemos vir aqui e iniciar uma nova tarefa, "estudar Vue Router", vou botar até entre parênteses aqui, "(na versão 4)". Vou dar um play, ele vai executar, o cronômetro está rolando. Se eu dou um stop aqui, ele já desce a lista.

[14:49] Então nós refatoramos a aplicação com sucesso, a funcionalidade que existia antes continua existindo. A diferença é que agora existe uma visualização para os tratamentos das tarefas. Agora, a cada nova funcionalidade que tivermos, vamos no nosso array de rotas, vamos criar um novo objeto que terá o caminho, terá o nome e terá o componente relacionado, que ainda não sabemos qual será.

[15:22] Agora simplifica bastante a nossa vida, para cada funcionalidade uma URL diferente, uma visualização diferente. Então vamos lá, começar a adicionar essas funcionalidades novas. Te vejo no próximo vídeo.

@@04
Modificando o estado

Trecho de código CSS usado aos 5:31
.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}COPIAR CÓDIGO
[00:00] Tudo pronto para adicionarmos agora a nossa primeira funcionalidade nova, que será o conceito de projetos. Agora o usuário, ele poderá vincular uma tarefa a um projeto, esse projeto pode ser um projeto que ele está trabalhando, um freelancer, um projeto da empresa dele, ou um projeto pessoal, por exemplo, um plano de estudo.

[00:19] Então o que nós queremos é criar agora essa funcionalidade de "/projeto". Na URL de projetos, ele vai acessar e vamos trazer uma visualização nova, com tudo o que ele pode fazer com os projetos: cadastrar, editar, excluir um projeto.

[00:32] Vamos agora começar a codar isso. O que nós queremos? Vamos para o nosso "roteador > index", vamos criar uma rota nova. Vamos só organizar a indentação, para ficar bem bacana quando formos criar uma rota nova, fica fácil de ler. Perfeito.

[00:52] Vamos duplicar esse código, para facilitar. Qual será o caminho? path: '/projetos',. Qual será o nome da rota? name: 'Projetos',. Qual é o componente, qual é a visualização? component: Projetos. Só que ele, quem é o projetos? Nós ainda não temos, vamos criar. Vou pegar esse código, dar um "Ctrl + C". Na pasta "views", novo arquivo, "Projetos.vue". O que nós precisamos aqui?

[01:15] O nosso <template>, vou colocar só um <h1>Projetos</h1>. Precisamos de um <script>, vou colar aqui. Vou apagar esse miolo, esse eu também não preciso.

[01:33] Queremos fazer o export default defineComponent. Repare que ele faz um import para nós, do defineComponent, sempre que vamos criar, se olharmos nos nossos outros componentes também. Só que repare que o autocomplete, ele trouxe do runtime core, não precisamos, podemos importar direto do Vue.

[02:00] Então export default defineComponent({}), ele é uma função, que recebe um objeto de configuração. Pronto. template, <h1>, script, fizemos o import do Vue, estamos fazendo um export default e aqui vamos dar um nome agora para essa visualização, vamos chamar de name: 'Projetos'. Vou salvar, vamos ao navegador para dar uma olhada. Vou atualizar.

[02:27] Ele ainda não trouxe nada, vamos ver o porquê. Repare aqui, ficou faltando salvar o "index" e importar o nosso projeto. Então vamos começar importando: import Projetos from '../views/Projetos.vue'. Agora sim, salvei, vamos voltar no navegador. Bacana, "/projetos" trouxe já a nossa visualização.

[02:48] Se eu voltar agora para a raiz do projeto, vou apagar esse "/projetos" da URL, trouxe a minha lista de tarefas.

[02:58] Eu vim aqui, troquei, "/projetos", ele trouxe projetos. Entrei na raiz, carregou as tarefas. Mas repare que eu tenho que alterar isso manualmente, isso não está legal. O usuário precisa ter um menu, uma navegação inclusa aqui. Vamos fazer esse menu para facilitar a vida do usuário e ele poder selecionar facilmente onde ele está.

[03:16] Vamos voltar no VS Code, o que queremos fazer agora é mexer na nossa barra lateral, no componente "BarraLateral.vue". Aqui, o que eu quero fazer? Eu quero, logo após o modoEscuro, eu quero adicionar uma barra de navegação. Eu vou adicionar uma <nav>, </nav>.

[03:41] Estamos usando o Bulma, então temos algumas classes que podemos utilizar. Eu vou adicionar essa classe aqui, ter uma classe chamada nav class = "panel">. Eu quero dar um margin top, = "panel mt-5">, ele vai calcular para mim. Aqui dentro eu terei uma <ul> e terei um item de lista, um <li>, </li>, para cada item que eu for adicionar.

[04:02] Para eu configurar um link, um link HTML, nós poderíamos pensar em uma tag a, pensar no href qualquer. Só que não é isso o que queremos, estamos trabalhando com o Vue Router, e o Vue Router tem um componente específico para tratar os links, que é o <router-link>. Ele sim, ele é o especialista, é o responsável por trocar e trabalhar com esses links.

[04:30] A primeira coisa que vamos fazer, para ficar bem bacana, eu vou adicionar um ícone slim, que corresponde ao que o usuário está fazendo. Só vou pegar aqui, da minha cola, eu tenho um item para tarefas, que é essa linha aqui. Vou chamar aqui, tarefas. Aqui embaixo eu vou ter um outro <router-link> para projetos, projetos. Vou consertar o ícone, o ícone de projetos é esse aqui.

[05:03] Bem bacana, criei uma barra de navegação, mas está faltando eu dizer para onde cada router link vai. O primeiro, ele vai para a raiz e o segundo vai para "/projetos".

[05:20] Agora sim. Agora, só para botar um estilo bem bacana, eu venho nos dois, vou adicionar uma classe, vou chamar essa classe de class = "link" e vou já trazer um CSS, que está pronto, esse aqui. Vou colar na parte de baixo.

[05:39] Ele só vai pegar e customizar um pouco esses links para nós. Não é o foco do nosso curso o CSS, por isso eu já trouxe ele pronto. Depois você pode olhar ele com calma e ver o que ele está fazendo. Vou salvar e vou ver se isso tudo funcionou.

[05:53] Repare que ele já me trouxe tarefas e projetos. Eu posso vir aqui e clicar, ir para projetos, ir para tarefas, ir para projetos e ir para tarefas. Agora sim, a nossa URL já está fazendo, a nossa navegação já ocorre do jeito que precisamos e podemos evoluir os nossos projetos e começar a adicionar as funcionalidades correspondentes. O que queremos, para começar, é criar e adicionar projetos a essa lista. Vamos fazer isso? Te vejo no próximo vídeo.

@@05
Para saber mais: Conheça o router-vue

Conhecer a documentação é essencial para entendermos como a biblioteca funciona. O Vue Router tem funcionalidades muito interessantes e para garantirmos que a nossa aplicação segue as boas práticas recomendadas, ter a documentação como primeira fonte de consulta é mega interessante.

https://next.router.vuejs.org/guide/

@@06
Cadastrando projetos

[00:00] Já demos uma refatorada no projeto, demos uma organizada, nós já conseguimos trocar e alternar as views, seja a view de tarefas ou a view de projetos. Agora podemos, de fato, começar a implementar. Vamos abrir o nosso projeto, vou fechar a área do terminal para ficar menor.
[00:21] Vamos começar a organizar o nosso template. Eu já vou adicionar uma classe do Bulma, que a classe de título, e eu vou pegar e agrupar toda essa view, tudo o que estiver aqui dentro, dentro de uma <section>, para ficar agrupado, tudo direito. Aqui eu já vou adicionar uma classe, vou chamar ela de <section class = "projetos">. Pronto.

[00:42] Agora já podemos seguir com a criação do nosso formulário. Vou criar um formulário, <form>, vou tirar essa action, e vou utilizar as classes do Bulma para fazer esse formulário. Como criamos esse formulário, do jeito que o Bulma espera? Eu vou criar uma div com a classe field, <div class = "field">, vou criar uma label com a classe label, <label for = "" class = "label">.

[01:11] Ela será uma label para o nome do projeto, então <label for = "nomeDoProjeto", a classe será label, e eu vou colocar aqui Nome do Projeto. Vou criar um input, ele será do tipo texto, a classe dele é input, já vou criar aqui um v-model, para linkar ele com uma variável, e o nome dessa variável será =”nomeDoProjeto”.

[01:45] Vou criar o ID também, nome do projeto, que é para linkar com esse for de cima, <input type="text class="input" v-model="nomeDoProjeto" id="nomeDoProjeto>. Já vou pedir para ele dar uma formatada para mim, para ficar bonito, pronto, nome do projeto, tudo certo. O que mais que falta?

[01:58] Falta criar um botão para submeter formulário. Vou criar mais uma div.field, criar a classe do Bulma, <div class="field">. Ele vai ter um button, que tem uma classe button, essa classe também é do Bulma, <button class="button">. E vamos para o Salvar. Esse button, ele é do type submit, então vamos explicitar que o tipo dele é <button class="button" type="submit">, ele vai submeter o formulário.

[02:21] Quando o usuário clicar aqui, ele vai submeter o formulário. Para pegarmos e ouvirmos esse evento, já sabemos como fazer, <form @submit.prevent=" ". O que isso quer dizer? Vamos ouvir o evento de submit já prevenindo o comportamento padrão, aquele comportamento de recarregar a página, de submeter e recarregar a página. E já vamos linkar com o método salvar, ="salvar">.

[02:46] Salvar. Agora nós precisamos implementar isso, implementar o método de salvar e esse v-model. Vamos começar pelo data (){}, que é o estado do nosso componente. É uma função, que retorna um objeto com o estado do componente, return {}. Aqui teremos o nomeDoProjeto: ' ',, que será uma string vazia inicialmente.

[03:11] Pronto. Já vou pedir para ele formatar aqui. Além do data, teremos os métodos do componente. O método que teremos é o método de salvar (){}. Esse método vai criar um projeto, const projeto. Mas qual é o tipo deste projeto? Nós precisamos definir a nossa interface. Vamos fazer em "src > interfaces" um novo arquivo, "Projeto.ts".

[03:39] Vamos dar um export default interface IProjeto {}. O que ele vai ter? Ele vai ter um ID do tipo string, id: string; e vai ter um nome do tipo string, nome: string;. Pronto, agora já podemos criar esse const projeto:, ele é um const projeto: IProjeto- vamos ver se ele vai auto importar. Não fez isso, vou fazer na mão, import IProjeto from '../interfaces/IProjeto', pronto.

[04:22] Ele vai receber um objeto no const projeto: IProjeto = {}, e ele já vai nos dizer: vamos adicionar aqui as propriedades que o projeto tem. Então o nome do projeto, vai ser o que? nome: this.nomeDoProjeto. Repare que temos um estado nomeDoProjeto que está vinculado com um input e quando o usuário submete, nós pegamos esse input e colocamos no nome do projeto.

[04:50] Vamos colocar o ID dele também, ele será um id: new Date(), nós podemos pegar um ().toISOString(), para simular um ID gerado, genérico, ele vai pegar o timestamp, contendo horas, minutos, segundo, tudo, do momento em que o projeto foi criado. Agora que temos o projeto em mãos, precisamos adicionar esse projeto em algum lugar.

[05:12] Vamos criar aqui uma lista de projetos, projetos: [], ele será um array, e sabemos que ele é um array de projetos, então [] as IProjeto[]. Ele é um array de projetos. Agora já podemos vir aqui no salvar, this.projetos.push(projeto), e esse projeto que acabamos de criar.

[05:33] Nós podemos limpar o input, então this.nomeDoProjeto = ' ' vai ficar vazio. Agora sim, creio que já implementamos tudo o que precisávamos por agora. Quando o usuário clicar em salvar o formulário, ele vai pegar o nome do projeto, criar um projeto novo, colocar um ID, adicionar na nossa lista e depois, em seguida, vai limpar o nosso input. Vamos ver se isso tudo está funcionando? Vou voltar na nossa página.

[06:02] Repare que está faltando um padding aqui, interno. Vamos adicionar ele primeiro. Nós já temos uma classe "IProjetos", vamos ao final, criar um <style scopped>, para esse escopo não vazar para outras partes da aplicação. Vamos criar aqui um padding:, se eu não me engano, ele é um padding: 1.25rem;. Vamos salvar aqui.

[06:22] Pronto, agora já está melhor. Nós já conseguimos acompanhar aqui o estado do nosso componente. Vamos criar um "Plano de estudos". Vou mandar salvar. Ele já adicionou na nossa lista.

[06:42] Nós temos o nome do projeto e uma lista de projetos, já com um objeto, que acabamos de criar. Está faltando agora exibir essa lista de algum lugar. Vamos fazer isso, vamos voltar para o VS Code, mais uma vez nas classes do Bulma. Logo abaixo do formulário, vamos criar uma tabela, o nome da classe do Bulma para tabela é tabela, table.table, ele vai criar aqui para nós, table class="table">.

[07:08] Pronto. Nós criamos aqui uma tabela, com a classe table, precisamos dizer para ele pegar a largura toda, então usamos a classe do Bulma, que é "table is-fullwidth", ou seja, pega a largura toda. Nós vamos criar um <thead>, de HTML normal, ele terá um <tr>, com um <th>, que será o ID do projeto e um outro <th>, que será o Nome do projeto.

[07:47] Vou pedir para ele formatar para nós, bem bonito. Aqui embaixo mais HTML, terá um <tbody>, o <tbody> terá um <tr>, que terá um <td>. Aqui nós precisamos do ID de fato do projeto, e outro <td> com o NOME. Vou pedir para ele formatar de novo.

[08:10] Aqui nós queremos fazer uma interação, nós vamos fazer um <tr v-for=""> para cada "projeto in projetos", para cada projeto dentro da minha lista de projetos. Ele pede também uma key, que é para ajudá-lo a controlar a renderização dessa lista. Nós vamos usar o ID do projeto com como chave, :key-"projeto.id".

[08:30] Agora que temos acesso ao projeto, podemos vir aqui e fazer <td>{{ projeto.id }}</td> e aqui <td> {{ projeto.nome }}</td>. Nós criamos uma tabela rápida aqui, usando as classes do Bulma com ID e nome.

[08:50] Para cada projeto, dentro da nossa lista de projetos, vamos exibir dentro desta lista. Vamos dar uma olhada? Vou salvar aqui, está aqui a minha lista de projetos, repare que ela está vazia, que ele recarregou para nós.

[09:01] Eu vou vir aqui e criar um "Plano de estudos", vou salvar. Bacana, plano de estudos. Eu posso criar aqui um "Plano de estudos TS" - opa, cliquei em voltar sem querer. Vou voltar aqui, "Plano de estudos" de novo, "Plano de estudos", "Salvar". "Plano de estudos TS". Pode ser que, por exemplo, o nosso próprio "Alura Tracker", que é o nome do projeto, Alura Tracker. Mando salvar.

[09:30] Já está funcionando do jeito que planejamos para essa aula de agora. Nós já conseguimos adicionar uma lista de projetos. Mas repare comigo, nós precisamos que esta lista de projetos seja acessível na lista de tarefas, na nossa view de tarefas, porque queremos selecionar um projeto aqui em cima, na barra, ter um select com todos os nossos projetos.

[09:54] Quando saímos e voltamos do nosso componente, repare, a nossa lista se perde, porque não estamos salvando ela em lugar nenhum. E nós não queremos que isso aconteça, nós queremos que o nosso plano de estudos fique salvo em algum lugar.

[10:07] Além de ficar salvo, ele precisa ficar disponível na nossa lista de tarefas. Vamos pensar nesses itens, vamos trabalhar juntos, eu e você, na próxima aula, para conseguir disponibilizar essa lista de projetos na view de tarefas. Vamos lá? Te vejo na próxima aula.

@@07
Bugfix

Claudia e Roberta estão fazendo pair programming (programação em par, uma das técnicas do desenvolvimento ágil) para solucionar um bug que surgiu após implementarem o Vue Router.
Elas definiram as rotas, mas o conteúdo das views nunca é renderizado. Vamos ajudá-las na caça ao bug?

Esse é o código desenvolvido:

Aqui é o router/index.ts

// router/index.ts
// imports omitidos
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default routerCOPIAR CÓDIGO
E o App.vue:

// App.vue
<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuro}">
    <div class="column is-one-fifth">
      <BarraLateral @aoAlterarModo="alterarModo"/>
    </div>
  </main>
</template>COPIAR CÓDIGO

A propriedade component deveria apontar para o caminho relativo para o arquivo Vue.
 
Alternativa correta
Eles esqueceram de inserir o <router-view/>, componente que indica onde o conteúdo das views devem ser renderizados.
 
Alternativa correta! Exatamente! Sem isso, o Vue Router não sabe onde inserir a view responsável pela rota atual.
Alternativa correta
O correto é exportar o array routes para que o router conheça os caminhos possíveis.

@@08
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@09
O que aprendemos?

Nessa aula, você aprendeu:
Instalar e configurar o vue-router num projeto existente;
Vimos que o Vue é um framework progressivo e não vem com roteamento por padrão.
Configurar o arquivo de rotas;
Criamos uma lista de objetos, indicando qual componente será responsável por qual rota.

#### 07/02/2024

@02-Gerenciando o estado

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

@@02
Um estado para a todos governar

[00:00] Já iniciamos o roteamento do nosso Alura Tracker, agora temos que começar a cuidar do estado da nossa aplicação. Como assim, o estado? Repare comigo, quando vamos à visualização de projetos, cadastramos um projeto, por exemplo, "Plano de estudos", ele já aparece na lista para nós.
[00:18] Mas quando vamos para a listagem de tarefas, nós ainda não temos esses projetos acessíveis. E se retornarmos para a URL de projetos, perdemos a lista de projetos, ela não é persistida em lugar nenhum.

[00:31] Então temos dois desafios: persistir esses projetos em algum lugar e ainda disponibilizar eles na visualização de tarefas. Como podemos fazer isso? Qual é uma forma de podermos organizar esse estado da nossa aplicação? Vamos dar uma analisada no nosso código. Nós temos o nosso "App.vue", onde definimos o <router-view>, ou seja, onde o meu router vai renderizar para nós as nossas visualizações.

[00:59] Nós temos um formulário de tarefa, onde de fato precisamos ter acesso também a essa lista de projetos. E temos a visualização dos projetos em si, que é onde nós cadastramos esses projetos. São vários lugares que precisarão ficar de olho nessa lista de projetos. Como vamos fazer isso?

[01:19] Nós poderíamos pensar, de alguma forma, em tentar trazer essa lista de projetos para o "App.vue" e sair passando de um componente para o outro, nós íamos passar por alguns desafios como, por exemplo, nós não temos mais o filho direto, no app web view agora, ele só conhece o router view, então essa não seria uma abordagem muito interessante.

[01:44] Quando começamos a pegar e a passar uma propertie de um componente para o outro, simplesmente porque o filho ou o neto precisa, isso é um problema conhecido, chamado prop drilling, ou seja, passamos essa prop de pai para filho para neto, só encaminhando, e muitas vezes não fazemos nada com a propriedade em si, isso tende a se tornar um problema com o passar do tempo.

[02:07] Então vamos pegar e vamos cuidar desse nosso estado, mas vamos pensar agora no estado global. Nós já temos o estado do componente, que onde definimos o nosso método data(), a nossa visualização de projetos tem um método data, o nosso formulário tem um método data, que ele define ali qual é o estado do componente, e precisamos agora definir o estado da aplicação.

[02:32] É isso o que vamos fazer agora, instalando o Vuex, que será o nosso provedor, a nossa store, o nosso armazenamento, que vai cuidar do estado de toda a nossa aplicação para nós. Vamos lá, eu vou aqui adicionar um novo terminal, vou abrir um terminal novo, e vou pedir para o npm instalar para mim npm i vuex, só que a diferença é que como estamos usando o Vue 3, queremos o vuex@next.

[03:02] Essa é a versão do Vuex compatível com o Vue 3. Vou dar um "Enter" aqui, ele vai começar a instalar o Vuex para nós, vai demorar um pouco, daqui a pouco ele estará disponível para começarmos a configurar. Assim que terminar nós voltamos aqui.

[03:19] Pronto, agora já instalamos o Vuex e podemos começar a configurar o nosso estado global. Vamos fechar tudo o que está aberto e, dentro da nossa pasta "src", vamos criar uma pasta nova.

[03:32] Vamos chamar essa pasta de "store", que é o nome comumente dado quando estamos tratando de estado, principalmente relacionado ao Vuex. O store será o nosso provedor, a nossa fonte de verdade. Vamos criar dentro desta pasta “store” um arquivo "index.ts", ele será responsável por definir e configurar esse estado para nós.

[03:56] Então a primeira coisa que vamos fazer é pensar no que precisamos nesse momento. Nós precisamos de um estado que de alguma forma possua uma lista de projetos. Vamos definir uma interface que represente isso. Uma interface que será o estado da nossa aplicação, interface Estado {}. Essa interface, ela vai garantir que exista uma lista de projetos, projetos:.

[04:22] Será uma lista de projetos: IProjeto[]. Já fiz o import aqui para mim. Repare que quando ele auto importou ele colocou um arroba, esse arroba, ele é um apelido, é um alias para a pasta "src". Quando ele coloca @/, todo o caminho a partir da primeira barra é como se eu estivesse em "src", e ele completou para nós.

[04:44] Pronto, nós temos o nosso estado, que começará inicialmente com a lista de projetos. Agora precisamos exportar essa store. Vamos criar aqui export const store =. Como nós criamos e definimos essa store? Vamos chamar uma função chamada = createStore. Ele já vai auto importar para nós o createStore do Vuex.

[05:15] Vamos invocar essa função. Esse create store, ele será tipado, nós vamos inferir o tipo dele aqui, que ele é justamente uma store do nosso estado, = createStore>Estado>({}), e vamos passar a configuração do nosso estado para ele. Então, a primeira coisa é como será o estado inicial, o estado padrão, state: {}.

[05:42] Aqui nós conseguimos já acessar a nossa lista de projetos. Repare que o próprio Visual Studio Code, ele está fazendo o auto complete para mim, porque ele sabe que esse estado é um estado da nossa aplicação, essa interface Estado. Então, temos a lista de projetos. Vamos começar, vamos iniciar com alguns projetos. Eu vou fazer um "Ctrl + C" da minha cola e vou trazer para cá.

[06:05] Vou pedir para ele formatar o documento, fechar o terminal, para ficar com o espaço aqui na tela, pronto, agora sim, nós temos o nosso estado inicial com a lista de projetos. Então temos os projetos de 'TypeScript', 'Vue' e 'Vuex'.

[06:22] Está bom para começarmos. Agora precisamos dar acesso a configurar, de alguma forma, essa store nos nossos componentes. Isso muda um pouco na versão 3, nós precisamos definir, além da store, uma chave de acesso. Através dessa chave de acesso o nosso componente conseguirá pegar e obter a nossa store, que nós configuramos. Como fazemos para configurar essa chave de acesso?

[06:50] Vamos já começar exportando uma constante, vamos chamar ela de export const key, de chave. É a chave para a nossa store, para o nosso cofre, para o nosso vault. E nós vamos criar um objeto do tipo export const key: InjectionKey. Já vamos fazer o import dele aqui. Esse InjectionKey, ele vem do Vue, import { InjectionKey } from 'vue';.

[07:19] Pronto. Esse injection Key, ele será um inject para onde? Para uma store, export const key: InjectionKey<Store<>>. Então ele já auto completou aqui para mim, fez o import da store no Vuex. Essa store, ela é de um tipo, que é esse, o nosso Estado, essa store representa o nosso estado, <Store<Estado>>.

[07:38] Como vamos fazer para definir que valor vamos colocar dentro dessa key? Nós vamos usar um symbol, export const key: InjectionKey<Store<Estado>> = Symbol(). Isso vai configurar para nós uma chave de acesso, sempre que o nosso componente pedir acesso à store, ele precisa passar a chave.

[08:05] Vamos agora para o nosso formulário e vamos tentar injetar de alguma forma essa store dentro dele. Vamos ao menu lateral, no nosso "components > Formulario.vue" - dentro da pasta "src", pasta "components > Formulario.Vue". Agora sim, nós precisamos injetar essa store. Como fazemos isso?

[08:32] Nas outras versões, nas versões mais antigas, a store estava disponível por padrão em todos os componentes. Nós fazíamos um this.store e estava lá, disponível para acessarmos. Agora não é mais assim, nós precisamos configurar e precisamos dizer para o Vue explicitamente colocar e configurar a store nesse componente. Então vamos fazer isso.

@@03
Modificando o estado

[00:00] No nosso componente de formulário nós vamos mexer em outro método, é a primeira vez que vamos mexer nesse método, que chama setup.
[00:09] Então vamos configurar aqui, fazer o setup do nosso componente, vamos preparar a montagem do nosso componente. O que queremos aqui, logo de cara? Queremos a nossa store, const store =. Como trazemos essa store para cá? Nós precisamos importar um gancho, um hook, chamado = useStore().

[00:38] Vamos fazer aqui, vamos ver se ele vai auto importar para nós. Ele não importou, então vamos importar aqui, na mão, import { useStore } from 'vuex';. Perfeito, fizemos o import do useStore. Isso não é suficiente, precisamos passar também a chave de acesso. Quando fazemos o uso de useStore, temos que passar também a chave de acesso.

[01:05] Então vamos passar essa chave, const store = useStore(key), vamos ver se ele vai auto completar para nós, não completou. Vamos lá, import { key } from e usamos aquele atalho, o arroba, que é o nosso “src", from '@/store';. Pronto, ele já configurou. Já temos o acesso à nossa store aqui. Como vamos fazer para retornar isso para o nosso componente?

[01:37] Aqui, não precisaremos fazer nada inicialmente com a store, só queremos ter acesso à lista de projetos. Então vamos fazer um return {} de um objeto. Tudo o que retornamos, no setup, ficará disponível para o nosso componente. E o que queremos fazer é retornar a lista de projetos. De onde virá essa lista de projetos? De onde ela vem?

[02:02] Ela virá do projetos: store.state.projetos. Mas essa lista é dinâmica e projetos podem ser adicionados a ela. Então não basta retornarmos isso tudo, temos que encapsular os projetos dentro de uma função do Vue, chamada computed, projetos: computed(store.state.projetos), que ele vai representar o nosso estado computado, as nossas propriedades computadas.

[02:33] Ele recebe por parâmetro uma função, e essa função sim vai retornar o que nós precisamos, projetos: computed( ()=> store.state.projetos). Então importamos a store usando a chave, retornarmos os projetos de forma computada. Agora sim, podemos utilizar os projetos dentro do nosso formulário.

[02:57] Eu vou diminuir aqui, temos uma coluna ocupando sete porções da nossa tela, eu vou diminuir ela para cinco, <div class="column is-5". Vou trazer também o nosso select. Eu vou fazer um "Ctrl + C"

      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>COPIAR CÓDIGO
"Ctrl + V" aqui, para não digitar um monte de HTML, e você vai ver junto comigo. Então, logo aqui do lado do nosso formulário aqui, nós temos um input que representa o nome da tarefa.

[03:30] Teremos também uma coluna com três porções, representando três porções do tamanho dela. Teremos um model que representa o ID do projeto, então já podemos adicionar no nosso data (). Nós retornamos a descricao: ' ', e teremos o idProjeto: ' ',, que será uma string também.

[03:52] Pronto, agora estamos fazendo o bind do nosso select, que tem um for, ele faz uma repetição, e, para cada projeto que existe aqui, ele vai montar uma option, ele vai montar um select para nós, e ele vai ficar aqui, relacionado a esse objeto, o idProjeto. Agora, na hora que formos salvar, precisamos encontrar e trazer esse objeto para cá. Então vamos ajustar a nossa interface de tarefa - na nossa "interface > ITarefa.ts".

[04:24] Além de possuir a duração em segundos e a descrição, teremos também um projeto. Esse projeto é do tipo projeto: IProjeto. Ele já nos fez um import. Vamos agora definir esse projeto na hora de salvar a tarefa. Em "Formulario.vue", em methods, o nosso projeto, o projeto da tarefa, será o que? Nós vamos encontrar, vamos buscar no nosso array de projetos o projeto relacionado.

[04:55] Então será projeto: this.- this é esse componente, projetos é a computed que nós definimos no método de setup, e pedimos para ele encontrar para nós. Então fazemos um find e, para cada projeto, eu quero procurar o projeto cujo o ID é igual ao meu ID aqui, projeto: this.projetos.find(proj => proj.id == this.idProjeto). Pronto.

[05:23] Agora sim, estamos procurando o projeto cujo ID é o ID selecionado no nosso selec. E, quando formos criar a nossa tarefa, ela já estará relacionada a esse projeto. Vamos salvar aqui, vamos abrir o console para vermos se isso tudo o que fizemos está funcionando, ver se ele está reclamando de alguma coisa.

[05:46] Ele fez o build, vou no meu navegador, vou atualizar a página - agora sim, vou atualizar a página, mas eu quero na lista de tarefas. Tarefas, vamos ver o que ele está reclamando. Vamos ver aqui. Ele está dando erro aqui, porque é o seguinte, ele já até grifou aqui para nós.

[06:17] O state projetos não está conseguindo encontrar a nossa store. Por que isso aconteceu? Aqui, no código, nós definimos e montamos tudo, só que não pedimos para o Vue utilizar essa store. Da mesma forma que fazemos o uso do roteador, vamos fazer o uso da store. Então no nosso "main.ts", logo após fazer o .use(roteador), vamos fazer o use da store, .use(store), ele vai completar aqui para nós.

[06:53] Ele fez o import já do store, import { store } from './store'. E precisamos também da chave, .use(store, key). Ele vai fazer o import também. Agora sim, fizemos o import da key e da store, e pedimos para o Vue, na hora de criar o nosso app, ele utilizar essa store nova que acabamos de criar. Agora sim, já sumiu o erro no navegador, repare aqui, não temos mais erros no console.

[07:16] Vou aumentar a tela um pouco, seleciono o projeto. Agora sim, temos acesso à lista de projetos direto do nosso formulário, sem ficar fazendo prop drilling, sem ficar passando prop de um lado para o outro. O que precisamos fazer agora é quando cadastrar um projeto, cadastrar nesta lista, e não mais naquele estado global. É isso o que vamos fazer na próxima aula. Te vejo lá.

@@04
Setup da store

[00:00] Repare que nós já conseguimos adicionar a funcionalidade, tanto relacionada às tarefas quanto relacionadas aos projetos, de uma forma bem tranquila, graças ao nosso roteador, que ele configura qual a visualização, dada a rota atual. Na rota de projetos, ele vai trazer a visualização de projetos, na de tarefas, ele traz a view de tarefas.
[00:22] Inclusive agora nós já temos disponível a lista de projetos que definimos inicialmente. Só que essa lista ainda está estática, estamos injetando ela na nossa visualização de tarefas, mas quando cadastramos um projeto novo, ele não está indo para essa lista. É isso o que vamos fazer agora. Vamos colocar a mão na massa, vamos para o nosso VS Code.

[00:45] O que vamos abrir é o nosso "indes.ts" dentro da pasta "store". De cara, o que vamos fazer é limpar o estado inicial. Nós estávamos criando vários projetos, por padrão, nós criamos o Typescript e o Vuex. Vamos tirar, o nosso estado padrão será uma lista de projetos vazia.

[01:08] Já que é aqui que definimos o nosso estado, seria muito interessante que adicionar um projeto novo também ficasse na nossa store. Ela que precisaria conter a regra responsável, ela que seria capaz de adicionar um projeto novo na lista de projetos do nosso estado. Como fazemos isso?

[01:29] Assim como definimos o state da nossa aplicação nós vamos definir também as mutações, mutations: {}. Ele também é um objeto e ele vai receber várias funções, quantas nós precisarmos. Essas funções sim, tem o poder de adicionar coisas ao estado. A primeira mutação que vamos criar será a mutação 'ADICIONA_PROJETO'(){}, tudo em caixa alta, porque é a convenção de mutações.

[02:00] O nome das mutações é em caixa alta por convenção. Essa mutação é uma função. O que queremos receber por parâmetro? Eu quero receber, por parâmetro, o nome do projeto, (nomeDoProjeto: ). O nome do projeto é uma string, (nomeDoProjeto: string).

[02:19] Além disso, eu quero ter acesso ao estado da aplicação, então o primeiro parâmetro será o estado, 'ADICIONA_PROJETO'(state, nomeDoProjeto: string){}. Isso quem injeta para nós é a própria store, é o próprio Vuex. E o nome do projeto vamos chamar, quem ficará encarregado de passar o nome do projeto é quem quiser adicionar esse projeto novo.

[02:43] Pronto. O que vamos fazer aqui? Vamos criar um projeto novo, const projeto = {}, ele será um objeto literal, já vamos colocar o tipo dele aqui, ele é um objeto do tipo }as IProjeto, é a interface que ele vai implementar.

[03:00] Aqui, dentro desse objeto, ele já vai auto completar para nós. O ID nós vamos continuar usando aquele id: new Date().toISOString(),, para representar o nosso ID. E o nome desse projeto, ele será o que recebemos por parâmetro, nome: nomeDoProjeto,. Já com o projeto novo criado aqui, um objeto do tipo projeto, o que queremos fazer é adicionar ele.

[03:31] Dentro do state nós temos a nossa lista de projetos, ele é um array, então ele tem um método push, e vamos colocar o projeto novo lá dentro, state.projeto.push(projeto). Repare, nós limpamos o nosso estado inicial, a nossa lista de projetos agora começa vazia, criamos uma mutação e, através dela, quem quiser adicionar projetos ao nosso estado, ele terá que adicionar desse jeito.

[03:57] Essa é a forma que ele tem, a regra aqui, a dona dos projetos, é a nossa store, é o Vuex. Ele sabe como adicionar e ninguém mais. O que precisamos fazer agora é, na nossa visualização de "Projetos.vue", temos um formulário lá dentro, e esse formulário chama o método de salva. O que queremos fazer é: ao salvar queremos chamar aquela mutação.

[04:21] Então vamos colocar aqui a mão na massa, agora na nossa visualização de "Projetos.vue". O que queremos fazer é algo que nós já aprendemos como fazer, que definir o setup do componente. Esse setup() {} aqui que conseguimos importar a nossa store, então vou fazer const store.

[04:39] Repare comigo, nós, para adicionar a store, montar a store no setup, temos que fazer o use do using, importarmos o use store do Vuex, e importar que definimos que toda a vez temos que fazer isso, e pode ficar um pouco moroso, um pouco confuso de onde vem esse use store.

[05:02] Então vamos dar uma refatorada e vamos criar uma forma nossa, ao invés de utilizar o Vuex, de fazer o uso da store. Então vamos lá, dentro do nosso repositório, temos o "src > store > index.ts". Nós vamos exportar uma função, vamos chamar essa função de export function useStore():, é o nosso useStore.

[05:30] O que ele vai retornar? Já vamos typar. Ele vai retornar uma store do nosso estado, : Store<Estado>. Então o nosso useStore retorna uma store que é o nosso estado aqui, que inicialmente tem a lista de projetos. E o que ele vai retornar? Nós precisamos retornar agora o use store do Vuex, passando a key.

[05:57] Então vamos fazer um import da key. Nós já estamos importando o store, o create store e agora o use store, import { createStore, Store, useStore ] fom "vuex";. Aqui embaixo vamos retornar justamente ele que acabamos de importar, o use store, passando a chave, return useStore(key).

[06:16] Repare que aqui nós já temos a chave, o nome agora está conflitando, nós temos o use store do Vuex e temos o use store que nós estamos criando. Então vamos criar um apelido aqui. O use store do Vuex, nós vamos criar um apelido para ele, e vamos chamar de import { createStore, Store, useStore as vuexUseStore } from "vuex";.

[06:41] Pronto, agora separamos, vamos ajustar no código, return vuexUseStore. Pronto. Então o nosso use store não precisa receber a chave por parâmetro, mas ele já retorna a store passando a chave. Agora vai simplificar a nossa vida. Voltando o nosso setup, a store vai receber const store = useStore, que vamos importar, repare, da nossa definição e não mais do Vuex.

[07:10] Não vamos usar o use store do Vuex, vamos usar esse que acabamos de criar. Import feito, o store já está configurado dentro do nosso método de setup do "Projetos.vue", e queremos disponibilizar ele no nosso componente. O que fazemos? Damos um return {} de um objeto no setup. E esse objeto terá a store.

[07:36] Agora já temos acesso à store dentro do nosso componente. O que queremos fazer? Ao invés de criarmos esse projeto na mão, nós queremos vir no methods e chamar this.store. - como chamamos uma mutação? Como chamamos uma mutation? Nós chamamos ela através do método .comit().

[07:56] Esse método comit, ele vai receber dois parâmetros. O primeiro parâmetro é o nome da mutation, é o nome da mutação. Em caixa alta, ('ADICIONA_PROJETO', ). O segundo parâmetro que esperamos nessa mutation é o nome do projeto em si, ('ADICIONA_PROJETO', this.nomeDoProjeto), é o nome da variável que temos no nosso estado local, que está vinculado ao input do nosso formulário.

[08:21] Logo após fazer esse comit, ele vai cadastrar. O que precisamos mudar agora é parar de usar esse projetos do estado local, já podemos remover o import da interface que não precisamos mais, e já sabemos como fazer para disponibilizar a lista de projetos para o nosso componente, projetos, vamos retornar ele do nosso método setup. O que ele recebe? O que vamos retornar nele?

[08:57] Aquele método do Vue, projetos: computed(). Repare que ele já nos fez o import, import {computed, defineComponent} from "vue";. O computed, ele recebe uma função, então vamos implementar uma arrow function, computed(() => ). O que eu quero retornar? (() => store.state.projetos).

[09:14] Então o Vue vai ficar de olho nessa lista de projetos e vai renderizar o componente quando a nossa lista de projetos mudar. Refatoramos o método de salvar, removemos o projeto, a lista de projetos do estado global, e definimos no setup do nosso componente. Agora o que precisamos fazer é testar e ver se isso continua funcionando.

[09:37] Vamos para a nossa aplicação, vamos dar uma recarregada na página. Vou salvar aqui o projeto, ele já trouxe preenchido aqui para mim, "Plano de estudos". Salvei, apareceu na lista. Vou criar aqui "Alura Tracker", vou mandar salvar, apareceu aqui na lista. Vou criar um novo projeto, pode ser "Estudar Typescript". Pronto.

[10:07] Nós temos o plano de estudos, temos o Alura Tracker e temos o nosso projeto de estudar Typescript. Agora, se formos para a nossa lista de tarefas, no nosso select nós já temos a listagem de projetos que nós cadastramos.

[10:24] Temos o plano de estudos, o Alura Tracker e o Typescript. Agora sim, está linkado com o que vemos na visualização dos projetos, está linkado com o que nós vemos no nosso formulário de tarefas. Isso sem fazer aquele prop drilling, passar a prop de um lugar para o outro, do pai para o filho, para o neto, só para ele ter acesso.

[10:45] Agora, quem quiser ter acesso à lista de projetos vai no setup, configura a store e pega os projetos que estão dentro do state. Se alguém quiser adicionar um projeto novo, é só através da nossa mutação, que é a nossa fonte de verdade.

[11:00] Então está tudo bem centralizado, cada parte da nossa aplicação está com a responsabilidade bem definida, estamos prontos para seguir evoluindo o Alura Tracker e adicionar ainda mais funcionalidade. Vamos nessa, te vejo na próxima aula.

@@05
Vuex mais a fundo

[00:00] É muito interessante utilizar o Vuex, ele é um mix de padrão de gerenciamento de projeto e biblioteca, então ele une os dois, tanto o padrão quanto uma forma de implementação dessa forma, dessa gestão de estado. Ele vai cuidar da nossa aplicação, do estado da nossa aplicação, como uma fonte única de verdade.
[00:28] Se eu quero, no nosso caso, uma lista de projetos, é lá que eu vou pegar. Se eu quero adicionar um projeto novo, é através da mutação. Então é tudo muito bem controlado e bem previsível. Se eu quero entender como um projeto novo foi criado, eu vou em um único lugar, na minha fonte de verdade.

[00:47] Mas nem tudo são flores, utilizando o Vuex. Repare que para ter uma coisa simples, vamos supor que agora vamos alterar um projeto ou excluir um projeto, nós teremos que ficar sempre implementando uma mutation para cada operação. É um pouco mais verboso cuidar da nossa aplicação utilizando esse padrão, ou seja, nós precisaremos escrever um pouco mais de código.

[01:14] Tendo isso em vista, é bom conhecermos algumas alternativas. Nem sempre o Vuex pode ser aquela bala de prata, ou toda aplicação vai precisar do Vuex. Nós temos, principalmente agora, com o Vue na versão 3, boas alternativas que você pode conhecer, estudar e ver qual é a melhor situação, dado um cenário.

[01:39] A primeira coisa que podemos pensar é no store pattern. O store pattern é um padrão de armazenamento que cria variáveis reativas. Nós podemos, de repente em um cenário simples, nós podemos utilizar essas variáveis reativas ao invés de trazer tudo para dentro da store, para dentro do Vuex.

[02:05] Além disso, temos um provide/inject, nós criamos um provedor. Tudo o que disponibilizamos neste provedor nós podemos injetar em qualquer um dos filhos dele, não importando na geração, então aquele lance de fazer prop drilling, passa do pai para o filho, para o neto, só porque o neto precisa, nós não precisamos mais fazer isso, temos uma alternativa.

[02:28] Se você der uma olhada na documentação, você vai ver como você pode implementar esse provide/inject, não é o nosso caso aqui. E, por último, tem a Pinia, outra forma, outra biblioteca que implementa o padrão de gerenciamento de estado.

[02:47] Você pode, ao invés de utilizar o Vuex, você usar o Pinia. Ele tem uma abordagem um pouco diferente, se você ainda não conhece, recomendo você dar uma olhada, dar uma passada de olho, é sempre bom termos o nosso cinto de utilidades sempre bem cheio, para sabermos escolher melhor o que vamos usar em cada situação.

[03:07] Aqui, no nosso curso, vamos usar o Vuex, ele vai atender bem às nossas necessidades, de forma que a organização das nossas tarefas e projetos fique bem tranquila e bem coesa. Nós seguiremos usando o Vuex, mas não deixe de conhecer e dar uma passada de olho no que esses outros métodos fazem.

[03:29] Dê uma olhada nas variáveis reativas, no provide/inject e no Pinia. Coloque esses métodos no seu radar, no seu cinto de ferramentas, para você estar sempre antenado e saber escolher a melhor opção para o melhor cenário.

@@06
Para saber mais: Provide/inject com Composition API

Essa é mais uma forma de evitar o famigerado prop drilling. Utilizando o provide/inject, podemos disponibilizar um provedor com o estado que queremos compartilhar e injetar em qualquer um de seus filhos, sem a necessidade de ficarmos passando via prop de pai para filho e para neto…
Mais uma vez, temos uma documentação rica em detalhes, explicando como isso pode ser utilizado em nossas aplicações Vue.

https://v3.vuejs.org/guide/component-provide-inject.html#working-with-reactivity

@@07
Para saber mais: Actions x Mutations

Você vai perceber, analisando as documentações do Vuex, que existem actions e mutations. Existe uma linha tênue separando os dois;
Em vez de mudar o estado, as ações confirmam (ou fazem commit de) mutações.
As ações podem conter operações assíncronas arbitrárias.
Então, uma chamada à uma API HTTP, por exemplo, ficaria numa action e uma mutation seria chamada caso a requisição seja realizada com sucesso.

@@08
Bugfix

Nem tudo é o que parece! Repare nessa implementação que foi feita para adicionar dados ao estado controlado pelo Vuex:
  // restante do código omitido
  methods: {
    salvar(): void {
      const projeto = {
        id: new Date().toISOString(),
        nome: this.nomeProjeto,
      };
      this.store.state.projetos.push(projeto)
    },
  },
  // restante do código omitidoCOPIAR CÓDIGO
Selecione uma alternativa

Como store é definida no setup do componente, não é possível acessá-la dentro da instância do componente utilizando this.
 
Alternativa correta
Para alterar o estado, uma mutation deve ser implementada na store e chamada pelo componente.
 
Alternativa correta! Exatamente! Somente mutations podem, de fato, alterar o estado da aplicação.
Alternativa correta
Arrays são imutáveis e não podem receber novos elementos.

@@09
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a pr

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@10
O que aprendemos?

Nessa aula, você aprendeu:
Instalar e configurar o vuex num projeto existente:
Vimos que o Vue é um framework progressivo e não vem com uma biblioteca de gerenciamento de estado instalada por padrão. Logo, instalamos e configuramos o vuex para gerir nosso estado global.

#### 08/02/2024

@03-Evoluindo o Alura Tracker

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/tracker-2/tree/aula-2

@@02
Extraindo a view do

[00:00] Nós já temos aqui a nossa listagem de projetos cadastrando projetos, integrando com a nossa lista de tarefas, e precisamos agora implementar essa funcionalidade e permitir que o usuário edite um projeto. Dado um projeto qualquer que ele cadastrou, eu vou cadastrar aqui, por exemplo, o "Plano de estudos", que quero criar um router link aqui, um link, que ele vai clicar e me permitir editar o nome desse projeto.
[00:28] O que precisamos fazer para permitir que isso aconteça, de forma coesa? A primeira coisa que precisamos, logo na largada, já identificar e trabalhar é a parte de roteamento. Repare comigo que na nossa view de projetos, nós temos a responsabilidade de cadastrar um projeto e editar esse projeto - e listar esse projeto, desculpe.

[00:53] Então precisamos começar a separar essas responsabilidades. Então vamos extrair essa lógica e deixar uma visualização para o formulário de projeto e outra para a listagem de projetos. Vou começar a fazer isso aqui, vou copiar o componente como ele está e vou criar uma pasta nova, dentro de "views", chamada "Projetos". Eu vou colar o "Projetos.vue" lá dentro.

[01:18] Essa view de projetos, que acabamos de copiar, eu vou renomear ela para "Formulario.vue" e também vou mudar o nome dela para name: "Formulario",.

[01:31] Agora, o que podemos fazer? Tudo o que estiver aqui, que não está relacionado com o nosso formulário, ou seja, com a parte de incluir um novo projeto, nós vamos deletar. Nós vamos deletar a tabela que lista os projetos, vamos deletar também a parte de computed property que retorna a lista de projetos.

[01:51] Podemos também deletar o import desse computed, que não usamos mais. Já limpamos e temos o nosso formulário. Agora vamos fazer o inverso, vamos limpar a nossa view de projetos, "Projetos.vue". Na nossa view de projetos, vamos deletar todo o formulário e tudo o que estiver relacionado a cadastrar um projeto novo.

[02:13] Então o estado local, com o nome de projeto, nós não precisamos, o método com o salvar nós não precisamos, e também não precisamos retornar a store para ela ficar disponível para o componente, só vamos retornar a lista de projetos. Vamos salvar esse código e vamos voltar para o nosso "Formulario.vue".

[02:31] Agora, logo na sequência, depois que nós cadastrarmos um projeto novo, nós vamos redirecionar o usuário para a lista de projetos. Nós precisamos programaticamente redirecionar e trocar a rota. Como fazemos isso? Quando usamos o view router, podemos ter acesso à instância dele em qualquer componente, ele fica disponível por padrão.

[02:55] Então podemos chamar this.$router, que significa que é o nosso roteador, this.$router.push(' '). Esse push recebe uma rota nova, que queremos direcionar o usuário. Nós vamos redirecionar ele para ('/projetos'), que é a URL que temos cadastrada, que lista os projetos.

[03:15] Agora vamos para o nosso "roteador > index.ts". Já temos a rota /projetos', que define a lista de projetos cadastrados pelo usuário. Agora vamos criar duas novas rotas, uma para o usuário conseguir continuar criando projetos, e outra para ele fazer a edição. Vamos lá, vou copiar e colar, vou criar uma rota nova, será path: '/projetos/novo',.

[03:40] O nome dela vai ser name: 'Novo projeto', e o componente vai ser component: Formulario. Também vou criar uma rota para fazermos a edição de um projeto. Como fazemos isso?

[03:56] Nós precisamos aqui, no segmento da URL, receber aquele ID, aquele new data que pegamos uma string, com um timestamp da hora atual. Nós precisamos receber ele na URL e através desta URL, deste segmento da URL, pegar esse valor e deixar disponível no nosso componente. Como fazemos isso usando o roteador?

[04:21] Lá no segmento do caminho, do path que estamos definindo, nós vamos colocar dois pontos, que indica que isso é um segmento dinâmico. Vamos chamar e vamos dizer o nome desse segmento. Eu vou dizer que o nome desse segmento é path: '/projetos/:id', e vou alterar o nome da rota para name: Editar projeto',.

[04:42] Todas as duas rotas vão usar o mesmo componente de formulário, agora está faltando importar ele. Vou aqui em cima, logo no começo do meu arquivo, import Formulario from '../, volta uma pasta, from '../views/Projetos/Formulario.vue'.

[05:02] Ele já achou, e temos agora a rota para o projeto novo e para editar um projeto existente. Agora precisamos criar links para esse cara. Vamos pegar e criar aqui, logo embaixo do <h1>, eu vou trazer a minha cola, para eu não ficar digitando um monte de HTML. Então aqui, logo embaixo do <h1>, eu vou pegar a minha cola do router link

<router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>COPIAR CÓDIGO
e vou colar.

[05:29] Logo que passamos o título da página, que é projetos, inserimos um router link, ele tem a propriedade to, nós já usamos ela na nossa barra de navegação, e ele vai linkar para /projetos/novo. E tem um ícone, que é um ícone de mais, que ele vai indicar para o usuário que é para ele cadastrar um novo projeto.

[05:51] Além disso, na nossa tabela, vamos criar um <th> novo, que será as Ações, as ações que estão disponíveis para o usuário. Vou criar aqui também, no nosso <tbody>, <tr>, um novo <td>, que vai conter o link. Também vou pegar da minha cola:

<router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>COPIAR CÓDIGO
para não ficar digitando aquele monte de HTML. Ele será um router link, trouxe para cá um router link.

[06:16] Ajustei a indentação. Repare comigo que ele é um router link, que ele vai linkar o usuário para '/projeto/${projeto.id}, e a URL será dinâmica, mudando de acordo com o ID do projeto. Vou salvar aqui, vamos ver se esse monte de alterações que nós fizemos funciona. Dividimos uma view em duas, separando o formulário da tabela, e criamos as rotas novas, uma rota para criar um projeto novo e outra para editar um já existente.

[06:47] Vou minimizar o VS Code, no navegador eu vou limpar o console, vou recarregar a página, limpo ele novamente. Se eu clicar em novo projeto, vamos cadastrar o "Plano de estudos", salvei.

[06:59] Ele já inseriu na lista de projetos, exatamente como ele fazia antes, redirecionou o usuário para essa listagem e já adicionou o ícone com o link para editar o projeto. Se eu clicar no ícone, repare que ele já me traz para a visualização do formulário. O que está faltando agora é, de alguma forma, receber esse ID no meu formulário e buscar por esse projeto, para eu trazer e carregar o nome naquele input. Então vamos fazer isso.

@@03
Editando um projeto

[00:00] Vou vir no meu "Formulario.vue" e precisamos definir que esse meu formulário, ele vai receber, de alguma forma, um ID. Como eu gostaria que isso funcionasse? Eu queria receber isso via uma props: {}, porque esse ID, ele está vinculado ao meu componente, à minha visualização, como se ele fosse uma propriedade.
[00:21] Eu quero que essa propriedade se chame id: {}, que é o ID do projeto, e eu vou dizer que o tipo dessa propriedade é type: String. Então temos uma propriedade que ser chama ID e é do tipo string.

[00:36] Como linkamos agora os segmentos de URL a uma propriedade do nosso formulário? Voltando no roteador, onde definimos os segmentos de URL dinâmicos, vamos dizer que props: true.

[00:55] O que isso diz para o roteador? Que esse segmento :id vai pegar o nome que definimos, o ID, e vai injetar na nossa visualização, como se fosse uma propriedade do componente. Eu salvei, agora teremos acesso a esse ID. No mounted () {}, ou seja, quando esse componente for montado, que é justamente o método mounted que o Vue nos permite implementar, faz parte do ciclo de vida do componente.

[01:24] Então montei esse componente, o que eu vou olhar? Eu vou olhar se eu tenho o ID. if(this.id), ou seja, se eu tenho o ID, o que eu quero fazer? Eu quero tentar localizar um projeto, const projeto =. Vai receber o que? Um = this.store, que eu já tenho disponível aqui, porque já fizemos isso no setup, = this.store.state.projetos.find() para ele encontrar.

[01:51] Eu quero encontrar um projeto cujo ID seja igual ao ID que eu tenho na minha propriedade, (proj => proj.id ==this.id). Como usamos o Typescript, o que vamos fazer? Vamos dizer que o nosso estado local, que é o nome do projeto, então this.nomeDoProjeto = vai receber o projeto o que? = projeto.nome.

[02:20] E se, por algum acaso - repare que o Typescript, ele vai até reclamar aqui, esse projeto possivelmente pode ser undefined, ele pode não existir. O find que você está executando pode não retornar nada. Então nós vamos logo antes do .nome, nós vamos colocar uma interrogação, this.nomeDoProjeto = projeto?.nome.

[02:42] Isso quer dizer que se eu não tiver projeto, ele não vai quebrar, ele não vai tentar pegar nome de undefined. Repare que ele jogou o erro para o outro lado da atribuição, ele vai falar: string ou undefined não é a mesma coisa que string. Como resolvemos isso? Se ele não tiver projeto, vamos colocar aqui um ou uma string vazia, || ' '.

[03:09] Então se ele tiver projeto.nome, ele vai atribuir, senão ele vai colocar uma string vazia ao invés de undefined. Vamos testar para ver se isso tudo funciona. Salvei, voltei para a minha lista de projetos no navegador, vou cadastrar um projeto novo, "Plano de aula", salvei. Vou cadastrar outro projeto, "Vuex - estudando e implementando", salvei. Já trouxe os dois aqui, está bem bacana.

[03:33] Se eu clicar em editar, ele não me trouxe, vamos ver o que aconteceu. Vamos dar uma olhada aqui, projetos, editar, repare, estamos entrando, mas por algum motivo ele não está dando erro no console.

[03:48] E não está nos trazendo o projeto. Vamos dar uma olhada aqui no código. Vamos dar um console.log(projeto) nesse projeto aqui, para ver se ele está, de alguma forma, encontrando esse projeto.

[04:05] Vou atualizar o navegador, vou em "Projetos", vou editar. Ele não está dando o console. Pode ser que ele esteja com o projeto desatualizado. Vamos testar para ver se isso vai resolver. Vou atualizar a página, novo projeto, "Plano de estudo", salvei. Cliquei para editar, agora sim.

[04:23] Estava faltando carregar a página, nós não fizemos nada de errado. Vamos apagar aquele console.log, já vimos que está funcionando. Apaguei no VS Code, voltei para o navegador. Vamos em "Projetos", novo projeto, "Vuex - estudando e implementando". Salvei, cliquei em editar, ele já está identificando que existe um ID, ele vai e busca o projeto, preenche o input.

[04:46] Se vamos em "Projetos > Novo projeto", o novo não cai naquela URL que definimos, que é "/:id", ele não faz nada. Nós já estamos prontos para implementar o método de edição. Vamos para lá, para terminar, fazer e concluir a edição de um projeto. De volta ao VS Code, o que vamos fazer aqui?

[05:07] Quando o usuário mandar salvar, o que vamos fazer? Nós já sabemos que quando o usuário está editando, existe um ID, se não existe, ele está cadastrando. O que vamos fazer, dessa forma? Vamos fazer o if else no methods. Se eu tenho o ID, eu vou fazer uma edição, if (this.id) {}, //EDIÇÃO.

[05:35] Se eu não tenho um ID, ou seja, else {}, eu vou fazer o comit do adiciona projeto. Só que nós ainda não criamos a nossa mutation que altera um projeto, vamos criar ela, vamos para a nossa "store > index.ts", vamos criar mais uma mutation, 'ALTERA_PROJETO'().

[06:03] Essa mutation recebe um state e recebe um projeto inteiro, vamos receber desta vez um projeto inteiro, esse projeto é um (state, projeto: IProjeto) {}. O que queremos fazer com essa edição? Qual é a responsabilidade aqui, nesse método? Ele precisa encontrar o index desse projeto, de alguma forma, ou fazer a requisição para o back-end.

[06:25] No nosso caso, está tudo local, então a primeira coisa que precisamos fazer é encontrar o index, const index = state.projetos.findIndex(). Qual index? Cujo (proj => proj.id == ) ao que eu recebi na minha chamada, == projeto.id).

[06:53] Então eu quero encontrar o index desse projeto. O que vamos fazer por último? state.projetos[], na posição que acabamos de encontrar, [index] = vai receber esse projeto aqui, = projeto. Estamos substituindo o projeto que existia naquela posição por esse novo, alterado.

[07:15] Vamos ver se isso vai funcionar, precisamos chamar agora essa mutação. No nosso "Formulario.vue", se eu tenho o ID, o que eu vou fazer? this.store.comit(' '). Qual é o comit que eu quero fazer? ('ALTERA_PROJETO', {} ), passando o projeto. Então ele precisa passar o ID, que vai vir de id: this.id.

[07:43] Também vai precisar do nome alterado, o nome do projeto será nome: this.nomeDoProjeto, que é a minha variável local do meu estado local. Vamos testar e ver se continua tudo isso funcionando?

[07:58] Salvei, ele já está fazendo o check, se ele vai alterar ou se ele vai adicionar. Vou voltar no navegador, vou atualizar para garantir que está tudo funcionando. Novo projeto, "Plano de estudos". Salvei. Novo projeto, "Vuex - estudando e implementando", salvei, funcionou.

[08:17] Vou editar agora. Cliquei no editar, ele carregou para mim, "Vuex - estudando e implementado na versão 4", é isso o que quero fazer aqui, quero alterar e adicionar essa porção no nome do meu projeto. Se eu mandar salvar, repare que ele já me trouxe a lista atualizada.

[08:35] Ou seja, ele encontrou o index e substituiu o projeto com o projeto novo que eu enviei. Agora já estamos prontos para dar sequência no Alura Tracker, já refatoramos a nossa view de projetos, separamos o formulário da listagem, criamos os links do novo projeto para editar um projeto existente e implementamos a modificação.

[08:55] Estamos prontos agora para evoluir e crescer ainda mais, baseado nas funcionalidades que precisamos trazer para o nosso Alura Tracker. Te vejo na próxima.

@@04
Rotas aninhadas

[00:00] Legal, a nossa lista de projetos já está funcionando direito, nós conseguimos cadastrar e editar projetos, tudo conforme já imaginávamos. Só que está na hora de tomarmos cuidado com a experiência do desenvolvedor. Essas rotas estão agrupadas, elas estão relacionadas com o mesmo recurso. Nós devemos deixar isso bem explícito, essa correlação entre essas rotas, esse agrupamento.
[00:23] Então vamos para o nosso código, vamos dar uma olhada no nosso roteador, porque o view router nos permite fazer isso. Voltando para o nosso código, dentro de "roteador" temos o nosso arquivo "index.ts" e aqui temos as três rotas relacionadas ao recurso de projetos e são essas rotas que precisamos agrupar.

[00:44] Como vamos fazer isso? Vou dar um recortar, para colocar essas rotas em memória, e vou criar aqui uma nova entrada. Vou dizer que o caminho, o path continua sendo path: '/projetos',. O componente continua sendo component: Projetos,, nós vamos mexer nele daqui a pouco.

[01:06] Só que agora precisamos dizer que esse componente, essa rota, terão rotas alinhadas, terão rotas filhas. Nós dizemos isso através da propriedade children: []. Essa propriedade, ela espera exatamente o que? Um array, uma lista de rotas internas. Vou colar aqui as rotas.

[01:24] Uma vez que essas rotas são internas a essa, ou seja, elas são filhas, elas vão herdar todo o prefixo, todo o caminho definido na rota pai, então vamos remover das rotas internas. Removido da lista de projetos, do projeto novo e da edição de um projeto.

[01:44] Agora que já estamos parcialmente prontos, vamos começar a refatorar a nossa visualização. Dentro da nossa pasta "views > Projetos", vamos criar uma nova view chamada "Lista.vue". Vamos pegar a nossa tabela inteira, vou dar um "Ctrl + X" e vou trazer ela para "Lista.Vue", porque essa representa a lista de projetos.

[02:11] No projeto em si, o que vamos fazer? Vamos criar o nosso <template>, vamos colocar uma <div>, com a classe de projetos para agrupar <div class="projetos">, e um <h1> com a classe de title, que vem do Bulma, chamada <h1 class="title">Projetos. Vamos agora criar, logo na sequência, o nosso <script> - ele completou demais aqui, vamos apagar essa linha do meio, que não é o que queremos.

[02:41] Nós queremos fazer um import { defineComponent } from 'vue', do próprio Vue, e queremos fazer o export default defineComponent({}), invocando essa função, passando um objeto de configuração. Vamos dizer que o nome desse componente será name: 'Projetos'.

[03:08] Já vamos ajustar o interior para que o nome dele seja name: "Lista", dentro de projetos. E os projetos em si, que estão do lado de fora da pasta. Pronto, já definimos a nossa nova visualização e também já trabalhamos nas rotas alinhadas, então /projetos terá essas três rotas filhas.

[03:33] Vamos salvar e vamos voltar para o código, ver se ele está funcionando do jeito que deveria. No navegador ele já renderizou o projetos, porém ele não renderizou a lista.

[03:43] Repare, tarefas continua funcionando, o projetos está aqui, mas ele não renderiza a lista. Por que isso acontece? Ele de alguma forma identificou que já estamos trabalhando com essas rotas alinhadas, ele renderizou a nossa view base, por assim dizer, só que ele não renderizou as rotas internas, as rotas filhas.

[04:04] Por que ele não fez isso? Dentro da nossa visualização de "Projetos.vue", precisamos indicar para o view router onde ele vai renderizar as rotas filhas. Repare comigo que nós já fizemos isso antes. No nosso "App.vue", nós temos um indicador, dizendo para o view router onde ele vai renderizar as rotas.

[04:25] É a mesma coisa que temos que fazer na nossa view de projetos. Vou copiar o router view, vou trazer ele para "Projetos.vue", vou colocar ele logo abaixo do <h1>. Repare que dentro dessa classe de projetos, aqui na nossa "Lista.vue" e no nosso "Formulario.vue", temos um padding.

[04:44] Isso está se repetindo em todos os componentes. Então vamos dar um "Ctrl + X" para tirar esse estilo do "Formulario.vue", vou tirar também a classe="Projetos". Na nossa "Lista.vue" a mesma coisa, vou tirar a classe="Projetos" e tirar também o padding. Agora sim, vou colar ele na nossa visualização base de projetos.

[05:09] Vamos agora voltar para o nosso navegador e ver se agora isso está funcionando. Vou atualizar a página. Projetos e projetos - olha só, repare, na hora que configuramos as rotas, faltou ajustarmos a rota interna. O componente para a lista de projetos é o componente component: Lista. Vamos fazer o import dele, import Lista from '../views/Projetos/Lista.vue'.

[05:49] Pronto, agora sim, o nosso componente para a rota inicial é o componente de lista. Vou voltar para o nosso navegador, agora sim ele já está funcionando como deveria. Repare que ele está com o título duplicado, porque também temos o título na nossa listagem, vamos tirar ele daqui, vou remover.

[06:09] Vamos voltar para o navegador, agora sim um título só. Vamos criar um projeto novo. Repare que aqui, por algum motivo, ele não entrou na nossa rota de projeto novo. Vamos dar uma olhada, eu acho que já sei o porquê. Aqui, na hora de definir o roteamento, ele não precisa dessa barra.

[06:29] Vou salvar. Ele só terá o segmento relacionado à rota interna, a mais interna. Vamos atualizar o navegador, ver se isso vai funcionar. Exatamente como nós queríamos.

[06:39] Com a exceção desse título duplicado, repare quanta coisa nós tínhamos duplicado, que estamos conseguindo remover agora que já agrupamos esses recursos. Vamos no "Formulario.vue", nós temos esse title, vamos tirar ele fora. Salvei.

[06:55] Vou recarregar a página no navegador, agora sim está tudo funcionando. A listagem de projetos, quando venho aqui, vou cadastrar um projeto novo, "Plano de estudos", por exemplo. Salvei, ele já me redirecionou. Vamos ver se a edição continua funcionando. "Plano de estudos" e vou botar entre parênteses aqui "(vue)". Vou salvar, a edição também continua funcionando.

[07:18] Agora, vamos dar uma recapitulada no que nós fizemos. Começando pelo roteador, nós agrupamos as rotas relacionadas aos projetos, agora temos a lista para trazer a listagem dos projetos, e o formulário que segue cadastrando um novo ou editando um existente. Depois disso, o que nós fizemos?

[07:39] A nossa visualização de projetos, nós demos uma refatorada nela, trouxemos uma classe para fazer aquele padding interno para rota pai e trouxemos o título também de projetos para essa mesma rota, para essa mesma visualização. E aqui dentro, internamente, dentro do template da nossa view base, indicamos um outro router view.

[08:03] Isso quer dizer que todas as rotas filhas desta rota serão renderizadas nesse ponto do HTML. Com isso, agora temos a lista e o formulário funcionando do mesmo jeito que estava funcionando antes, com a exceção de que removemos um pouco de código duplicado e agora eles estão agrupados de forma coesa.

[08:24] Ou seja, todas as rotas relacionadas aos projetos são rotas alinhadas, são rotas filhas. Vamos agora dar uma olhada e ver como conseguimos excluir os projetos para terminarmos o nosso CRUD. Nós já cadastramos, já editamos, está faltando agora remover os projetos. Vamos lá, te vejo na próxima aula.

@@05
Excluindo projetos e organizando as mutations

Trecho de código usado aos 0:31
<button class="button ml-2 is-danger">
    <span class="icon is-small">
    <i class="fas fa-trash"></i>
    </span>
</button>COPIAR CÓDIGO
[00:00] Nosso CRUD já está quase finalizado. O que está faltando agora é adicionarmos a ação de excluir. Vamos botar a mão na massa, vem comigo, vamos implementar essa exclusão. Vamos abrir o nosso "Projetos > Lista.vue", onde temos a nossa tabela com as iterações que exibem os projetos. Logo aqui, depois do ícone que leva para a página de edição, vamos adicionar um botão com aquele ícone de lixeira, para indicar a exclusão.

[00:29] Então o que eu vou fazer? Vou pegar aqui na minha cola, para facilitar <button class="button ml-2 is-danger"> <span class="icon is-small"> <i class="fas fa-trash"></i> </span> </button>. Vou só ajustar aqui. Repare que estamos usando algumas classes do Bulma com um ícone aqui dentro. Vamos, por enquanto, salvar, ver se ele vai aparecer direito na tela.

[00:45] Salvei. Vou voltar no navegador, vamos atualizar a página. Vamos adicionar um novo projeto, "Plano de estudos". Está aparecendo a lixeira com a ação que vamos implementar agora.

[00:57] Então o que queremos fazer? Quando o usuário clicar nesse ícone, nós vamos fazer um @click="excluir". Quando o usuário clicar nesse ícone, nós vamos chamar esse método excluir.

[01:12] Só que ainda não implementamos ele, vamos implementar agora. Depois do nosso setup. Vamos chamar agora a nossa propriedade methods: {}. Vamos criar um método excluir () {}. Vamos pensar juntos aqui. Esse método precisa excluir algum projeto específico, então precisamos passar algum parâmetro para ele. Vamos fazer isso.

[01:37] No nosso excluir, onde estamos chamando o @click="excluir()", vamos passar justamente o (projeto.id). Agora sim conseguimos saber qual é o projeto que vamos excluir. Agora, no nosso método, recebemos esse excluir (id) {} por parâmetro. Como excluímos isso?

[01:59] Nós já sabemos que o Vuex, a nossa store, é fonte de dados, a fonte de verdade da informação do estado da nossa aplicação, então é através dela. Vamos chamar o this.store- repare, nós ainda não temos a store liberada para uso, porque não retornamos ela no nosso setup.

[02:19] Vamos retornar ela aqui, logo abaixo da lista de projetos, store. Agora sim, this.store.comit(). Qual é a ação que queremos comitar? Queremos comitar uma ação de ('EXCLUIR_PROJETO'). Qual projeto? O projeto cujo ID é esse, ('EXCLUIR_PROJETO', id).

[02:37] É isso o que queremos fazer. Ele já está reclamando, ele está dizendo: “esse ID, ele está implicitamente podendo ser qualquer coisa”. Não é isso o que nós queremos, nós queremos que o ID seja um string, excluir (id: string). Pronto.

[02:51] Agora já estamos prontos para ir para a nossa store implementar essa nossa ação. Vamos abrir a nossa "store > index.ts". Já temos duas mutations aqui, vamos implementar agora a exclusão do projeto. ’EXCLUIR_PROJETO'(). Ele vai receber o state como primeiro parâmetro e o segundo será o ID, que é uma string, (state, id: string), o parâmetro.

[03:15] Agora já podemos pegar e implementar a exclusão. Aqui nós faríamos uma chamada à API, alguma coisa assim. No nosso caso, está tudo em memória, então o que podemos fazer? Podemos usar o método filter do array para remover o projeto cujo ID é esse que nós recebemos.

[03:32] Então podemos dizer que o state.projetos = vai receber o que? = state.projetos.filter(), ou seja, filtre para mim. O que eu quero que você filtre para mim? Os projetos cujo o ID seja diferente do ID que você recebeu, .filter(proj => proj.id != id). Então quando alguém chamar o excluir, vamos filtrar todos os projetos cujo ID seja diferente desse e adicionar o nosso state, vai sobrepor.

[04:05] Com isso nós vamos remover aquele projeto com aquele ID. Vamos salvar agora e ver se esse monte de código que nós fizemos funciona. Voltando para o nosso navegador, vamos atualizar para garantir. Vamos criar um novo projeto, "Plano de estudos". Está ali. Vamos criar agora mais um projeto, "Vuex - estudando e implementado". Agora vamos finalmente testar a nossa ação. Pronto, a exclusão funciona exatamente como nós queríamos.

[04:39] Ela está removendo o ID do nosso array de projetos. Só que, repare, nós já implementamos várias mutations, nós temos as três mutations, as três mutações relacionadas ao projeto.

[04:54] E fizemos isso via string. Se procurarmos aqui, no nosso "Formulario.vue", temos algumas mutations sendo passadas, a ALTERA_PROJETO, a ADICIONA_PROJETO e também na nossa lista agora temos a EXCLUIR_PROJETO, tudo isso em uma string. Se nós, sem querer, digitarmos, ao invés de projeto, fazer um typo, colocar um P ao invés do O, está perto na tecla do teclado.

[05:20] isso vai nos trazer um bug e por um erro bobo, que às vezes é até difícil de debugar e encontrar a raiz do problema. Então, para evitar esse tipo de coisa, o que fazemos? Qual técnica nós utilizamos quando estamos implementando o nosso Vuex? Ao invés de receber essa string da mutação direto, nós criamos os tipos das mutações e exporta isso via constante.

[05:46] Com isso, nós resolvemos esse problema de digitar errado sem querer, ou alguma coisa do tipo. Então vamos lá, vamos copiar esses nomes das mutações de "store > index.ts" e vamos exportar as nossas constantes. Dentro de "store" eu vou criar um arquivo novo, vou chamar ele de "tipo-mutacoes.ts". Vou trazer para cá, vou colar os nomes das mutações.

[06:16] O que eu quero? Para cada uma eu quero fazer o export de uma constante e essa constante terá o mesmo nome.

[06:25] Então agora temos uma constante ADICIONA_PROJETO, uma constante ALTERA_PROJETO e uma constante EXCLUIR_PROJETO. Vou salvar. Agora, como usamos isso? Primeira coisa, vamos na nossa "store > index.ts" e vamos trazer elas para cá. Vamos remover as strings, vamos trazer elas para cá. Vamos remover a última também, trazer para cá. Vamos ver se ele vai importar para nós.

[06:53] Vou clicar aqui - adiciona todos os imports que estão faltando. Cliquei. Perfeito, ele já fez os imports do nosso arquivo "tipo-mutacoes".

[07:03] Nós precisamos fazer a mesma coisa agora para os arquivos que estamos utilizando. Então, no "Formulado.vue", vamos remover essas aspas simples, ele não é mais uma string, ele é uma constante que precisa ser importada. Vamos ver se ele vai nos ajudar aqui, se ele vai trazer o import. Deixa eu ver aqui, se ele nos ajuda. Não ajudou, vamos importar na munheca.

[07:24] O que nós queremos importar? import { ALTERA_PROJETO, ADICIONA_PROJETO } from, nós podemos usar aquele atalho arroba, que é o atalho para o "src", from '@/store/tipos-mutacoes'. Perfeito. Agora, por último, na "Lista.vue", temos que importar e ajustar o 'EXCLUIR_PROJETO’.

[07:53] A mesma coisa, import { EXCLUIR_PROJETO }, entre chaves, from, mais uma vez usando o arroba, que é o "src", from '@/store/tipos-mutacoes'. Agora, ao invés de passar aquela string digitada, estamos passando uma constante. Isso traz uma organização mega bacana para o nosso projeto.

[08:17] E evita aquele possível typo, aquele erro de digitação que pode acontecer e ficaríamos um bom tempo correndo atrás de porquê uma mutação não é comitada ou algo do tipo. E, muito importante, vamos testar se tudo isso que nós fizemos continua funcionando. Vou atualizar a página no navegador.

[08:37] Vou criar um novo projeto, "Plano de estudos", vou salvar. Ele já adicionou aqui para mim. Vamos adicionar mais um, "Vuex - estudando e implementando". Vou salvar, bacana. Vamos testar agora a edição. "Plano de estudos", vamos transformar esse plano de estudos específico para "Plano de estudos (VUE)". Já alterou, então continua funcionando.

[09:01] Podemos agora excluir um projeto, perfeito. Mesmo depois da refatoração, tudo continua funcionando como deveria, agora muito mais organizado, porque temos no nosso arquivo "tipos-mutacoes" todas as constantes e estamos exportando essas constantes justamente para evitar ter que ficar digitando essa string.

[09:21] Agora, quando queremos chamar uma mutação, fazemos um import dela e usa ela direto. Assim evitamos alguns possíveis erros e maximizamos a leitura e a organização do nosso código. Já está tudo indo muito bem, a nossa funcionalidade de projetos já está bem bacana.

[09:44] Está faltando melhorar um pouco agora a experiência do usuário. Que tal se pudéssemos, de alguma forma, notificar ele quando um projeto foi adicionado, quando um projeto foi alterado ou excluído? É isso o que vamos fazer agora. Vem comigo, vamos implementar esse ciclo de notificações e trazer para o usuário um feedback constante das ações que ele está tomando dentro do Alura Tracker. Te vejo na próxima aula.

@@06
Router view?

Marque a única alternativa correta a respeito de router-view:

É o local no qual realizamos as configurações das rotas da aplicação.
 
As configurações das rotas da aplicação são definidas em um arquivo em separado, um Array<RouteRecordRaw>.
Alternativa correta
Serve para indicar para o template da página principal da aplicação o local no qual os demais componentes carregados através de rotas devem ser renderizados.
 
Alternativa correta! Exatamente! Inclusive precisamos de um router-view para cada agrupamento de rotas.
Alternativa correta
Tem a mesma finalidade da tag a, permitindo que o usuário clique no elemento da diretiva e vá para outra rota.

@@07
Para saber mais: Organizando mutations

Organizar mutations em constantes é uma boa prática. E você pode conferir mais detalhes aqui.
Outro detalhe é que nós declaramos as funções de uma forma um pouco diferente. O nome dessa notação é "nomes de propriedades computados", e a especificação está disponível aqui.

https://next.vuex.vuejs.org/guide/mutations.html#using-constants-for-mutation-types

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer

@@08
Faça como eu fiz: Desafio - Migrando as tarefas para a store

Nossos projetos se encontram dentro do estado da aplicação, e seria interessante que as tarefas também estivessem lá. Assim, o Vuex será a única fonte de dados do Alura Tracker.

Vamos precisar das 3 mutations e o estado em si. Então, podemos criar e exportar as constantes: ``` // restante do código omitido export const ADICIONA_TAREFA = 'ADICIONA_TAREFA' export const ATUALIZA_TAREFA = 'ATUALIZA_TAREFA' export const REMOVE_TAREFA = 'REMOVE_TAREFA' ``` E a store ficaria: ``` interface State { projetos: IProjeto[], tarefas: ITarefa[], } export const key: InjectionKey> = Symbol() export const store = createStore({ state: { projetos: [], tarefas: [] }, mutations: { // mutations de projeto omitidos [ADICIONA_TAREFA] (state, tarefa: ITarefa) { tarefa.id = new Date().toISOString() state.tarefas.push(tarefa) }, [ATUALIZA_TAREFA](state, tarefa: ITarefa) { const indice = state.tarefas.findIndex(p => p.id == tarefa.id) state.tarefas[indice] = tarefa }, [REMOVE_TAREFA] (state, id: string) { state.tarefas = state.tarefas.filter(p => p.id != id) }, } }) // o campo id na ITarefa export default interface ITarefa { id: string duracaoEmSegundos: number descricao: string projeto?: IProjeto } ```

@@09
O que aprendemos?

Nessa aula, você aprendeu:
Manipular o estado;
Inserimos, editamos, excluímos e listamos os projetos.
Rotas aninhadas;
Agrupar rotas dentro de um mesmo contexto.
Tipos de mutações;
Extraímos os nomes das mutações para constantes.

##### 09/02/2024

@04-Notificando os usuários

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/tracker-2/tree/aula-3

@@02
Criando o componente

[00:00] Nosso Alura Tracker está incrível, nós já conseguimos manipular os projetos, inserir, editar e excluir. Agora precisamos criar uma camada de comunicação com o usuário. Então, conforme as ações forem tomadas, nós queremos notificar os usuários, aparecer uma mensagem se deu tudo bem, se deu algum tipo de falha na operação. É isso o que vamos implementar agora, uma notificação nossa, do jeito Alura Tracker.
[00:27] Como estamos usando o Bulma, nós já temos algo que conseguimos aproveitar. Vamos dar uma olhada na documentação do Bulma, nós temos o componente de mensagem. Esse componente de mensagem, ele já tem algum contexto. O que queremos justamente são os três principais quando se fala de notificação.

[00:45] Nós queremos notificar uma informação qualquer, uma mensagem de sucesso, por exemplo, ou um warning, ou mesmo um erro. O HTML com a marcação é justamente esse à direita. É um article com algumas classes, e é isso o que vamos implementar agora. Vamos começar voltando para o nosso projeto.

[01:09] Vamos criar um componente novo e vamos chamar esse componente de "Notificacoes.vue". Nós já sabemos como criar um componente, então criamos o nosso <template>, por enquanto vamos colocar aqui só um <h1>, que é o Notificação. Pronto. Vamos precisar também do <script>, vamos só ajustar esse skaffold aqui.

[01:39] Nós queremos é fazer o import { defineComponent }, nós importamos isso do from 'vue'. Vamos fazer um export default defineComponente({}), que é uma função que recebe um objeto de configuração. Vamos colocar aqui o nome do nosso componente de name: 'Notificacoes'.

[02:06] Nós criamos um componente já bem básico, só com o <h1>. Vamos importar e ver se ele já vai funcionar do jeito que esperamos. Como as notificações são globais, e notificações podem entrar e sair da aplicação a partir de qualquer lugar, nós podemos importar diretamente no "App.vue".

[02:29] Então aqui, vamos adicionar o nosso componente novo, <Notificacoes />. Agora precisamos fazer o import dele, import { Notificacoes } from "./component/Notificacoes.vue". E vamos dizer que ele é um componente, Components: {.

[03:04] Vamos salvar aqui. Agora esperamos que aquele <h1> que criamos na notificação apareça no HTML. Vamos para a nossa aplicação. Pronto.

[03:14] Já exibiu para nós, nós já conseguimos perceber o h1 na nossa aplicação. Mas não é isso o que nós queremos, nós queremos alguma mensagem de contexto, nós queremos indicar algo para o usuário. Vamos começar a implementar de acordo com o que pegamos na documentação do Bulma.

[03:33] Vamos criar para nós uma div, vamos já adicionar uma classe de contexto, aqui ficarão as nossas notificações, <div class="notificacoes">. Nós já vimos no Bulma como é, vamos criar um article, esse article terá uma classe chamada message e vamos começar pelo <article class="message is-success">.

[03:58] Dentro do article teremos uma div que terá uma classe message header, <div class="message-header">. Aqui pode ser um Atenção!, vamos começar aqui o texto estático. Precisamos também de um message body, então <div class="message-body">, Aqui vai um texto de notificação bem bacana..

[04:30] Pronto, vamos pedir para ele formatar o código. Agora sim, está bem bonito. Vamos salvar e vamos confirmar se ele está já agora, aparecendo com o estilo do Bulma. Minimizei o VS Code, voltei para o navegador. Repare, só que ele está pegando o tamanho todo e ele está empurrando o HTML para baixo.

[04:52] Nós precisamos posicionar melhor essa barra de notificações. Vamos agora adicionar um pouco de CSS no "Notificacoes.vue". <style scoped>, ou seja, eu não quero que esse CSS vaze para outros componentes. O que eu quero dizer aqui? Eu quero pegar a minha barra de notificações e eu quero adicionar aqui algum estilo. O que eu quero?

[05:14] Eu quero que seja um posicionamento absoluto, position: absolute;. E eu quero que ele fique em cima, no canto superior direito. Então vamos jogar a notificação para cima e organizar para ficar do tamanho que nós queremos. Para jogarmos ele para a direita nós vamos fazer um right: 0;, estamos com o posicionamento absoluto.

[05:37] Vamos fazer o tamanho do container, vai ser, por exemplo, de 300 pixels, width: 300px;. O que mais? Vamos adicionar um padding interno, padding: 8px;. Vamos salvar e ver se isso já melhora o visual dele. Voltando no navegador, pronto, agora já está bem melhor.

[05:57] Repare que ele já está flutuando aqui em cima do nosso DOM, do nosso HTML, não está mais empurrando o conteúdo para dentro. Vamos adicionar agora as outras notificações. Vamos fazer um "Ctrl + C", "Ctrl + V". Nós queremos notificações de outros tipos. Vamos voltar no Bulma, vamos pegar aqui. Nós teremos um warning e um danger. Vamos ajustar o código, "message is-warning" e um "message is-danger". Vou salvar aqui.

[06:28] Vamos ver no nosso HTML como ficou. Repare, as notificações estão aqui, elas ainda estão um pouco fora de alinhamento, os botões estão ficando na frente. Vamos ver se conseguimos ajustar isso com o z index. Vamos colocar um z-index: 105;, um z-index maior aqui.

[06:48] Voltando para o navegador, agora sim, ele está sobrepondo todo o nosso HTML, inclusive os botões de ação.

[06:56] É isso o que nós queríamos. Nós temos um componente, preparado já para ter tipos de notificações, e ficará flutuando do lado superior direito da nossa tela. Agora, com o nosso HTML já pronto, embora esteja estático, podemos começar a adicionar os comportamentos.

[07:15] Ou seja, queremos dinamicamente adicionar essas notificações, conforme o usuário interaja com o Tracker. Vamos agora, na próxima aula, implementar isso de forma dinâmica. Nós precisamos ter alguma forma que dada uma ação que o usuário executou, por exemplo, adicionar um projeto, editar um projeto ou finalizar uma tarefa, nós vamos subir uma notificação para ele. Vem comigo, vamos implementar isso na próxima aula.

@@03
Notificando via store

[00:00] As nossas notificações já estão bem bacanas, parecendo contextualizadas no canto superior direito, que é o que nós queríamos. Só que elas estão estáticas, nós precisamos trazer dinamismo agora, porque o Tracker, ele é dinâmico, nós queremos notificar e remover notificações de forma dinâmica também.
[00:18] Vamos para o nosso código. Quando temos uma propriedade, um estado que ele é global na aplicação, estamos colocando na nossa "store". É isso o que vamos fazer. No nosso estado, além de termos o nosso array de projetos, também teremos um array de notificações, notificacoes:.

[00:39] Só que qual é o tipo de notificação? Que tipo é esse? Vamos implementar, porque ainda não temos essa interface. Dentro da nossa pasta "src > interfaces", novo arquivo, "INotificacao.ts". Aqui precisamos exportar a nossa interface, então export interface INotificacao {}. Ela terá um título, por exemplo, que será um titulo: string.

[01:17] Ela também terá um texto, que também é um texto: string. Ela terá um tipo:, que ainda não sabemos qual será, e ela também terá um id:, que também não sabemos qual será. Vamos começar aqui, vamos começar pelo tipo. Vamos fazer um export. Como são tipos específicos que nós esperamos, podemos usar um export enum TipoNotificacao {}.

[01:53] Quais são os tipos que nós temos? SUCESSO,, FALHA, e ATENCAO. Agora podemos dizer que o tipo será o tipo: TipoNotificacao. O ID nós podemos colocar um ID numérico e incremental, utilizar um número, 1, 2, 3, 4, id: number.

[02:19] Agora conseguimos voltar na nossa "store" e fazer essa inferência de tipo de notificação. Vou colar, ele fez um import para nós, de INotificacao. Esse cara é um array, notificacoes: INotificacao[]. Então vou adicionar aqui um notificacoes: [{}]

[02:36] Ele vai começar com um array, vamos adicionar aqui algumas notificações, só vou pedir para ele fazer o format para mim. Pronto, a informação nós já vimos que tem um id: 1,, já sabemos que tem um texto - vamos começar aqui, texto: uma notificação de sucesso, vamos começar pelo verde, o sucesso.

[02:58] O título podemos também dizer que é titulo: 'sucesso',. E, por último, falta só o tipo, que será o tipo: TipoNotificacao., repare que ele já fez o auto import para nós. Mas o tipo dessa notificação é TipoNotificacao.SUCESSO. Vamos fazer um "Ctrl + C", "Ctrl + V" aqui.

[03:18] Vamos colocar umas vírgulas aqui para separar. ID 1, o próximo agora é id: 2, e o outro é id: 3,. Nós queremos o de TipoNotificacao.ATENCAO, um TipoNotificacao.FALHA. Vamos ajustar o texto, atencao e no outro falha.

[03:39] Já estamos iniciando o nosso estado com essas notificações. Agora o que precisamos fazer é pegar do outro lado. Vamos para o nosso componente "Notificacoes.vue". Aqui, já sabemos o que precisamos fazer para ter os dados da store disponíveis. Vamos implementar o nosso método de setup () {}.

[03:58] Nós já sabemos como pegar a store, cont store = vai receber aquele hook que nós criamos, o = useStore. Repare que aqui não é o que queremos, esse é do Vuex, esse é aquele que temos que passar a chave, não é esse que nós queremos. Nós queremos o nosso que está disponível na store, import { useStore } from "@/store";.

[04:14] Agora sim. Vamos fazer o return {}. O que vamos retornar aqui? notificacoes:. O que é o “notificações”? Nós já sabemos como fazer para observar e ficar reagindo ao incremento, conforme as notificações entram e saem, que é chamar o state dentro da função computed, : computed().

[04:40] Ele vai fazer o import para nós. Esse cara, ele recebe uma arrow function, uma função, de parâmetro. O que queremos retornar aqui é o (() => store.state.notificacoes). Agora, ao invés de fazer isso tudo na mão, o que queremos é para v-for=, para cada ="notificacao in notificacoes" - ele já está reclamando porque ele espera uma chave.

[05:12] Então vamos adicionar aqui a chave, que será a :key="notificacao.id". Vou pedir para ele formatar o código. Formatado. Agora o título, ele não é mais fixo, ele virá da notificação, { notificacao.titulo }. Agpra, ele também virá do texto, não é mais estático, ele vai vir da notificação, notificacao.texto.

[05:45] Vamos salvar e ver se isso está funcionando. Minimizando o VS Code, pronto, uma notificação de sucesso, atenção e falha. Ele está funcionando até, ele está repetindo as três notificações, mas ele não está reagindo ao contexto. Nós queremos que o “Atenção” fique naquele tom de laranja e a falha fique naquele tom de vermelho. O que podemos fazer no código? No Bulma, o que diz qual é o contexto da mensagem é essa classe adicional.

[06:15] Nós temos o is success, o warning e danger. Ao invés de fazer isso estático, direto, nós precisamos receber isso de alguma forma. Nós podemos fazer o bind com a classe, :class=, e de alguma forma precisamos alterar esse valor, dado o contexto.

[06:33] Existem várias formas que podemos usar para fazer isso, mas uma forma que é bem bacana e fácil de entender, é implementar um objeto que passarmos o tipo para ele e ele retorna a classe. Então vamos criar aqui a nossa função data(){}, para retornar o estado local. A função data vai retornar um objeto, return {}.

[06:55] Esse objeto que queremos retornar é o contexto: { [] }, ou seja, ele pode ser qualquer um daqueles três tipos. Como faremos para implementar esse contexto? Nós podemos, para cada tipo de notificação, criar uma propriedade. Então vamos aqui, [TipoNotificacao], repare que ele já fez o import para nós.

[07:14] [TipoNotificacao.SUCESSO]:. Nesse cenário, nós sabemos que é o : 'is-success',. Vamos fazer um "Ctrl + C", "Ctrl + V" aqui para aproveitar. Além do sucesso nós temos o [TipoNotificacao.ATENCAO]: e o [TipoNotificacao.FALHA]:. O “atenção”, a classe é o : 'is-warning', e, por último aqui, o vermelho é o : 'is-danger',. Pronto.

[07:40] Agora, o que precisamos fazer é acessar esse contexto, que acabamos de criar, na posição :class="contexto[notificacao.tipo]". Para cada tipo vamos acessar esse contexto e o contexto vai retornar a classe que esperamos. Vamos salvar e ver se isso vai funcionar. Voltando para a aplicação. Agora sim, exatamente como nós queríamos.

[08:08] As notificações de sucesso verdes, a de atenção nesse tom meio amarelo, meio alaranjado, e a de falha nesse tom meio avermelhado, meio que indicando que alguma coisa deu errado. Então, sim, agora as notificações já estão dinâmicas, vindas da store.

[08:27] Se adicionarmos na "store > index.ts" mais uma notificação - vamos fazer um "Ctrl + C", "Ctrl + V". id: 4,, vamos chamar de sucess aqui, porque queremos mais sucesso do que falha, o tipo será sucess. Vamos salvar. Se voltarmos ao nosso navegador, ele já exibe a notificação de sucesso.

[08:45] Nós já estamos quase lá, nós já migramos as nossas notificações para a store, o que precisamos fazer agora é adicionar e remover elas de forma dinâmica também, ao invés de criar esse estado aqui, com essas notificações iniciais.

[09:00] Nós não queremos isso, queremos que elas entrem e saiam da nossa store de forma dinâmica. Vamos fazer isso na próxima aula, e vamos escolher em qual momento vamos notificar o usuário. Vamos lá, te espero no próximo vídeo.

@@04
Actions ou mutations?

Temos utilizado as mutations e as actions sem problemas até agora. Mas, conceitualmente, existe uma diferença entre elas. Qual é?

As actions podem alterar o estado, e as mutations não.
 
Alternativa correta
Mutations não podem ser chamadas diretamente do componente.
 
Alternativa correta
Actions podem ser síncronas ou assíncronas. Mutations precisam, obrigatoriamente, serem síncronas.
 
Alternativa correta! Exatamente! Seguindo a documentação do vuex, fica bem claro quando devemos usar qual.

@@05
Removendo automaticamente

[00:00] Bacana, estamos quase lá, as nossas notificações já estão na nossa fonte de dados, na nossa fonte de verdade, agora é só adicionar e remover de forma dinâmica. Nós já sabemos fazer isso, porque nós já fizemos todo esse processo com o nosso recurso de projetos. Então vamos para o nosso código.
[00:19] Vamos dar uma olhada na nossa store, nós temos as notificações, que já iniciamos com algumas. Vamos limpar isso e deixar uma lista vazia. Se salvarmos e voltarmos para a página do navegador, repare que as notificações já sumiram.

[00:33] O que precisamos fazer é adicionar uma mutação para adicionar a notificação. Vamos nos nossos "tipo-mutacoes.ts", vamos adicionar uma mutation nova, export const NOTIFICAR = 'NOTIFICAR', que será o nome da nossa mutation. Vamos dar um "Ctrl + C" aqui, no nome da mutation e vamos implementar ela já na nossa store, na nossa propriedade de mutations.

[01:01] Já chamamos o [NOTIFICAR] aqui, o VS Code já vai nos sugerir a importação. Aproveitando que estamos mexendo na importação, já podemos remover esse import TipoNotificacao, que não é mais necessário, não estamos mais criando notificação na mão. E, no [NOTIFICAR](), vamos receber aqui o state como parâmetro e a nova notificação, que é do tipo (state, novaNotificacao: INotificacao) {}.

[01:33] Agora podemos implementar essa inserção, inserir esse dado aqui. O que podemos fazer aqui, logo na largada, é adicionar um ID para essa nova notificação, novaNotificacao.id =. Nós podemos continuar usando o objeto new date - faltou a atribuição aqui, = new Date().

[01:55] E podemos chamar um método chamado = new Date().getTime(). Ele vai retornar o número relacionado aos microssegundos, assim conseguimos identificar de forma bem única essa notificação. Além disso, precisamos, de fato, inserir essa nova notificação no nosso estado, state.projetos.push(novaNotificacao).

[02:23] Vamos ver o que ele está reclamando. Não é projetos, é state.notificacoes.push(novaNotificacao), agora sim. Vamos testar e vamos ver se já conseguimos notificar alguma coisa.

[02:37] Vamos para o nosso formulário de projetos, temos aqui o método de salvar. Logo após salvar nós podemos chamar a store, que já está disponível aqui, nós já preparamos isso no nosso setup, this.store.comit(). Queremos adicionar a mutação aqui, (NOTIFICAR, {}). Repare que ele já fez o import para nós, ele sugere e importa.

[03:00] E aqui nós passamos a notificação. O que temos que passar aqui é o título, que será um titulo: 'Novo projeto adicionado’ - vamos botar salvo. Foi salvo, vamos botar assim titulo: 'Novo projeto foi salvo'. Agora o texto da notificação, o texto vai ser texto: 'Prontinho ;) seu projeto já está disponível.'. Faltou o tipo, não é?

[03:33] Vamos adicionar o tipo também, o tipo será o tipo: TipoNotificacao, repare, o VS Code, sempre o nosso melhor amigo, já vai sugerir o auto import, TipoNotificacao.SUCESSO. Se ele não te sugerir, você pode fazer um import do tipo de notificação aqui, de forma manual.

[03:52] Então já estamos fazendo o comit da nossa notificação. Vamos salvar e vamos ver se isso vai funcionar conforme esperamos. Vamos para o navegador, vamos adicionar um novo projeto, "Plano de estudo", salvar.

[04:06] E ele adicionou a nossa notificação, "o novo projeto foi salvo", "prontinho ;) o seu projeto já está disponível.". Já adicionamos, mas faltou remover, nós precisamos remover essa notificação. O que podemos usar, em termos de JavaScript, de coisas prontas, para fazer isso?

[04:25] Voltando na nossa store, nós podemos fazer o uso do setTimeOut(). O que o set time out vai fazer? Nós vamos passar uma função para ele e, como segundo parâmetro, uma quantidade em milissegundos. Depois que passar esse tempo que nós definimos, ele vai executar o que passamos como primeiro parâmetro.

[04:49] Então setTimeOut(() => {}, 3000), a função que queremos executar e, por último, em segundo, o número em milissegundos. Eu quero 3 segundos, acho que 3 segundos é um bom tempo para lermos aquela notificação. Depois de três segundos nós queremos fazer algo. O que queremos fazer?

[05:06] O que queremos é justamente filtrar as nossas notificações do mesmo jeito que fizemos com os projetos. Então vamos em state.notificacoes = state.notificacoes.filter(). O que queremos filtrar aqui? A notificação cujo ID é diferente da - vamos só chegar aqui, diminuir o menu para ficar mais espaço na nossa tela.

[05:40] Cujo ID é diferente desse ID que nós acabamos de criar, que está na nova notificação, (notificacao => notificacao.id != novaNotificacao.id). Recapitulando aqui, o que nós fizemos? Deixa eu ver o que ele está reclamando aqui, tem um colchete sobrando. Agora sim.

[05:58] Recapitulando, o que nós fizemos? Adicionamos um ID, que é o tempo em milissegundos decorridos, que ele consegue pegar certo, um bom número para identificar a notificação. Nós adicionamos notificação na nossa lista e, depois de 3 segundos, nós filtramos, removendo a notificação que acabamos de adicionar.

[06:21] Vamos salvar aqui, voltar e testar para ver se isso funciona. Ele já recarregou a página do navegador para nós, repare que ele já limpou, o nosso projeto não existe mais aqui, e nem a notificação. O que queremos aqui é adicionar "Plano de estudos", vamos botar para salvar.

[06:37] Depois de alguns segundos, bacana, removeu. Então é exatamente isso o que queríamos. Nós fazemos a notificação e depois de 3 segundos ela é removida do estado. Agora tudo funciona exatamente como nós queríamos, salvando um projeto novo, ele exibe a notificação, dá uma mensagem amigável para o usuário e, depois de algum tempo, a mensagem desaparece, de forma bem dinâmica, assim como todo o Alura Tracker é.

[07:04] Ele funciona, ele é vivo e as notificações agora também. Nós poderemos nos comunicar com o usuário em determinadas situações, quando ele, por exemplo, remover ou adicionar algum recurso na aplicação. Mas nós ainda conseguimos melhorar a experiência, contudo, dessa vez para o desenvolvedor. Vamos dar uma olhada e ver outras formas de implementar essa notificação, além do uso da store. Eu vejo você na próxima aula.

@@06
Para saber mais: Vue DevTools

Aqui você consegue visualizar a aula onde instalamos o VueDevTools. Ela é uma extensão bem bacana que ajuda a depurar o estado da nossa aplicação.

https://cursos.alura.com.br/course/vue3-comecando-framework/task/97506

@@07
Desafio: Validando as tarefas

Que tal adicionar uma validação na hora de finalizar uma tarefa? Vamos subir uma notificação de erro caso o usuário tente finalizar uma tarefa que não possui um projeto vinculado.

Podemos alterar o método que salva a notificação para verificar se o projeto existe:
{
    // restante do código omitido...
    methods: {
        salvarTarefa(tempoEmSegundos: number): void {
            const projeto = this.projetos.find((p) => p.id == this.idProjeto); // primeiro, buscamos pelo projeto
            if(!projeto) { // se o projeto não existe...
                this.store.commit(NOTIFICAR, {
                    titulo: 'Ops!',
                    texto: "Selecione um projeto antes de finalizar a tarefa!",
                    tipo: TipoNotificacao.ERRO,
                }); // notificamos o usuário
                return; // ao fazer return aqui, o restante do método salvarTarefa não será executado. chamamos essa técnica de early return :)
            }
            // se o projeto existe, seguimos normalmente...
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoEmSegundos,
                descricao: this.descricao,
                projeto: projeto
            })
            this.descricao = ''
        }
    },
    // restante do código omitido...
}COPIAR CÓDIGO
Ao fazermos esse return antecipado, garantimos que o restante do método não será executado. Essa técnica é conhecida como early return.

@@08
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@09
O que aprendemos?

Nessa aula, você aprendeu:
Controlar o estado;
Desenvolvendo a lista de notificações.
Combinar o Vue e o Bulma;
Utilizando componentes visuais prontos do Bulma e cuidado do comportamento utilizando o Vue.

#### 10/02/2024

@05-Compilando a aplicação

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/tracker-2/tree/aula-4

@@02
Notificando com Mixins

[00:00] Nós já conseguimos notificar para o usuário as ações que ele executou ou então quando vamos aqui, cadastramos um projeto novo - vou cadastrar aqui o meu "Plano de estudos" mais uma vez.
[00:11] Ele já faz a notificação, já some a notificação com o passar do tempo. Mas a nossa implementação, ela está um pouco acoplada demais com a nossa store. Voltando para o nosso código, no método onde fazemos o comit da notificação, nós teremos que estar sempre com a store injetada no componente.

[00:31] Então não necessariamente um componente, que vai notificado, ele já terá o setup da store. Está muito acoplado, desse jeito fica um pouco inflexível se precisarmos fazer alguma alteração. Quando formos passar o comit da notificação para outros componentes terá esse copy e paste para lá e para cá. O ideal seria que tivéssemos um método notificar e eu pudesse chamar esse método de notificar aonde quer que eu precisasse dele.

[01:01] Que eu fizesse a devida importação e notificasse através de um método específico de notificação ao invés de fazermos comit na store. É isso o que vamos fazer agora, nós vamos utilizar um mixins. A ideia do mixin no Vue é justamente reaproveitar código, seja ele qual porção do componente que seja uma parte de estado do dado, métodos, computed properties, podemos reaproveitar qualquer porção do nosso componente.

[01:34] E o que queremos reaproveitar aqui é o método notificar. Então vamos fazer isso. A primeira coisa que vamos fazer é extrair a função de notificar para um método. Então ao invés de fazermos esse comit, vamos criar aqui rapidamente um outro método, dentro do nosso "Formulario.vue". Vamos chamar esse método de notificar () {};.

[02:02] Vamos trazer o comit do notificar para cá - agora sim. O nosso método agora que tem essa responsabilidade. E, ao invés de termos esses dados fixos, nós queremos receber um notificar (tipo: TipoNotificacao, ), que ele é justamente um tipo de notificação. Vamos receber um título e vamos receber um texto, (tipo: TipoNotificacao, titulo, texto).

[02:30] Agora podemos remover daqui e remover esse valor, essa parte também. Vamos agora só adicionar os tipos, o título é uma string e o texto também é uma string, titulo: string, texto: string. Agora, quando quisermos notificar, podemos vir aqui e chamar o nosso método, this.notificar().

[02:58] Vamos passar o tipo, repare que faltou usarmos o tipo que recebemos como parâmetro aqui, agora sim, estamos notificando esse título, que recebemos de parâmetro, o texto e o tipo.

[03:13] Vamos agora chamar esse método. A notificação de sucesso, o título podemos usar, por exemplo, excelente, e por último a mensagem: o projeto foi cadastrado com sucesso. Pronto. Já refatoramos e extrairmos para um método. Vamos ver se essa refatoração está ok, se continuamos notificando como deveríamos.

[03:45] Vamos para a nossa aplicação, cadastrar um novo projeto. Vou cadastrar o "Vuex - estudando e implementado", vou mandar salvar. Ótimo, ele já continua fazendo a notificação e já com os dados novos.

[04:02] Agora, o que queremos fazer? Queremos reaproveitar esse notificar para usar ele em outros componentes. É exatamente aqui que entra o mixin. Vamos lá, para a nossa estrutura de pasta. Aqui eu vou criar um novo arquivo, eu vou criar uma pasta chamada "Mixins" primeiro. Aqui dentro, eu vou criar um "notificar.ts", que é o mixin de notificação. Vamos ajustar aqui o erro de digitação, pronto.

[04:30] O que nós vamos fazer? Basicamente o que temos que fazer aqui é muito simples, vamos fazer um export da função que queremos, do jeito que queremos, então podemos botar export const notificacaoMixin = {}. Esse cara, ele vai ser um objeto literal que corresponde com as propriedades que passamos para o nosso método define component, que é o que fazemos a importação do Vue.

[05:00] Então o que queremos aqui? É uma propriedade chamada methods: {}. Qual é o método que queremos reaproveitar? O notificar. Então vamos tirar do "Formulario.vue", nós já refatoramos ele. Removemos o código do formulário e trazemos ele para o "notificar.ts" e formatar o documento para mim.

[05:20] Ele está reclamando de alguns problemas de lynching. A primeira coisa, ele está dizendo que eu não tenho o tipo do meu retorno, então eu vou dizer aqui, explicitamente, que essa notificação, esse método não vai retornar nada. Podemos tirar aqui esse this, que ele não vai existir e fazer os imports necessários.

[05:46] Vamos começar aqui, importando o tipo da notificação, a nossa mutação de modificar e a store, aqui tem um pequeno detalhe, não vamos usar aqui através do hook, porque aquele hook precisa ser utilizado dentro de um componente, por um componente. Então, nesse cenário em que queremos ter acesso ao store, mas fora de um componente, podemos fazer o import direto.

[06:10] Então import { store } from e vamos lá, usando o arroba, from '@/store'. Se olharmos aqui, repare comigo que, desde o começo, já estamos exportando essa constante para ser utilizada por quem precisar. Agora sim, temos o nosso mixin sem erros de compilação.

[06:37] Podemos salvar. Vamos arrumar esse typo aqui, é mixin, eu tinha digitado errado, agora sim, notificacaoMixin. E, por último, precisamos implementar ele, deixar ele disponível no nosso componente. Como fazemos isso?

[06:53] Nós voltamos no "Fomulario.vue" e aqui, além de definirmos tudo o que já definíamos, nós vamos definir os mixins. Ele é uma lista, porque podemos utilizar vários mixings, mixins: []. O que queremos aqui é o [notificacaoMixin], é isso? Vamos confirmar o nome que nós fizemos, notificacaoMixin, é isso aí.

[07:19] Vamos ver se ele vai fazer o import para nós, não fez. Vamos fazer na mão, import { notificacaoMixin } from, vamos usar o arroba, que é o atalho para o "src", from '@/mixins', repare que eu tenho mais um erro de digitação, hoje está difícil, vamos lá, mixins, agora sim.

[07:39] from '@/mixins/notificar'. Pronto, agora sim. Se olharmos agora, o erro de compilação que tínhamos antes, vamos tirar essa configuração mixing: [notificacaoMixin] para darmos uma olhada. Ele já está dizendo aqui, essa propriedade notificar não existe aqui, eu não sei de onde ela está vindo. Ele já está nos avisando que isso vai dar erro.

[08:03] Quando vamos e configuramos o mixin, ele já entende que esse método existe e os parâmetros estão certos, podemos agora inclusive remover a importação da mutação de notificar, que fazíamos antes. Então salvamos tudo aqui, já extraímos para o mixin. Vamos testar e ver se isso continua funcionando.

[08:26] Vamos dar uma carregada na página, para ter certeza que está tudo fresco, e vamos cadastrar o "Plano de estudo" mais uma vez. Continua funcionando. Vamos mudar o tipo de notificação, para ver se isso está bem bacana. Vou mudar agora para TipoNotificacao.ATENCAO.

[08:42] Vamos voltar no navegador, recarregar a página para ter certeza, só para garantir, "Plano de estudos (VUE)", vamos mandar salvar.

[08:52] É muito simples alterar o tipo. Agora ele está desacoplado da store. Quem quiser notificar não precisa mais conhecer a store e conhecer o tipo da mutação, não precisa. O que ele precisa conhecer agora é qual é a notificação que ele quer fazer e se ela é sucesso, atenção ou falha.

[09:15] Está bem mais desacoplado, está bem mais enxuto o nosso método de notificar. A ideia do mixin é justamente essa, é trazer reutilização de código. Mas nem tudo são flores, nós podemos ter problemas usando o mixin dependendo do que estamos fazendo. Nós temos que usar com bastante cuidado porque nós, imagine se em algum cenário onde além do mixin eu tenho outro componente que também tem um método modificar.

[09:45] Imagine, teremos que pensar em um view ou nós mesmo temos que pensar em tratar colisão de nome de método ou de nome de property. Então é muito bacana para reutilizar código, mas tem que ser utilizado com bastante cuidado, com bastante parcimônia e existem algumas alternativas.

[10:05] Para esse cenário de notificar ele funcionaria bem, mas temos outras formas de reaproveitar esse código. É isso o que vamos ver no próximo vídeo. Te vejo lá.

@@03
Hooks e Composition API

[00:00] Bacana, o nosso mixin já está funcionando, nós já conseguimos notificar através dele, estamos reutilizando código agora, o nosso notificar em si, ele está totalmente desacoplado da store, ele está transparente para quem está utilizando. Então se vamos usar o store por baixo dos panos, ou se vamos usar outra forma para controlar as notificações, nós estamos isolados e desacoplados.
[00:27] Agora está bem mais elegante e mais coeso o nosso notificador. Mas o mixin, ele pode trazer alguns tipos de problema, principalmente colisão de nome e não necessariamente ele será a melhor forma de reutilizar código. Para esse caso atende, mas não necessariamente para outros casos ele vai atender.

[00:46] É por isso que vamos aprender agora, outra forma de compartilhar código, que é através de hooks customizados. Como vamos fazer isso? Vamos para o nosso código. O que vamos fazer aqui? Vamos criar esse hook, a nossa função que será utilizada. Nós temos um exemplo aqui, da useStore, que só encapsulamos o hook do próprio Vuex.

[01:11] O que vamos fazer aqui, agora, é criar o nosso próprio. Dentro de "src", vamos criar um novo arquivo, vamos criar uma pasta aqui primeiro, vamos chamar ela de "hooks". O que eu quero criar aqui, o hook que eu quero criar, é o do notificador, então "notificador.ts". Pronto, criamos o nosso arquivo. Como criamos esse hook?

[01:33] A primeira coisa que vamos fazer é explicitar o que vamos exportar aqui. Vamos criar aqui um tipo, o nosso tipo será o type Notificador = {}. Ele será um objeto que terá a função de notificar. O que nós recebemos, por parâmetro, e o que ela faz, o que essa função faz? Vamos lá, a notificar, ela é uma função, que ela vai receber um tipo.

[02:03] O tipo é o tipo de notificação. Repare que o VS Code, meu melhor amigo, já importou para mim. Além do tipo, ela vai receber o título, que é uma string e o texto, que também é uma string. O que essa função retorna? Nada, ela é uma função que é void, ela não retorna nenhum objeto, não retornar nada, notificar (tipo: TipoNotificacao, titulo: string, texto: string) => void. O que ela faz é a notificação, apenas.

[02:28] Agora, que já sabemos o que vamos fazer, vamos exportar a função. Então vamos fazer um export default. O que vamos exportar aqui? É uma função, que retorna um notificador, vamos implementar. O que é o nosso notificar? export default () ; Notificador => {}. O nosso notificar, nós já sabemos o que é, vamos pegar do nosso mixin, vou trazer para o "notificador".

[03:03] Vamos ajustar aqui e botar aqui um sinal de atribuição. Pronto. O nosso notificar, ele vai implementar essa função que acabamos de explicitar aqui. Repare que ele está reclamando só do import da store, então vamos fazer ele aqui, import { store } from '@/store'. Ele já está dando um erro de compilação aqui, que não estamos retornando o que deveríamos, e ele está reclamando aqui também do tipo da mutação.

[03:36] Vamos implementar aqui o tipo da notificação. Agora nós podemos retornar o objeto que vai fazer a nossa notificação, return {}, notificar. Agora ele passou os erros, ele está compilando direito. Nós trouxemos a função do notificar igual ela estava no nosso mixin, mas agora ela está contida no nosso hook.

[03:58] Agora precisamos preparar o nosso formulário para usar esse hook ao invés do mixin. Como fazemos isso? Vamos para o nosso código, já vamos tirar o mixin do "Formulario.vue", eu não quero mais esse mixin. Eu também não quero fazer esse import do mixing. O que eu quero agora é, no meu setup, é aqui que fazemos essa configuração.

[04:18] O que nós queremos é ter o nosso método de notificar, já vamos dash token aqui, para pegar só o que precisamos, const { notificar } =. De onde ele vai vir? Do nosso =useNotificador. É isso o que precisamos fazer.

[04:39] Vamos só fazer o import, que ele não encontrou, precisamos importar na mão, o Visual Studio dessa vez não foi o nosso melhor amigo aqui. Então vamos lá, import { useNotificador } from, vamos usar o nosso atalho, from '@/hooks/notificador'. Agora sim. Vamos ver o que ele está reclamando aqui.

[05:10] Nós já estamos fazendo o export default, então não precisamos envolver esse import aqui, podemos importar direto o useNotificador. Agora sim o import está certo. Agora só precisamos adicionar no nosso retorno, notificar.

[05:27] Repare que automaticamente o erro de compilação vai sair, porque esse notificar vem do setup, o Visual Studio Code já entendeu o que estamos fazendo aqui. Agora a nossa função virou um hook, ela não é mais um mixing, e aqui podemos reaproveitar à vontade, em qualquer componente, utilizando do mesmo jeito. Vamos garantir que isso está funcionando?

[05:50] Eu vou voltar o tipo da notificação para TipoNotificacao.SUCESSO e vamos testar no navegador. Vou recarregar a página para garantir. Novo projeto, "Plano de estudos", vamos mandar salvar. Pronto.

[06:03] Excelente, o projeto foi cadastrado com sucesso e o nosso hook funciona exatamente como deveria. Nós estamos reaproveitando o código de uma forma diferente e agora com o seu cinto de utilidades, de ferramentas, cada vez maior. De acordo com a necessidade dos projetos, nós podemos escolher quando é um cenário ideal para um mixin ou quando talvez não seja o melhor cenário, podemos utilizar um hook customizado.

[06:30] E assim conseguimos reaproveitar o código à vontade e parar de nos repetirmos. Com bastante elegância vamos adquirindo e implementando boas práticas nas nossas aplicações Vue.

@@04
Para saber mais: Setup

Utilizamos em vários componentes a composition api, e aqui neste artigo você pode entender ainda mais as vantagens e quais os problemas ela veio resolver!

https://www.alura.com.br/artigos/vue-3-conhecendo-mais-de-perto?_gl=1*j9jcj6*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwNzU5NDg3My4xOTMuMS4xNzA3NjAxMDA3LjAuMC4w*_fplc*Vlpzcjl6JTJCUW84bFRla3dsJTJGJTJCdEFQNHdRc05BdG9rUiUyRnk1NENxallFUXFCU3Z5czFlZzFxQ1FJOU5RejFPVCUyRkVxWk8zTzA3R2NUZHBmcFdRNjNpMVZtR1klMkYwOG9XeHc0JTJCNEozZDFGb29zRW5HZUpDQWpMeVRpV1JuQTM2TWclM0QlM0Q.

@@05
Computed props mais a fundo

[00:00] Nosso Alura Tracker já está mega bacana, nós já trouxemos toda essa parte de projetos e conceito do recurso de projetos. Então podemos vir na página e cadastrar o nosso famoso "Plano de estudos", vou cadastrar mais um aqui, que é o "Vuex - estudando e implementando". Vou cadastrar mais um aqui, que é o "Plano de estudos" aqui eu não vou colocar "(VUE)", eu vou colocar "(TS)".
[00:27] Pronto, temos os nossos três projetos, temos um plano de estudos genérico, temos um do Vuex e temos o plano de estudos de Typescript. Agora, na hora de definir as tarefas, eu posso colocar "Estudando TS", ela será do projeto do plano de estudo do Typescript. Deixa ele contar um pouco, vou finalizar, ele desceu.

[00:47] Vou colocar "Estudando Mutations", por exemplo, esse será do projeto do Vuex, finalizar aqui com 2 segundos. E o último, eu vou deixar sem projeto nenhum e vou dizer que eu estou "Estudando boas práticas de componentização". Vou iniciar aqui, vou finalizar, vou deixar ele fazer três, para fazer aquela escada bacana. Pronto.

[01:15] Nós já conseguimos categorizar as nossas tarefas apontando uma tarefa para um projeto ou simplesmente deixando a tarefa solta. Mas está faltando exibir e é isso o que vamos fazer para fechar com chave de ouro o nosso Tracker. Vamos para o código. Nós vamos entrar no nosso componente "Tarefa.vue", que é aquele componente que exibe aquele card no nosso Tracker. Nós já temos a descrição. O que nós vamos fazer?

[01:42] Vamos criar uma outra <div> aqui, logo depois da descrição. Vamos trazer algumas classes para ela, ela é uma column e eu vou dizer que ela tem uma proporção para três colunas <div class="column is-4">. E antes, onde eu tinha a proporção column is-7 eu vou colocar para quatro, column is-4, para ele manter o mesmo espaçamento que ele tinha, só que agora estou dividindo em duas.

[02:06] E vamos exibir o nosso projeto, {{ tarefa.projeto}}. É aqui que entra uma coisa que pode gerar um erro: a tarefa pode ou não ter um projeto. Como estamos utilizando o Typescript, temos um operador que chama nullable operator. Então, o que eu quero fazer? Se eu tenho o projeto, vou colocar uma interrogação aqui, eu quero pegar o nome dele.

[02:35] Se eu tenho o projeto, eu quero pegar o nome dele. Se não, eu vou exibir para o usuário um “N/D", de não disponível, ou seja, ele não tem um projeto vinculado ali, {{ tarefa.projeto.nome || 'N/D' }}. Com isso, se eu tiver uma tarefa aqui, que ele vá repetir dentro do v-for, e essa tarefa não tiver um projeto, ele não vai quebrar e dar aquele erro que você está lendo a propriedade nome undefined.

[03:01] Aquele erro chato, que acontece com frequência. Vamos salvar aqui. Agora estamos tratados, estamos cobertos. Se eu tenho o projeto, vou mostrar o nome, se eu não tenho, vou colocar ali um "N/D", um não disponível, para ficar bem elegante. Vamos voltar no navegador.

[03:15] É exatamente isso o que acontece. Repare, eu tenho o meu "Estudando TS", está apontando para aquele projeto. O "Estudando Mutations" está aqui, apontando para o Vuex, e aqui, quando estou estudando boas práticas, eu não vinculei a projeto nenhum. Agora fechamos o ciclo da funcionalidade nova.

[03:34] Já aprendemos aqui a notificar, trabalhamos com o Vuex e ficaram bem bacanas as funcionalidades novas, agora estamos prontos para jogar toda essa feature nova para a produção fazer a nossa publicação.

@@06
Fragilidade dos Mixins

Nós vimos duas formas distintas de reuso de código com Vue3. No caso dos mixins, apontamos duas fragilidades que podem ser prejudiciais para a nossa aplicação. Quais são elas?

Dependência implícita e possível colisão de nomes.
 
Alternativa correta! Exatamente! Além de não ficar muito claro para as pessoas desenvolvedoras de onde vem as coisas, corremos o risco de usar nomes que vão colidir com as propriedades dos componentes.
Alternativa correta
Não existem! Mixins são balas de prata.
 
Alternativa correta
Performance. Os métodos executados pelos mixins são lentos.

@@07
Para saber mais: Publicando com Vercel

Aqui você consegue visualizar a aula onde configuramos e publicamos o Alura Tracker na Vercel. Não deixe de publicar a sua versão e compartilhar no fórum da Alura!

https://cursos.alura.com.br/course/vue3-comecando-framework/task/97508

@@08
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com os próximos cursos que tenham este como pré-requisito.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@09
Projeto final do curso

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

@@10
O que aprendemos?

Nessa aula, você aprendeu:
Mixins;
Como reaproveitar código e qual a fragilidade dessa técnica.
Composition API;
Como reaproveitar código de uma forma mais coesa e legível.
Computed - debugging;
Como depurar código de propriedades computadas.

@@11
Conclusão

[00:00] Parabéns por você ter concluído mais um curso aqui na Alura, dessa vez de Vue 3. Nós prototipamos juntos a versão 2 do Alura Tracker, essa aplicação mega bacana que nos ajuda a controlar as tarefas que estamos executando no dia a dia.
[00:15] Agora uma tarefa está diretamente vinculada a um projeto, então conseguimos organizar melhor o que estamos fazendo. Vamos dar uma olhada, vamos dar uma revisada, no tanto de coisa bacana que nós aprendemos para conseguirmos chegar nessa versão do Tracker. Vamos dar uma olhada, de cara, no nosso roteador.

[00:35] Estamos usando e controlando rotas para exibir a funcionalidade atual para o usuário, então ele tem a sensação de estar navegando por uma aplicação, e o que estamos fazendo é controlar tudo no view router, evitando que a página fique recarregando. Nós conseguimos esconder e exibir componentes baseado na rota atual. E uma das coisas que nós mais mexemos foi no estado da aplicação.

[00:56] Nós temos projetos, temos notificações, nós compartilhamos esse estado através dos componentes. Nós adicionamos, removemos e alteramos itens no estado o tempo todo. Além disso, nós criamos o notificador e reaproveitamos código.

[01:13] Seja no mixin, ou seja, via hook, nós vimos várias formas diferentes de fazer isso, foi mega bacana. Nós vimos vantagens e desvantagens de cada uma. Foi incrível trabalhar com você na versão 2 do Alura Tracker. Eu espero que você tenha gostado tanto quanto eu e até a próxima. Vida longa e próspera.