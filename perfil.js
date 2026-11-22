(function () {
  const { useState, useEffect, createElement: e } = React;

  function Perfil() {
    const [abaAtiva, setAbaAtiva] = useState('perfil');
    const [editando, setEditando] = useState(false);
    const [mostrarUsuarioSidebar, setMostrarUsuarioSidebar] = useState(false);

    const [usuario, setUsuario] = useState({
      nomeCompleto: 'Maria Carolina',
      nomeUsuario: '@MaCarol',
      nomeUsuarioCampo: '@Macarol',
      profissaoTitulo: 'Designer e Diretora de Artes',
      profissaoCampo: 'Designer e diretora de arte',
      localizacao: 'São Paulo, Brasil',
      email: 'Marilia@gmail.design.com',
      telefone: '+55 11 98765-4321',
      site: 'www.analima.design.com.br',
      sobreHero:
        'Crio identidades, imagens e experiências digitais para projetos que valorizam clareza, personalidade e intenção.',
      sobreCampo:
        'Crio identidades, imagens e experiências digitais para projetos que',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    });

    useEffect(() => {
      const aoRolar = () => {
        setMostrarUsuarioSidebar(window.scrollY > 220);
      };
      window.addEventListener('scroll', aoRolar);
      return () => window.removeEventListener('scroll', aoRolar);
    }, []);

    const handleChange = (campo) => (ev) => {
      const valor = ev.target.value;
      setUsuario((prev) => {
        const atualizado = { ...prev, [campo]: valor };
        if (campo === 'profissaoCampo') {
          atualizado.profissaoTitulo = valor;
        }
        return atualizado;
      });
    };

    const projetos = [
      {
        id: 1,
        titulo: 'Identidade em movimento',
        descricao:
          'Um estudo de formas, ritmo e tipografia criado para marcas que querem ocupar novos espaços.',
        imagem:
          'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
        isPlaceholder: false,
      },
      {
        id: 2,
        titulo: 'Nome do Projeto',
        descricao:
          'Projeto........................................................................................................................................',
        imagem: null,
        isPlaceholder: true,
      },
      {
        id: 3,
        titulo: 'Nome do Projeto',
        descricao:
          'Projeto........................................................................................................................................',
        imagem: null,
        isPlaceholder: true,
      },
    ];

    return e(
      'div',
      { className: 'perfil-layout' },

      // BARRA LATERAL
      e(
        'aside',
        { className: 'sidebar' },
        e(
          'div',
          null,
          e(
            'div',
            {
              className: `sidebar-user ${mostrarUsuarioSidebar ? 'visible' : ''}`,
            },
            e('img', {
              src: usuario.avatar,
              alt: usuario.nomeCompleto,
              className: 'sidebar-avatar',
            }),
            e('span', { className: 'sidebar-name' }, usuario.nomeCompleto)
          ),

          e(
            'nav',
            { className: 'sidebar-nav' },
            e(
              'button',
              {
                type: 'button',
                className: `nav-item ${abaAtiva === 'projetos' ? 'active' : ''}`,
                onClick: () => {
                  setAbaAtiva('projetos');
                  document
                    .getElementById('secao-projetos')
                    ?.scrollIntoView({ behavior: 'smooth' });
                },
              },
              e('span', { className: 'dot' }),
              'Projetos'
            ),
            e(
              'button',
              {
                type: 'button',
                className: `nav-item ${abaAtiva === 'perfil' ? 'active' : ''}`,
                onClick: () => {
                  setAbaAtiva('perfil');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                },
              },
              e('span', { className: 'dot' }),
              'Perfil'
            ),
            e(
              'button',
              {
                type: 'button',
                className: `nav-item ${abaAtiva === 'contatos' ? 'active' : ''}`,
                onClick: () => setAbaAtiva('contatos'),
              },
              e('span', { className: 'dot' }),
              'Contatos'
            )
          )
        ),

        e(
          'div',
          { className: 'sidebar-footer' },
          e(
            'button',
            {
              type: 'button',
              className: 'btn-settings',
              title: 'Voltar para o início',
              onClick: () => {
                window.location.href = 'index.html';
              },
            },
            e(
              'svg',
              {
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '1.7',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              },
              e('circle', { cx: '12', cy: '12', r: '3' }),
              e('path', {
                d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
              })
            )
          )
        )
      ),

      // CONTEÚDO PRINCIPAL
      e(
        'main',
        { className: 'perfil-main' },

        // CABEÇALHO
        e(
          'header',
          { className: 'perfil-header' },
          e('h1', { className: 'perfil-page-title' }, 'Seu Perfil'),
          e(
            'button',
            {
              type: 'button',
              className: `btn-editar ${editando ? 'salvando' : ''}`,
              onClick: () => setEditando(!editando),
            },
            e(
              'svg',
              {
                width: '18',
                height: '18',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '1.8',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              },
              e('path', {
                d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
              }),
              e('path', {
                d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
              })
            ),
            editando ? 'Salvar' : 'Editar'
          )
        ),

        // BANNER DO PERFIL
        e(
          'section',
          { className: 'hero-card' },
          e(
            'div',
            { className: 'hero-left' },
            e('img', {
              src: usuario.avatar,
              alt: usuario.nomeCompleto,
              className: 'hero-avatar',
            }),
            e('h2', { className: 'hero-name' }, usuario.nomeCompleto),
            e('span', { className: 'hero-handle' }, usuario.nomeUsuario)
          ),
          e(
            'div',
            { className: 'hero-right' },
            e(
              'div',
              null,
              e('h3', { className: 'hero-role' }, usuario.profissaoTitulo),
              e('p', { className: 'hero-bio' }, usuario.sobreHero)
            ),
            e(
              'div',
              { className: 'hero-meta' },
              e('span', null, usuario.email),
              e('span', null, `${usuario.localizacao}.`)
            )
          )
        ),

        // DADOS PESSOAIS
        e(
          'section',
          { className: 'section-card' },
          e(
            'div',
            { className: 'section-header' },
            e('h2', { className: 'mono-title' }, 'Dados Pessoais:'),
            e('span', { className: 'visibility-note' }, 'Visível apenas para você')
          ),
          e(
            'div',
            { className: 'dados-grid' },
            e(
              'div',
              { className: 'field-box' },
              e('label', null, 'NOME COMPLETO'),
              e('input', {
                type: 'text',
                value: usuario.nomeCompleto,
                onChange: handleChange('nomeCompleto'),
                readOnly: !editando,
              })
            ),
            e(
              'div',
              { className: 'field-box' },
              e('label', null, 'NOME DE USUÁRIO'),
              e('input', {
                type: 'text',
                value: usuario.nomeUsuarioCampo,
                onChange: handleChange('nomeUsuarioCampo'),
                readOnly: !editando,
              })
            ),
            e(
              'div',
              { className: 'field-box' },
              e('label', null, 'PROFISSÃO'),
              e('input', {
                type: 'text',
                value: usuario.profissaoCampo,
                onChange: handleChange('profissaoCampo'),
                readOnly: !editando,
              })
            ),
            e(
              'div',
              { className: 'field-box' },
              e('label', null, 'LOCALIZAÇÃO'),
              e('input', {
                type: 'text',
                value: usuario.localizacao,
                onChange: handleChange('localizacao'),
                readOnly: !editando,
              })
            ),
            e(
              'div',
              { className: 'field-box' },
              e('label', null, 'E-MAIL'),
              e('input', {
                type: 'email',
                value: usuario.email,
                onChange: handleChange('email'),
                readOnly: !editando,
              })
            ),
            e(
              'div',
              { className: 'field-box' },
              e('label', null, 'TELEFONE'),
              e('input', {
                type: 'text',
                value: usuario.telefone,
                onChange: handleChange('telefone'),
                readOnly: !editando,
              })
            ),
            e(
              'div',
              { className: 'field-box' },
              e('label', null, 'SITE'),
              e('input', {
                type: 'text',
                value: usuario.site,
                onChange: handleChange('site'),
                readOnly: !editando,
              })
            ),
            e(
              'div',
              { className: 'field-box full-width' },
              e('label', null, 'SOBRE'),
              e('textarea', {
                value: usuario.sobreCampo,
                onChange: handleChange('sobreCampo'),
                readOnly: !editando,
              })
            )
          )
        ),

        // MEUS PROJETOS
        e(
          'section',
          { id: 'secao-projetos', className: 'section-card' },
          e(
            'div',
            { className: 'section-header' },
            e('h2', { className: 'mono-title' }, 'Meus Projetos:'),
            e('span', { className: 'badge-count' }, '3 Projetos Publicados')
          ),
          e(
            'div',
            { className: 'projetos-grid' },
            projetos.map((proj) =>
              e(
                'article',
                { key: proj.id, className: 'projeto-card' },
                e(
                  'div',
                  { className: 'projeto-cover' },
                  proj.imagem
                    ? e('img', { src: proj.imagem, alt: proj.titulo })
                    : null
                ),
                e(
                  'div',
                  { className: 'projeto-title-box' },
                  e('h3', null, proj.titulo)
                ),
                e(
                  'div',
                  { className: 'projeto-desc-box' },
                  e(
                    'p',
                    { className: proj.isPlaceholder ? 'placeholder-dots' : '' },
                    proj.descricao
                  )
                )
              )
            )
          )
        )
      )
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(Perfil));
})();