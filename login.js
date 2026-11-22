(function () {
  const { useState, useEffect, createElement: e } = React;

  function Login({ onIrParaCadastro, onIrParaPerfil }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [lembrarEmail, setLembrarEmail] = useState(false);
    const [aviso, setAviso] = useState('');

    useEffect(() => {
      const emailSalvo = localStorage.getItem('emailLembrado');
      if (emailSalvo) {
        setEmail(emailSalvo);
        setLembrarEmail(true);
      }
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      if (lembrarEmail && email) {
        localStorage.setItem('emailLembrado', email);
      } else {
        localStorage.removeItem('emailLembrado');
      }
      if (typeof onIrParaPerfil === 'function') {
        onIrParaPerfil();
      } else {
        window.location.href = 'perfil.html';
      }
    };

    return e(
      'div',
      { className: 'login-wrapper' },
      e(
        'div',
        { className: 'login-card' },
        e(
          'section',
          { className: 'login-left' },
          e(
            'div',
            null,
            e('span', { className: 'brand-kicker' }, 'SEU ESPAÇO CRIATIVO'),
            e(
              'h1',
              { className: 'hero-heading' },
              'Boas ideias',
              e('br'),
              'merecem',
              e('br'),
              'continuar.'
            ),
            e(
              'p',
              { className: 'hero-subtext' },
              'Volte ao seu portfólio e dê o próximo passo na sua história criativa.'
            ),
            e(
              'div',
              { className: 'geometric-art', 'aria-hidden': 'true' },
              e('div', { className: 'shape-ring' }),
              e('div', { className: 'shape-square' }),
              e('div', { className: 'shape-circle' })
            )
          ),
          e(
            'p',
            { className: 'left-footer' },
            'Um lugar para criar. Um espaço para ser você.'
          )
        ),

        e(
          'section',
          { className: 'login-right' },
          e(
            'div',
            null,
            e(
              'button',
              {
                type: 'button',
                className: 'top-badge-btn',
                title: 'Ir para o perfil',
                onClick: () => {
                  if (typeof onIrParaPerfil === 'function') {
                    onIrParaPerfil();
                  } else {
                    window.location.href = 'perfil.html';
                  }
                },
              },
              '↗'
            ),
            e('span', { className: 'welcome-kicker' }, 'BEM-VINDO DE VOLTA'),
            e('h2', { className: 'login-title' }, 'Entre no seu espaço.'),
            e('p', { className: 'login-subtitle' }, 'Suas ideias esperam por você.'),

            e(
              'form',
              { className: 'login-form', onSubmit: handleSubmit },
              e(
                'div',
                { className: 'input-group' },
                e('label', { htmlFor: 'email' }, 'E-mail'),
                e('input', {
                  id: 'email',
                  type: 'email',
                  className: 'input-control',
                  placeholder: 'voce@exemplo.com',
                  value: email,
                  onChange: (ev) => setEmail(ev.target.value),
                  required: true,
                })
              ),

              e(
                'div',
                { className: 'input-group' },
                e('label', { htmlFor: 'senha' }, 'Senha'),
                e(
                  'div',
                  { className: 'password-wrapper' },
                  e('input', {
                    id: 'senha',
                    type: mostrarSenha ? 'text' : 'password',
                    className: 'input-control',
                    placeholder: 'Digite sua senha',
                    value: senha,
                    onChange: (ev) => setSenha(ev.target.value),
                    required: true,
                  }),
                  e(
                    'button',
                    {
                      type: 'button',
                      className: 'toggle-password-btn',
                      onClick: () => setMostrarSenha(!mostrarSenha),
                      'aria-label': 'Mostrar ou ocultar senha',
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
                        d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z',
                      }),
                      e('circle', { cx: '12', cy: '12', r: '3' })
                    )
                  )
                )
              ),

              e(
                'div',
                { className: 'options-row' },
                e(
                  'label',
                  { className: 'remember-label' },
                  e('input', {
                    type: 'checkbox',
                    checked: lembrarEmail,
                    onChange: (ev) => setLembrarEmail(ev.target.checked),
                  }),
                  'Lembrar meu e-mail'
                ),
                e(
                  'button',
                  {
                    type: 'button',
                    className: 'link-btn',
                    onClick: () =>
                      setAviso('Recuperação de senha indisponível nesta prévia.'),
                  },
                  'Esqueci minha senha'
                )
              ),

              aviso ? e('p', { className: 'feedback-msg' }, aviso) : null,

              e(
                'button',
                { type: 'submit', className: 'btn-entrar' },
                e('span', null, 'Entrar'),
                e('span', { 'aria-hidden': 'true' }, '→')
              )
            ),

            e(
              'p',
              { className: 'signup-row' },
              'Ainda não tem uma conta? ',
              e(
                'button',
                {
                  type: 'button',
                  className: 'link-btn',
                  onClick: () => {
                    if (typeof onIrParaCadastro === 'function') {
                      onIrParaCadastro();
                    }
                  },
                },
                'Cadastre-se'
              )
            )
          ),

          e(
            'p',
            { className: 'right-footer' },
            'Prévia interativa · O acesso abre o perfil apenas nesta sessão, sem autenticação real. Use dados fictícios. Apenas o e-mail pode ser lembrado neste navegador.'
          )
        )
      )
    );
  }

  window.Login = Login;
})();