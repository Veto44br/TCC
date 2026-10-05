# ALT WEAR — integração com Supabase

O site agora usa Supabase Auth para cadastro/login e PostgreSQL para perfis, pedidos, itens de pedido e devoluções.

## Primeiro acesso

> **Importante:** executar o SQL cria as tabelas e políticas no banco, mas não carrega a biblioteca Supabase no navegador. O site também precisa carregar a biblioteca JavaScript antes de `database.js`. Essa ordem já está configurada nesta versão.
1. Abra o projeto no Supabase.
2. Vá em **SQL Editor**.
3. Abra o arquivo `ALT_WEAr_SUPABASE_SETUP.sql` que acompanha este projeto.
4. Execute todo o SQL.
5. Em **Authentication > Providers > Email**, para testes locais, você pode desativar a confirmação obrigatória de e-mail. Se mantiver a confirmação, o cadastro solicitará a confirmação antes do login.
6. Abra `index.html` usando o Live Server do VS Code.

## Segurança
A chave publicada no `js/database.js` é uma Publishable Key. Não coloque `service_role` ou outras chaves secretas no frontend.

## Funcionalidades conectadas
- Cadastro e login com Supabase Auth.
- Perfil associado ao usuário autenticado.
- Pedidos e itens de pedido salvos no PostgreSQL.
- Histórico de pedidos carregado do banco.
- Solicitações de devolução salvas no PostgreSQL.
- RLS restringindo os dados ao usuário autenticado.

Os pagamentos continuam sendo apenas uma simulação acadêmica.
