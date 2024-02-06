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