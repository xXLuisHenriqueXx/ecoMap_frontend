# EcoMap ♻
EcoMap é um aplicativo para celular que ajuda os usuários a encontrar locais de descarte de lixo próximos, promovendo uma prática ambientalmente consciente. O aplicativo permite visualizar os locais tanto em uma lista quanto em um mapa, e os usuários podem se registrar, fazer login, visualizar e salvar os locais de interesse.

## Funcionalidades
- **Busca de Locais** Próximos: Por meio da localização atual do usuário, encontra locais de descarte de lixo próximos.
- **Visualização em Mapa ou Lista**: Exibe os locais em uma lista ou diretamente no mapa.
- **Registro e Login**: Permite que os usuários se registrem e façam login na aplicação.
- **Salvamento de Locais**: Usuários registrados podem salvar locais de descarte para fácil acesso posterior.

## Tecnologias Utilizadas <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="20"/>
- **Expo**: Plataforma para desenvolvimento de aplicativos móveis usando React Native.
- **React Native**: Framework para construir aplicações móveis nativas usando JavaScript e React.
- **Google Maps API (PlacesAPI)**: Integração com APIs de mapas para exibição dos locais de descarte.

## Como Executar o Projeto
1. Clone o repositório com os comandos abaixo:
```bash
git clone https://github.com/seu-usuario/ecomap.git
cd ecomap
```

2. Instale as dependências com o comando abaixo:
```bash
npm install
```

3. Execute o aplicativo:
```bash
npx expo start
```

4. Use o aplicativo no seu dispositivo físico ou emulador através do Expo Go.

## Estrutura do Projeto
- src/
  - assets/: Imagens, ícones e outros recursos estáticos.
  - components/: Componentes reutilizáveis da aplicação.
  - contexts/: Contextos globais do React para gerenciar estados e dados que precisam ser acessados em múltiplos componentes.
  - entities/: Definições e interfaces das entidades principais da aplicação.
  - hook/: Custom hooks do React para encapsular lógica reutilizável, como manipulação de estados, efeitos colaterais, ou integração com APIs.
  - routes/: Configuração das rotas de navegação da aplicação, definindo as transições entre as telas.
  - screens/: Telas do aplicativo, como Home, Mapa, e Lista de Locais.
  - services/: Serviços de API e outras funcionalidades de backend.
  - styles/: Estilos globais e temas da aplicação.
  - utils/: Funções utilitárias e helpers, que podem ser reutilizadas em diferentes partes do aplicativo para realizar tarefas comuns.

---

# Contribuição
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir issues ou pull requests.

# Licença
Este projeto está licenciado sob a MIT License.
