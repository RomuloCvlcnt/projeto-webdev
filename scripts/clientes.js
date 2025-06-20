const todosClientes = [
{id:"1", nome:"Alessandro Feitoza", email:"ale@email.com", telefone:"85 9 8612-1234", cidade:"Fortaleza-CE"},
{id:"2", nome:"Bruna Carvalho", email:"bruna.carvalho@email.com", telefone:"85 9 8888-1212", cidade:"Fortaleza-CE"},
{id:"3", nome:"Lucas Andrade", email:"lucas.andrade@email.com", telefone:"85 9 9111-3322", cidade:"Maracanaú-CE"},
{id:"4", nome:"Fernanda Lima", email:"fernanda.lima@email.com", telefone:"85 9 9222-4455", cidade:"Caucaia-CE"},
{id:"5", nome:"Rafael Souza", email:"rafa.souza@email.com", telefone:"85 9 9333-5566", cidade:"Fortaleza-CE"},
{id:"6", nome:"Juliana Torres", email:"juliana.torres@email.com", telefone:"85 9 9444-6677", cidade:"Itapipoca-CE"},
{id:"7", nome:"Pedro Henrique", email:"pedro.henrique@email.com", telefone:"85 9 9555-7788", cidade:"Juazeiro do Norte-CE"},
{id:"8", nome:"Carla Bezerra", email:"carla.bez@email.com", telefone:"85 9 9666-8899", cidade:"Quixadá-CE"},
{id:"9", nome:"Fábio Almeida", email:"fabio.almeida@email.com", telefone:"85 9 9777-9900", cidade:"Crato-CE"},
{id:"10", nome:"Isabela Moura", email:"isa.moura@email.com", telefone:"85 9 9888-0011", cidade:"Fortaleza-CE"},
{id:"11", nome:"Diego Martins", email:"diego.martins@email.com", telefone:"85 9 9999-1122", cidade:"Canindé-CE"},
{id:"12", nome:"Ana Paula", email:"ana.paula@email.com", telefone:"85 9 9000-2233", cidade:"Fortim-CE"},
{id:"13", nome:"Thiago Costa", email:"thiago.costa@email.com", telefone:"85 9 9111-3344", cidade:"Horizonte-CE"},
{id:"14", nome:"Letícia Rocha", email:"leticia.rocha@email.com", telefone:"85 9 9222-4455", cidade:"Fortaleza-CE"},
{id:"15", nome:"Marcos Vinícius", email:"marcos.vinicius@email.com", telefone:"85 9 9333-5566", cidade:"Pacatuba-CE"},
{id:"16", nome: "Ana Clara Martins", email: "anaclara.martins@email.com", telefone: "85 9 8811-2354", cidade:"Fortaleza-CE"},
{id:"17", nome: "Bruno Henrique Costa", email: "brunocosta92@email.com", telefone: "85 9 8374-1102", cidade:"Fortim-CE"},
{id:"18", nome: "Carla Souza Andrade", email: "carla.andrade@email.com", telefone: "85 9 9800-4481", cidade:"Horizonte-CE"},
{id:"19", nome: "Diego Ramos", email: "diego.ramos@email.com", telefone: "85 9 9631-2345", cidade:"Maracanaú-CE"},
{id:"20", nome: "Eliane Lopes Rocha", email:	"elianerocha@email.com", telefone: "85 9 9221-7753", cidade:"Fortaleza-CE"},
{id:"21", nome: "Felipe da Silva", email: "felipe.silva@email.com", telefone: "85 9 8542-3045", cidade:"Quixadá-CE"},
{id:"22", nome: "Henrique Lima Duarte", email: "henrique.lima@email.com", telefone: "85 9 8722-6651", cidade:"Maracanaú-CE"},
{id:"23", nome: "Isabela Torres Farias", email: "isabela.farias@email.com", telefone: "85 9 9811-2300", cidade:"Horizonte-CE"},
{id:"24", nome: "João Vitor Almeida", email:	"joaovitor.almeida@email.com", telefone: "85 9 9451-1983", cidade:"Juazeiro do Norte-CE"},
{id:"25", nome: "Karla Ferreira", email:	"karla.ferreira@email.com", telefone: "85 9 9782-2123", cidade:"Fortaleza-CE"},
{id:"26", nome: "Lucas Barbosa", email: "lucas.barbosa@email.com", telefone: "85 9 9672-9981", cidade:"Fortim-CE"},
{id:"27", nome: "Mariana Campos", email:	"mariana.campos@email.com", telefone: "85 9 8432-4456", cidade:"Itapipoca-CE"},
{id:"28", nome: "Nathan Vieira Luz", email: "nathan.luz@email.com", telefone: "85 9 9192-5543", cidade:"Acaraú-CE"},
{id:"29", nome: "Olivia Nascimento", email: "olivianascimento@email.com", telefone: "85 9 8934-1001", cidade:"Aquiraz-CE"},
{id:"30", nome: "Paulo Ricardo Mendes", email: "pr.mendes@email.com", telefone: "85 9 9785-2204", cidade:"Fortim-CE"},
{id:"31", nome: "Quésia Antunes Braga", email: "quesia.braga@email.com", telefone: "85 9 9800-7711", cidade:"Aquiraz-CE"},
{id:"32", nome: "Rafael Tavares", email:	"rafaeltavares@email.com", telefone: "85 9 9776-3000", cidade:"Fortaleza-CE"},
{id:"33", nome: "Sabrina Oliveira", email: "sabrina.oliveira@email.com", telefone: "85 9 8192-1135", cidade:"Itapipoca-CE"},
{id:"34", nome: "Thiago Neves Pires", email:	"thiago.pires@email.com", telefone: "85 9 9562-5582", cidade:"Itapipoca-CE"},
{id:"35", nome: "Welinton Macedo", email: "welinton.macedo@email.com	", telefone: "85 9 8190-4466", cidade:"Maracanaú-CE"},
{id:"36", nome: "Vanessa Ribeiro", email: "vanessa.ribeiro@email.com	", telefone: "85 9 9401-3904", cidade:"Aquiraz-CE"},
{id:"37", nome: "Wagner Sales", email: "wagner.sales@email.com", telefone: "85 9 8771-1194", cidade:"Horizonte-CE"},
];
let pagina = 1;
const limite = 10; 
let clientesFiltrados = [...todosClientes];

