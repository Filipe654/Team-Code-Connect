import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import InicioView from '../views/InicioView.vue'
import DashboardView from '../views/DashboardView.vue'
import PerfilView from '../views/PerfilView.vue'
import ConsultarVagasView from '../views/ConsultarVagasView.vue'
import AgendamentoView from '../views/AgendamentoView.vue'
import MultasView from '../views/MultasView.vue'
import PagamentoView from '../views/PagamentoView.vue'
import RegistrarVeiculosView from '../views/RegistrarVeiculosView.vue'
import CondutoresView from '../views/CondutoresView.vue'
import TempoRealView from '../views/TempoRealView.vue'
import FuncionarioView from '../views/FuncionarioView.vue'
import ContatoView from '../views/ContatoView.vue'

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/cadastro', name: 'cadastro', component: CadastroView },
  { path: '/inicio', name: 'inicio', component: InicioView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView },
  { path: '/perfil', name: 'perfil', component: PerfilView },
  { path: '/consultar-vagas', name: 'consultar-vagas', component: ConsultarVagasView },
  { path: '/agendamento', name: 'agendamento', component: AgendamentoView },
  { path: '/multas', name: 'multas', component: MultasView },
  { path: '/pagamento', name: 'pagamento', component: PagamentoView },
  { path: '/registrar-veiculos', name: 'registrar-veiculos', component: RegistrarVeiculosView },
  { path: '/condutores', name: 'condutores', component: CondutoresView },
  { path: '/tempo-real', name: 'tempo-real', component: TempoRealView },
  { path: '/funcionario', name: 'funcionario', component: FuncionarioView },
  { path: '/contato', name: 'contato', component: ContatoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
