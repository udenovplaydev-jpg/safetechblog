'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowRight, Shield, AlertTriangle, Lightbulb, Users, Mail, Phone, MapPin } from 'lucide-react';

export default function SafeTechWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'riscos', label: 'Os Riscos' },
    { id: 'casos', label: 'Casos Reais' },
    { id: 'solucoes', label: 'Soluções' },
    { id: 'blog', label: 'Blog' },
    { id: 'sobre', label: 'Sobre o SafeTech' },
    { id: 'contato', label: 'Entre em Contato' }
  ];

  const riscos = [
    {
      icon: AlertTriangle,
      title: "Discriminação Algorítmica",
      description: "Sistemas de IA que perpetuam e amplificam vieses históricos em decisões de contratação, crédito e justiça."
    },
    {
      icon: Shield,
      title: "Privacidade Violada",
      description: "Coleta massiva de dados pessoais, muitas vezes sem consentimento informado ou transparência."
    },
    {
      icon: Users,
      title: "Desinformação em Escala",
      description: "Deepfakes, conteúdo sintético e manipulação de narrativas afetando democracia e confiança."
    },
    {
      icon: Lightbulb,
      title: "Dependência Digital",
      description: "Interfaces projetadas para capturar atenção e criar comportamentos compulsivos."
    }
  ];

  const casosReais = [
    {
      titulo: "Amazon: Algoritmo Discriminatório na Contratação",
      ano: "2018",
      descricao: "Ferramenta de IA da Amazon foi descoberta discriminando candidatas mulheres. O sistema havia 'aprendido' preconceitos dos dados históricos da empresa.",
      impacto: "Descontinuação do programa"
    },
    {
      titulo: "Cambridge Analytica: Manipulação via Dados",
      ano: "2018",
      descricao: "Empresa utilizou dados de 87 milhões de usuários do Facebook sem consentimento para criar perfis psicológicos e manipular eleições.",
      impacto: "Fechamento da empresa, processos legais"
    },
    {
      titulo: "Facial Recognition: Prisões Equivocadas",
      ano: "2020",
      descricao: "Pessoas negras foram presas por engano devido a falsos positivos em sistemas de reconhecimento facial com taxas de erro desproporcional.",
      impacto: "Revisão de políticas de implementação"
    },
    {
      titulo: "TikTok: Algoritmo Viciante",
      ano: "2021",
      descricao: "Estudos revelam que o algoritmo do TikTok deliberadamente prioriza conteúdo que mantém usuários (especialmente adolescentes) na plataforma por horas.",
      impacto: "Investigações governamentais em múltiplos países"
    }
  ];

  const solucoes = [
    {
      titulo: "Educação Digital",
      pontos: [
        "Entender como funcionam os algoritmos",
        "Reconhecer manipulação e desinformação",
        "Proteger dados e privacidade pessoal"
      ]
    },
    {
      titulo: "Regulamentação e Accountability",
      pontos: [
        "Exigir transparência de empresas de tech",
        "Auditorias de viés em sistemas de IA",
        "Responsabilidade por danos causados"
      ]
    },
    {
      titulo: "Escolhas Conscientes",
      pontos: [
        "Avaliar termos de privacidade",
        "Usar ferramentas de proteção de dados",
        "Apoiar alternativas éticas"
      ]
    },
    {
      titulo: "Advocacy e Mudança Política",
      pontos: [
        "Apoiar legislação de proteção de dados",
        "Demandar governos por regulação",
        "Participar em discussões públicas"
      ]
    }
  ];

  const blogPosts = [
    {
      title: "IA e Discriminação: Como Algoritmos Perpetuam Desigualdades",
      excerpt: "Exploramos casos reais onde sistemas de inteligência artificial reproduziram e amplificaram vieses históricos.",
      category: "IA",
      date: "15 de maio, 2024",
      readTime: "8 min"
    },
    {
      title: "Privacidade Digital: O Que Você Realmente Não Deveria Saber",
      excerpt: "Como dados pessoais são coletados, vendidos e utilizados. Uma análise sobre o direito à privacidade.",
      category: "Privacidade",
      date: "12 de maio, 2024",
      readTime: "6 min"
    },
    {
      title: "Deepfakes e Desinformação: A Próxima Fronteira do Engano",
      excerpt: "Entenda como tecnologias de síntese de vídeo e áudio estão sendo usadas para criar conteúdo falso.",
      category: "Tecnologia",
      date: "8 de maio, 2024",
      readTime: "7 min"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  const HomePage = () => (
    <>
      <section className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              Consciência<br />Digital para Todos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              SafeTech é uma plataforma educacional dedicada a conscientizar sobre os riscos da tecnologia e inteligência artificial quando mal utilizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={() => navigateTo('riscos')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2"
              >
                Entender os Riscos <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => navigateTo('sobre')}
                className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">87M+</div>
              <p className="text-gray-600">Usuários afetados por vazamento de dados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50%+</div>
              <p className="text-gray-600">Pessoas nunca leram termos de privacidade</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
              <p className="text-gray-600">Anos de vida perdidos em vício digital</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">De algoritmos têm viés potencial</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const RiscosPage = () => (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Os Riscos da Tecnologia</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Conheça os principais desafios e riscos da inteligência artificial e tecnologia moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {riscos.map((risco, index) => {
            const Icon = risco.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{risco.title}</h3>
                <p className="text-gray-600 leading-relaxed">{risco.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Por que isso importa?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Esses riscos não são teóricos. Todos os dias, pessoas reais são afetadas por sistemas de IA falhos, discriminatórios ou manipulativos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A diferença entre um sistema de IA bem implementado e um desastre pode ser a diferença entre oportunidade e discriminação.
          </p>
        </div>
      </div>
    </section>
  );

  const CasosPage = () => (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Casos Reais Documentados</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Exemplos verificados de como tecnologia afetou (negativamente) a vida real.
          </p>
        </div>

        <div className="space-y-6">
          {casosReais.map((caso, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-blue-400 transition">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 flex-1">{caso.titulo}</h3>
                <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                  {caso.ano}
                </span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{caso.descricao}</p>
              <div className="bg-gray-50 border-l-4 border-red-500 px-4 py-3 rounded">
                <p className="text-sm font-semibold text-gray-600">Impacto:</p>
                <p className="text-gray-800">{caso.impacto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SolucoesPage = () => (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Soluções Práticas</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            O que você pode fazer agora para se proteger e contribuir para mudança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solucoes.map((solucao, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{solucao.titulo}</h3>
              <ul className="space-y-3">
                {solucao.pontos.map((ponto, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-700">{ponto}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Comece Hoje</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <p className="font-semibold text-gray-900 mb-1">Educa-se</p>
              <p className="text-gray-700 text-sm">Leia nossos artigos e entenda os riscos.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <p className="font-semibold text-gray-900 mb-1">Proteja-se</p>
              <p className="text-gray-700 text-sm">Implemente práticas de segurança digital.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <p className="font-semibold text-gray-900 mb-1">Mobilize-se</p>
              <p className="text-gray-700 text-sm">Compartilhe conhecimento e mude narrativas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const BlogPage = () => (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Análises confiáveis sobre tecnologia, IA e impacto social</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition cursor-pointer group">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{post.date}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const SobrePage = () => (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Sobre o SafeTech</h1>

        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">O que é o SafeTech?</h2>
            <p className="text-gray-700 leading-relaxed">
              O SafeTech é uma plataforma educacional dedicada a conscientizar pessoas e organizações sobre os riscos da tecnologia e inteligência artificial quando mal utilizadas.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Não somos especialistas técnicos distantes — somos pessoas comuns preocupadas com o impacto social da IA, reunindo conhecimento confiável de forma honesta e prática.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Abordagem</h2>
            <p className="text-gray-700 mb-4">Todo nosso conteúdo é baseado em:</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Pesquisas de instituições renomadas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Análises de especialistas reconhecidos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Casos documentados e verificáveis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Fontes confiáveis e transparentes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Transparência</h3>
                <p className="text-gray-700 text-sm">Somos honestos sobre nossas fontes e limitações</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Acessibilidade</h3>
                <p className="text-gray-700 text-sm">Sem jargões técnicos desnecessários</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Responsabilidade</h3>
                <p className="text-gray-700 text-sm">Informação verificada e confiável</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Empoderamento</h3>
                <p className="text-gray-700 text-sm">Foco em soluções práticas</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nosso Compromisso</h2>
            <p className="text-gray-700 leading-relaxed">
              Nos comprometemos a fornecer informação de qualidade, baseada em fatos, sem alarmismo desnecessário, mas também sem minimizar riscos reais.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Queremos contribuir para um futuro onde a tecnologia serve a humanidade — não o contrário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const ContatoPage = () => (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Entre em Contato</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">contato@safetech.com</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
            <p className="text-gray-600 text-sm">+258 84 123 4567</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Localização</h3>
            <p className="text-gray-600 text-sm">Maputo, Mozambique</p>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Seu Nome"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
            <input
              type="email"
              placeholder="Seu Email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          </div>
          <textarea
            placeholder="Sua Mensagem"
            rows="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 mb-6"
          />
          <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => navigateTo('home')} className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SafeTech</span>
            </button>

            <div className="hidden lg:flex gap-1">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-4 py-2 rounded-lg transition text-sm font-medium ${
                    currentPage === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-1 border-t border-gray-200 pt-4">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    currentPage === item.id
                      ? 'bg-blue-100 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'riscos' && <RiscosPage />}
        {currentPage === 'casos' && <CasosPage />}
        {currentPage === 'solucoes' && <SolucoesPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'sobre' && <SobrePage />}
        {currentPage === 'contato' && <ContatoPage />}
      </main>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Fique Informado</h2>
          <p className="text-blue-100 mb-6">Receba artigos e análises sobre ética tecnológica diretamente na sua caixa de entrada.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 transition rounded-lg font-semibold whitespace-nowrap"
            >
              {subscribed ? 'Inscrito! ✓' : 'Inscrever'}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-white">SafeTech</span>
              </div>
              <p className="text-sm">Consciência digital para todos</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                {navigationItems.map(item => (
                  <li key={item.id}>
                    <button onClick={() => navigateTo(item.id)} className="hover:text-white transition">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Estudos</a></li>
                <li><a href="#" className="hover:text-white transition">Guias</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-center">© 2024 SafeTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
    }