function mostrarClientes() {
  const inicio = (pagina - 1) * limite;
  const fim = inicio + limite;
  const clientesPagina = clientesFiltrados.slice(inicio, fim);

  const tbody = document.getElementById("tabela-clientes");
  tbody.innerHTML = "";

  clientesPagina.forEach(cliente => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${cliente.id}</td>
      <td>${cliente.nome}</td>
      <td>${cliente.email}</td>
      <td>${cliente.telefone}</td>
      <td>${cliente.cidade}</td>
      <td>
      <button class="btn btn-sm btn-warning" onclick="editarCliente(${cliente.id})">Editar</button>
    <button  class="btn btn-sm btn-danger" onclick="excluirCliente(${cliente.id})">Excluir</button>
    </td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("paginaAtual").textContent = pagina;
  document.getElementById("totalPaginas").textContent = Math.ceil(clientesFiltrados.length / limite);

  document.getElementById("btnAnterior").disabled = pagina === 1;
  document.getElementById("btnProximo").disabled = pagina === Math.ceil(clientesFiltrados.length / limite);
}

function aplicarFiltro() {
  const termo = document.getElementById("filtroNome").value.toLowerCase();
  clientesFiltrados = todosClientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(termo)
  );
  pagina = 1;
  mostrarClientes();
}

function proximaPagina() {
  const totalPaginas = Math.ceil(clientesFiltrados.length / limite);
  if (pagina < totalPaginas) {
    pagina++;
    mostrarClientes();
  }
}

function paginaAnterior() {
  if (pagina > 1) {
    pagina--;
    mostrarClientes();
  }
}

mostrarClientes();
