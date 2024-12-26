# Clima Tempo ⛅

![Clima Tempo Preview](https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2070&q=80)

Uma aplicação web moderna para consulta de previsão do tempo, desenvolvida com React e TypeScript. Oferece uma interface intuitiva e responsiva para visualização das condições climáticas atuais e previsão para os próximos dias.

## ✨ Features

- 🌍 Detecção automática de localização
- 🔍 Busca por cidade
- 📱 Design responsivo
- 🎨 Interface moderna com animações suaves
- 📍 Histórico de pesquisas recentes
- 🌡️ Dados detalhados do clima:
  - Temperatura atual
  - Sensação térmica
  - Umidade
  - Velocidade do vento
  - Previsão para os próximos dias

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e bundler
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca para animações
- **React Query** - Gerenciamento de estado e cache
- **Axios** - Cliente HTTP
- **Lucide React** - Biblioteca de ícones
- **OpenWeather API** - API de dados climáticos

## 🛠️ Instalação

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/clima-tempo.git
\`\`\`

2. Instale as dependências:
\`\`\`bash
cd clima-tempo
npm install
\`\`\`

3. Crie um arquivo \`.env\` na raiz do projeto e adicione sua chave da API do OpenWeather:
\`\`\`env
VITE_API_KEY=sua_chave_api_aqui
\`\`\`

4. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

## 📦 Estrutura do Projeto

\`\`\`
src/
├── components/        # Componentes React reutilizáveis
├── hooks/            # Hooks customizados
├── services/         # Serviços e integrações com APIs
├── types/            # Definições de tipos TypeScript
├── App.tsx           # Componente principal
└── main.tsx         # Ponto de entrada da aplicação
\`\`\`

## 🔧 Componentes Principais

- **SearchBar**: Barra de pesquisa com autocompletar
- **WeatherCard**: Card principal com informações do clima
- **ForecastCard**: Previsão para os próximos dias
- **SearchHistory**: Histórico de pesquisas recentes
- **AnimatedCard**: Wrapper para animações consistentes

## ⚡ Performance

- Cache de requisições com React Query
- Lazy loading de componentes
- Otimização de imagens
- Animações otimizadas com Framer Motion

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Seu Nome - [@joaomgsb](https://github.com/joaomgsb)

## 🙏 Agradecimentos

- [OpenWeather](https://openweathermap.org/) pela API de dados climáticos
- [Unsplash](https://unsplash.com/) pelas imagens de background
- [Lucide](https://lucide.dev/) pelos ícones