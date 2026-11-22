(function () {
  const { useState, createElement: e } = React;

  function Cadastro({ onVoltarLogin, onIrParaPerfil }) {
    const [formData, setFormData] = useState({
      nomeCompleto: '',
      nomeUsuario: '',
      email: '',
      areaAtuacao: '',
      senha: '',
      confirmarSenha: '',
      aceitouTermos: false,
    });

    const [erro, setErro] = useState('');

    const handleChange = (campo) => (ev) => {
      const valor =
        ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
      setFormData((prev) => ({
        ...prev,
        [campo]: valor,
      }));
    };

    const handleSubmit = (ev) => {
      ev.preventDefault();

      if (!formData.aceitouTermos) {
        setErro(
          'Você precisa concordar com os termos de uso e política de privacidade.'
        );
        return;
      }

      if (formData.senha !== formData.confirmarSenha) {
        setErro('As senhas não coincidem.');
        return;
      }

      setErro('');

      if (typeof onIrParaPerfil === 'function') {
        onIrParaPerfil();
      } else {
        window.location.href = 'perfil.html';
      }
    };

    return e(
      'div',
      { className: 'cadastro-wrapper' },
      e(
        'div',
        { className: 'cadastro-card' },
        e(
          'section',
          { className: 'cadastro-left' },
          e('span', { className: 'brand-kicker' }, 'SEU PORTFÓLIO COMEÇA AQUI'),
          e(
            'h1',
            { className: 'hero-heading' },
            'Crie.',
            e('br'),
            'Mostre.',
            e('br'),
            'Conecte.'
          ),
          e(
            'p',
            { className: 'hero-subtext' },
            'Organize seus projetos em um perfil autoral, simples e feito para destacar o seu processo.'
          ),
          e(
            'div',
            { className: 'geometric-art', 'aria-hidden': 'true' },
            e('div', { className: 'shape-ring' }),
            e('div', { className: 'shape-square' })
          )
        ),

        e(
          'section',
          { className: 'cadastro-right' },
          e('span', { className: 'nova-conta-kicker' }, 'NOVA CONTA'),
          e('h2', { className: 'cadastro-title' }, 'Cadastro'),
          e(
            'p',
            { className: 'cadastro-subtitle' },
            'Preencha seus dados para criar seu perfil.'
          ),

          e(
            'form',
            { className: 'cadastro-form', onSubmit: handleSubmit },
            e(
              'div',
              { className: 'form-row' },
              e(
                'div',
                { className: 'input-group' },
                e('label', { htmlFor: 'nomeCompleto' }, 'NOME COMPLETO'),
                e('input', {
                  id: 'nomeCompleto',
                  type: 'text',
                  className: 'input-control',
                  value: formData.nomeCompleto,
                  onChange: handleChange('nomeCompleto'),
                  required: true,
                })
              ),
              e(
                'div',
                { className: 'input-group' },
                e('label', { htmlFor: 'nomeUsuario' }, 'NOME DE USUÁRIO'),
                e('input', {
                  id: 'nomeUsuario',
                  type: 'text',
                  className: 'input-control',
                  placeholder: '@seunome',
                  value: formData.nomeUsuario,
                  onChange: handleChange('nomeUsuario'),
                  required: true,
                })
              )
            ),

            e(
              'div',
              { className: 'input-group' },
              e('label', { htmlFor: 'email' }, 'E-MAIL'),
              e('input', {
                id: 'email',
                type: 'email',
                className: 'input-control',
                value: formData.email,
                onChange: handleChange('email'),
                required: true,
              })
            ),

            e(
              'div',
              { className: 'input-group' },
              e('label', { htmlFor: 'areaAtuacao' }, 'ÁREA DE ATUAÇÃO'),
              e('input', {
                id: 'areaAtuacao',
                type: 'text',
                className: 'input-control',
                placeholder: 'Ex.: Designer e ilustradora',
                value: formData.areaAtuacao,
                onChange: handleChange('areaAtuacao'),
              })
            ),

            e(
              'div',
              { className: 'form-row' },
              e(
                'div',
                { className: 'input-group' },
                e('label', { htmlFor: 'senha' }, 'SENHA'),
                e('input', {
                  id: 'senha',
                  type: 'password',
                  className: 'input-control',
                  value: formData.senha,
                  onChange: handleChange('senha'),
                  required: true,
                })
              ),
              e(
                'div',
                { className: 'input-group' },
                e('label', { htmlFor: 'confirmarSenha' }, 'CONFIRMAR SENHA'),
                e('input', {
                  id: 'confirmarSenha',
                  type: 'password',
                  className: 'input-control',
                  value: formData.confirmarSenha,
                  onChange: handleChange('confirmarSenha'),
                  required: true,
                })
              )
            ),

            e(
              'div',
              { className: 'terms-row' },
              e('input', {
                id: 'aceitouTermos',
                type: 'checkbox',
                checked: formData.aceitouTermos,
                onChange: handleChange('aceitouTermos'),
              }),
              e(
                'label',
                { htmlFor: 'aceitouTermos' },
                'Concordo com os termos de uso e com a política de privacidade.'
              )
            ),

            erro ? e('p', { className: 'feedback-erro' }, erro) : null,

            e(
              'button',
              { type: 'submit', className: 'btn-criar' },
              'Criar minha conta'
            )
          ),

          typeof onVoltarLogin === 'function'
            ? e(
                'p',
                { className: 'back-login-row' },
                'Já tem uma conta? ',
                e(
                  'button',
                  {
                    type: 'button',
                    className: 'link-btn',
                    onClick: onVoltarLogin,
                  },
                  'Entrar'
                )
              )
            : null
        )
      )
    );
  }

  window.Cadastro = Cadastro;
})();