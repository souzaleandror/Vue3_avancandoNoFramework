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