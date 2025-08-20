# Bioimpedance Fitness Website

## Visão Geral
O Bioimpedance Fitness Website foi desenvolvido para fornecer aos usuários informações sobre o teste de bioimpedância e planos de treino semanais personalizados, focados em diferentes grupos musculares. O objetivo do projeto é potencializar a jornada fitness, combinando avaliação científica com rotinas de exercícios sob medida.

## Funcionalidades
- **Informações sobre Bioimpedância**: Saiba mais sobre os benefícios e o processo do teste de bioimpedância.
- **Planos de Treino Personalizados**: Tenha acesso a planos semanais de treino que focam em grupos musculares específicos, de acordo com seus objetivos.
- **Interface Amigável**: Navegue facilmente pelo site com um design limpo e responsivo.

## Estrutura do Projeto
```
bioimpedance-fitness-website
|.vscode
|   └── extensions.json
├── public
│   └── index.html          # Documento HTML principal
├── src
│   ├── assets              # Arquivos estáticos (imagens, fontes, etc.)
│   ├── components
│   │   └── Header.jsx      # Componente da barra de navegação
│   ├── pages
│   │   ├── Home.jsx        # Componente da página inicial
│   │   ├── Bioimpedance.jsx # Componente de informações sobre bioimpedância
│   │   └── WorkoutPlans.jsx # Componente dos planos de treino semanais
│   ├── styles
│   │   └── main.css        # Estilos CSS principais
│   └── App.jsx             # Componente principal da aplicação
├── package.json            # Arquivo de configuração npm
└── README.md               # Documentação do projeto
```

## Instalação
1. Clone o repositório:
   ```
   git clone <url-do-repositório>
   ```
2. Acesse o diretório do projeto:
   ```
   cd bioimpedance-fitness-website
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso
Para iniciar o servidor de desenvolvimento, execute:
```
npm start
```
Abra o navegador e acesse `http://localhost:3000` para visualizar a aplicação.

---

## Como colocar o projeto online com backend

Se você quiser rodar o backend localmente ou publicar online, siga estes passos:

### 1. Criar um backend básico com Node.js e Express

Crie o arquivo `src/server.js` com o seguinte conteúdo:

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Exemplo de rota para clientes
app.get('/api/clients', (req, res) => {
  res.json([{ id: 1, name: 'Fulano' }]);
});

// Exemplo de rota para adicionar cliente
app.post('/api/clients', (req, res) => {
  res.status(201).json(req.body);
});

// Outras rotas para treinos, bioimpedância, login, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

### 2. Instalar dependências do backend

No terminal, execute:
```
npm install express cors
```

### 3. Rodar o backend localmente

No terminal, execute:
```cd Progamação\bioimpedance-fitness-website\backend

C:\Users\Mils\Documents\Progamação\bioimpedance-fitness-website\backend

entao execulte

node server.js
```
### 4. Conectar o frontend ao backend

Altere o frontend para consumir as rotas do backend usando `fetch` ou `axios`.

### 5. Publicar online

- **Backend:** Hospede em Heroku, Vercel, AWS, DigitalOcean, etc.
- **Frontend:** Hospede em Vercel, Netlify ou no mesmo servidor do backend.
- **Banco de dados:** Use MongoDB, PostgreSQL, MySQL, etc.
- **Segurança:** Implemente autenticação (JWT, sessões) e configure variáveis de ambiente.

### 6. Acesso externo

Para acessar o backend de outros dispositivos na rede local, use o IP do seu PC (ex: `http://192.168.0.10:5000`).  
Para acesso pela internet, será necessário liberar portas no roteador e configurar firewall (não recomendado para produção sem segurança).

## Contribuição
Contribuições são bem-vindas! Envie um pull request ou abra uma issue para sugestões ou melhorias.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para detalhes.







## Minha Estrutura
node_modules\workbox-core\src\models\pluginEvents.ts
node_modules\workbox-core\src\models\quotaErrorCallbacks.ts     
node_modules\workbox-core\src\models\messages\messageGenerator.ts
node_modules\workbox-core\src\models\messages\messages.ts       
node_modules\workbox-core\src\utils\pluginUtils.ts
node_modules\workbox-core\src\utils\welcome.ts
node_modules\workbox-core\src\_private\assert.ts
node_modules\workbox-core\src\_private\cacheNames.ts
node_modules\workbox-core\src\_private\cacheWrapper.ts
node_modules\workbox-core\src\_private\canConstructReadableStream.ts
node_modules\workbox-core\src\_private\canConstructResponseFromBodyStream.ts
node_modules\workbox-core\src\_private\DBWrapper.ts
node_modules\workbox-core\src\_private\Deferred.ts
node_modules\workbox-core\src\_private\deleteDatabase.ts        
node_modules\workbox-core\src\_private\dontWaitFor.ts
node_modules\workbox-core\src\_private\executeQuotaErrorCallbacks.ts
node_modules\workbox-core\src\_private\fetchWrapper.ts
node_modules\workbox-core\src\_private\getFriendlyURL.ts        
node_modules\workbox-core\src\_private\logger.ts
node_modules\workbox-core\src\_private\resultingClientExists.ts 
node_modules\workbox-core\src\_private\timeout.ts
node_modules\workbox-core\src\_private\WorkboxError.ts
node_modules\workbox-core\utils\pluginUtils.d.ts
node_modules\workbox-core\utils\pluginUtils.js
node_modules\workbox-core\utils\pluginUtils.mjs
node_modules\workbox-core\utils\welcome.d.ts
node_modules\workbox-core\utils\welcome.js
node_modules\workbox-core\utils\welcome.mjs
node_modules\workbox-core\_private\assert.d.ts
node_modules\workbox-core\_private\assert.js
node_modules\workbox-core\_private\assert.mjs
node_modules\workbox-core\_private\cacheNames.d.ts
node_modules\workbox-core\_private\cacheNames.js
node_modules\workbox-core\_private\cacheNames.mjs
node_modules\workbox-core\_private\cacheWrapper.d.ts
node_modules\workbox-core\_private\cacheWrapper.js
node_modules\workbox-core\_private\cacheWrapper.mjs
node_modules\workbox-core\_private\canConstructReadableStream.d.ts
node_modules\workbox-core\_private\canConstructReadableStream.jsnode_modules\workbox-core\_private\canConstructReadableStream.mjs
node_modules\workbox-core\_private\canConstructResponseFromBodyStream.d.ts
node_modules\workbox-core\_private\canConstructResponseFromBodyStream.js
node_modules\workbox-core\_private\canConstructResponseFromBodyStream.mjs
node_modules\workbox-core\_private\DBWrapper.d.ts
node_modules\workbox-core\_private\DBWrapper.js
node_modules\workbox-core\_private\DBWrapper.mjs
node_modules\workbox-core\_private\Deferred.d.ts
node_modules\workbox-core\_private\Deferred.js
node_modules\workbox-core\_private\Deferred.mjs
node_modules\workbox-core\_private\deleteDatabase.d.ts
node_modules\workbox-core\_private\deleteDatabase.js
node_modules\workbox-core\_private\deleteDatabase.mjs
node_modules\workbox-core\_private\dontWaitFor.d.ts
node_modules\workbox-core\_private\dontWaitFor.js
node_modules\workbox-core\_private\dontWaitFor.mjs
node_modules\workbox-core\_private\executeQuotaErrorCallbacks.d.ts
node_modules\workbox-core\_private\executeQuotaErrorCallbacks.jsnode_modules\workbox-core\_private\executeQuotaErrorCallbacks.mjs
node_modules\workbox-core\_private\fetchWrapper.d.ts
node_modules\workbox-core\_private\fetchWrapper.js
node_modules\workbox-core\_private\fetchWrapper.mjs
node_modules\workbox-core\_private\getFriendlyURL.d.ts
node_modules\workbox-core\_private\getFriendlyURL.js
node_modules\workbox-core\_private\getFriendlyURL.mjs
node_modules\workbox-core\_private\logger.d.ts
node_modules\workbox-core\_private\logger.js
node_modules\workbox-core\_private\logger.mjs
node_modules\workbox-core\_private\resultingClientExists.d.ts   
node_modules\workbox-core\_private\resultingClientExists.js     
node_modules\workbox-core\_private\resultingClientExists.mjs    
node_modules\workbox-core\_private\timeout.d.ts
node_modules\workbox-core\_private\timeout.js
node_modules\workbox-core\_private\timeout.mjs
node_modules\workbox-core\_private\WorkboxError.d.ts
node_modules\workbox-core\_private\WorkboxError.js
node_modules\workbox-core\_private\WorkboxError.mjs
node_modules\workbox-expiration\build
node_modules\workbox-expiration\models
node_modules\workbox-expiration\src
node_modules\workbox-expiration\CacheExpiration.d.ts
node_modules\workbox-expiration\CacheExpiration.js
node_modules\workbox-expiration\CacheExpiration.mjs
node_modules\workbox-expiration\ExpirationPlugin.d.ts
node_modules\workbox-expiration\ExpirationPlugin.js
node_modules\workbox-expiration\ExpirationPlugin.mjs
node_modules\workbox-expiration\index.d.ts
node_modules\workbox-expiration\index.js
node_modules\workbox-expiration\index.mjs
node_modules\workbox-expiration\LICENSE
node_modules\workbox-expiration\package.json
node_modules\workbox-expiration\README.md
node_modules\workbox-expiration\tsconfig.json
node_modules\workbox-expiration\tsconfig.tsbuildinfo
node_modules\workbox-expiration\_version.d.ts
node_modules\workbox-expiration\_version.js
node_modules\workbox-expiration\_version.mjs
node_modules\workbox-expiration\build\workbox-expiration.dev.js 
node_modules\workbox-expiration\build\workbox-expiration.dev.js.map
node_modules\workbox-expiration\build\workbox-expiration.prod.jsnode_modules\workbox-expiration\build\workbox-expiration.prod.js.map
node_modules\workbox-expiration\models\CacheTimestampsModel.d.tsnode_modules\workbox-expiration\models\CacheTimestampsModel.js  
node_modules\workbox-expiration\models\CacheTimestampsModel.mjs 
node_modules\workbox-expiration\src\models
node_modules\workbox-expiration\src\CacheExpiration.ts
node_modules\workbox-expiration\src\ExpirationPlugin.ts
node_modules\workbox-expiration\src\index.ts
node_modules\workbox-expiration\src\_version.ts
node_modules\workbox-expiration\src\models\CacheTimestampsModel.ts
node_modules\workbox-google-analytics\build
node_modules\workbox-google-analytics\src
node_modules\workbox-google-analytics\utils
node_modules\workbox-google-analytics\index.d.ts
node_modules\workbox-google-analytics\index.js
node_modules\workbox-google-analytics\index.mjs
node_modules\workbox-google-analytics\initialize.d.ts
node_modules\workbox-google-analytics\initialize.js
node_modules\workbox-google-analytics\initialize.mjs
node_modules\workbox-google-analytics\LICENSE
node_modules\workbox-google-analytics\package.json
node_modules\workbox-google-analytics\README.md
node_modules\workbox-google-analytics\tsconfig.json
node_modules\workbox-google-analytics\tsconfig.tsbuildinfo      
node_modules\workbox-google-analytics\_version.d.ts
node_modules\workbox-google-analytics\_version.js
node_modules\workbox-google-analytics\_version.mjs
node_modules\workbox-google-analytics\build\workbox-offline-ga.dev.js
node_modules\workbox-google-analytics\build\workbox-offline-ga.dev.js.map
node_modules\workbox-google-analytics\build\workbox-offline-ga.prod.js
node_modules\workbox-google-analytics\build\workbox-offline-ga.prod.js.map
node_modules\workbox-google-analytics\src\utils
node_modules\workbox-google-analytics\src\index.ts
node_modules\workbox-google-analytics\src\initialize.ts
node_modules\workbox-google-analytics\src\_version.ts
node_modules\workbox-google-analytics\src\utils\constants.ts    
node_modules\workbox-google-analytics\utils\constants.d.ts      
node_modules\workbox-google-analytics\utils\constants.js        
node_modules\workbox-google-analytics\utils\constants.mjs       
node_modules\workbox-navigation-preload\build
node_modules\workbox-navigation-preload\src
node_modules\workbox-navigation-preload\disable.d.ts
node_modules\workbox-navigation-preload\disable.js
node_modules\workbox-navigation-preload\disable.mjs
node_modules\workbox-navigation-preload\enable.d.ts
node_modules\workbox-navigation-preload\enable.js
node_modules\workbox-navigation-preload\enable.mjs
node_modules\workbox-navigation-preload\index.d.ts
node_modules\workbox-navigation-preload\index.js
node_modules\workbox-navigation-preload\index.mjs
node_modules\workbox-navigation-preload\isSupported.d.ts        
node_modules\workbox-navigation-preload\isSupported.js
node_modules\workbox-navigation-preload\isSupported.mjs
node_modules\workbox-navigation-preload\LICENSE
node_modules\workbox-navigation-preload\package.json
node_modules\workbox-navigation-preload\README.md
node_modules\workbox-navigation-preload\tsconfig.json
node_modules\workbox-navigation-preload\tsconfig.tsbuildinfo    
node_modules\workbox-navigation-preload\_version.d.ts
node_modules\workbox-navigation-preload\_version.js
node_modules\workbox-navigation-preload\_version.mjs
node_modules\workbox-navigation-preload\build\workbox-navigation-preload.dev.js
node_modules\workbox-navigation-preload\build\workbox-navigation-preload.dev.js.map
node_modules\workbox-navigation-preload\build\workbox-navigation-preload.prod.js
node_modules\workbox-navigation-preload\build\workbox-navigation-preload.prod.js.map
node_modules\workbox-navigation-preload\src\disable.ts
node_modules\workbox-navigation-preload\src\enable.ts
node_modules\workbox-navigation-preload\src\index.ts
node_modules\workbox-navigation-preload\src\isSupported.ts      
node_modules\workbox-navigation-preload\src\_version.ts
node_modules\workbox-precaching\build
node_modules\workbox-precaching\src
node_modules\workbox-precaching\utils
node_modules\workbox-precaching\addPlugins.d.ts
node_modules\workbox-precaching\addPlugins.js
node_modules\workbox-precaching\addPlugins.mjs
node_modules\workbox-precaching\addRoute.d.ts
node_modules\workbox-precaching\addRoute.js
node_modules\workbox-precaching\addRoute.mjs
node_modules\workbox-precaching\cleanupOutdatedCaches.d.ts      
node_modules\workbox-precaching\cleanupOutdatedCaches.js        
node_modules\workbox-precaching\cleanupOutdatedCaches.mjs       
node_modules\workbox-precaching\createHandler.d.ts
node_modules\workbox-precaching\createHandler.js
node_modules\workbox-precaching\createHandler.mjs
node_modules\workbox-precaching\createHandlerBoundToURL.d.ts    
node_modules\workbox-precaching\createHandlerBoundToURL.js      
node_modules\workbox-precaching\createHandlerBoundToURL.mjs     
node_modules\workbox-precaching\getCacheKeyForURL.d.ts
node_modules\workbox-precaching\getCacheKeyForURL.js
node_modules\workbox-precaching\getCacheKeyForURL.mjs
node_modules\workbox-precaching\index.d.ts
node_modules\workbox-precaching\index.js
node_modules\workbox-precaching\index.mjs
node_modules\workbox-precaching\LICENSE
node_modules\workbox-precaching\matchPrecache.d.ts
node_modules\workbox-precaching\matchPrecache.js
node_modules\workbox-precaching\matchPrecache.mjs
node_modules\workbox-precaching\package.json
node_modules\workbox-precaching\precache.d.ts
node_modules\workbox-precaching\precache.js
node_modules\workbox-precaching\precache.mjs
node_modules\workbox-precaching\precacheAndRoute.d.ts
node_modules\workbox-precaching\precacheAndRoute.js
node_modules\workbox-precaching\precacheAndRoute.mjs
node_modules\workbox-precaching\PrecacheController.d.ts
node_modules\workbox-precaching\PrecacheController.js
node_modules\workbox-precaching\PrecacheController.mjs
node_modules\workbox-precaching\README.md
node_modules\workbox-precaching\tsconfig.json
node_modules\workbox-precaching\tsconfig.tsbuildinfo
node_modules\workbox-precaching\_types.d.ts
node_modules\workbox-precaching\_types.js
node_modules\workbox-precaching\_types.mjs
node_modules\workbox-precaching\_version.d.ts
node_modules\workbox-precaching\_version.js
node_modules\workbox-precaching\_version.mjs
node_modules\workbox-precaching\build\workbox-precaching.dev.js 
node_modules\workbox-precaching\build\workbox-precaching.dev.js.map
node_modules\workbox-precaching\build\workbox-precaching.prod.jsnode_modules\workbox-precaching\build\workbox-precaching.prod.js.map
node_modules\workbox-precaching\src\utils
node_modules\workbox-precaching\src\addPlugins.ts
node_modules\workbox-precaching\src\addRoute.ts
node_modules\workbox-precaching\src\cleanupOutdatedCaches.ts    
node_modules\workbox-precaching\src\createHandler.ts
node_modules\workbox-precaching\src\createHandlerBoundToURL.ts  
node_modules\workbox-precaching\src\getCacheKeyForURL.ts        
node_modules\workbox-precaching\src\index.ts
node_modules\workbox-precaching\src\matchPrecache.ts
node_modules\workbox-precaching\src\precache.ts
node_modules\workbox-precaching\src\precacheAndRoute.ts
node_modules\workbox-precaching\src\PrecacheController.ts       
node_modules\workbox-precaching\src\_types.ts
node_modules\workbox-precaching\src\_version.ts
node_modules\workbox-precaching\src\utils\addFetchListener.ts   
node_modules\workbox-precaching\src\utils\createCacheKey.ts     
node_modules\workbox-precaching\src\utils\deleteOutdatedCaches.ts
node_modules\workbox-precaching\src\utils\generateURLVariations.ts
node_modules\workbox-precaching\src\utils\getCacheKeyForURL.ts  
node_modules\workbox-precaching\src\utils\getOrCreatePrecacheController.ts
node_modules\workbox-precaching\src\utils\precachePlugins.ts    
node_modules\workbox-precaching\src\utils\printCleanupDetails.tsnode_modules\workbox-precaching\src\utils\printInstallDetails.tsnode_modules\workbox-precaching\src\utils\removeIgnoredSearchParams.ts
node_modules\workbox-precaching\utils\addFetchListener.d.ts     
node_modules\workbox-precaching\utils\addFetchListener.js       
node_modules\workbox-precaching\utils\addFetchListener.mjs      
node_modules\workbox-precaching\utils\createCacheKey.d.ts       
node_modules\workbox-precaching\utils\createCacheKey.js
node_modules\workbox-precaching\utils\createCacheKey.mjs        
node_modules\workbox-precaching\utils\deleteOutdatedCaches.d.ts 
node_modules\workbox-precaching\utils\deleteOutdatedCaches.js   
node_modules\workbox-precaching\utils\deleteOutdatedCaches.mjs  
node_modules\workbox-precaching\utils\generateURLVariations.d.tsnode_modules\workbox-precaching\utils\generateURLVariations.js  
node_modules\workbox-precaching\utils\generateURLVariations.mjs 
node_modules\workbox-precaching\utils\getCacheKeyForURL.d.ts    
node_modules\workbox-precaching\utils\getCacheKeyForURL.js      
node_modules\workbox-precaching\utils\getCacheKeyForURL.mjs     
node_modules\workbox-precaching\utils\getOrCreatePrecacheController.d.ts
node_modules\workbox-precaching\utils\getOrCreatePrecacheController.js
node_modules\workbox-precaching\utils\getOrCreatePrecacheController.mjs
node_modules\workbox-precaching\utils\precachePlugins.d.ts      
node_modules\workbox-precaching\utils\precachePlugins.js        
node_modules\workbox-precaching\utils\precachePlugins.mjs       
node_modules\workbox-precaching\utils\printCleanupDetails.d.ts  
node_modules\workbox-precaching\utils\printCleanupDetails.js
node_modules\workbox-precaching\utils\printCleanupDetails.mjs   
node_modules\workbox-precaching\utils\printInstallDetails.d.ts  
node_modules\workbox-precaching\utils\printInstallDetails.js    
node_modules\workbox-precaching\utils\printInstallDetails.mjs   
node_modules\workbox-precaching\utils\removeIgnoredSearchParams.d.ts
node_modules\workbox-precaching\utils\removeIgnoredSearchParams.js
node_modules\workbox-precaching\utils\removeIgnoredSearchParams.mjs
node_modules\workbox-range-requests\build
node_modules\workbox-range-requests\src
node_modules\workbox-range-requests\utils
node_modules\workbox-range-requests\createPartialResponse.d.ts  
node_modules\workbox-range-requests\createPartialResponse.js    
node_modules\workbox-range-requests\createPartialResponse.mjs   
node_modules\workbox-range-requests\index.d.ts
node_modules\workbox-range-requests\index.js
node_modules\workbox-range-requests\index.mjs
node_modules\workbox-range-requests\LICENSE
node_modules\workbox-range-requests\package.json
node_modules\workbox-range-requests\RangeRequestsPlugin.d.ts    
node_modules\workbox-range-requests\RangeRequestsPlugin.js      
node_modules\workbox-range-requests\RangeRequestsPlugin.mjs     
node_modules\workbox-range-requests\README.md
node_modules\workbox-range-requests\tsconfig.json
node_modules\workbox-range-requests\tsconfig.tsbuildinfo        
node_modules\workbox-range-requests\_version.d.ts
node_modules\workbox-range-requests\_version.js
node_modules\workbox-range-requests\_version.mjs
node_modules\workbox-range-requests\build\workbox-range-requests.dev.js
node_modules\workbox-range-requests\build\workbox-range-requests.dev.js.map
node_modules\workbox-range-requests\build\workbox-range-requests.prod.js
node_modules\workbox-range-requests\build\workbox-range-requests.prod.js.map
node_modules\workbox-range-requests\src\utils
node_modules\workbox-range-requests\src\createPartialResponse.tsnode_modules\workbox-range-requests\src\index.ts
node_modules\workbox-range-requests\src\RangeRequestsPlugin.ts  
node_modules\workbox-range-requests\src\_version.ts
node_modules\workbox-range-requests\src\utils\calculateEffectiveBoundaries.ts
node_modules\workbox-range-requests\src\utils\parseRangeHeader.ts
node_modules\workbox-range-requests\utils\calculateEffectiveBoundaries.d.ts
node_modules\workbox-range-requests\utils\calculateEffectiveBoundaries.js
node_modules\workbox-range-requests\utils\calculateEffectiveBoundaries.mjs
node_modules\workbox-range-requests\utils\parseRangeHeader.d.ts 
node_modules\workbox-range-requests\utils\parseRangeHeader.js   
node_modules\workbox-range-requests\utils\parseRangeHeader.mjs  
node_modules\workbox-routing\build
node_modules\workbox-routing\src
node_modules\workbox-routing\utils
node_modules\workbox-routing\index.d.ts
node_modules\workbox-routing\index.js
node_modules\workbox-routing\index.mjs
node_modules\workbox-routing\LICENSE
node_modules\workbox-routing\NavigationRoute.d.ts
node_modules\workbox-routing\NavigationRoute.js
node_modules\workbox-routing\NavigationRoute.mjs
node_modules\workbox-routing\package.json
node_modules\workbox-routing\README.md
node_modules\workbox-routing\RegExpRoute.d.ts
node_modules\workbox-routing\RegExpRoute.js
node_modules\workbox-routing\RegExpRoute.mjs
node_modules\workbox-routing\registerRoute.d.ts
node_modules\workbox-routing\registerRoute.js
node_modules\workbox-routing\registerRoute.mjs
node_modules\workbox-routing\Route.d.ts
node_modules\workbox-routing\Route.js
node_modules\workbox-routing\Route.mjs
node_modules\workbox-routing\Router.d.ts
node_modules\workbox-routing\Router.js
node_modules\workbox-routing\Router.mjs
node_modules\workbox-routing\setCatchHandler.d.ts
node_modules\workbox-routing\setCatchHandler.js
node_modules\workbox-routing\setCatchHandler.mjs
node_modules\workbox-routing\setDefaultHandler.d.ts
node_modules\workbox-routing\setDefaultHandler.js
node_modules\workbox-routing\setDefaultHandler.mjs
node_modules\workbox-routing\tsconfig.json
node_modules\workbox-routing\tsconfig.tsbuildinfo
node_modules\workbox-routing\_types.d.ts
node_modules\workbox-routing\_types.js
node_modules\workbox-routing\_types.mjs
node_modules\workbox-routing\_version.d.ts
node_modules\workbox-routing\_version.js
node_modules\workbox-routing\_version.mjs
node_modules\workbox-routing\build\workbox-routing.dev.js       
node_modules\workbox-routing\build\workbox-routing.dev.js.map   
node_modules\workbox-routing\build\workbox-routing.prod.js      
node_modules\workbox-routing\build\workbox-routing.prod.js.map  
node_modules\workbox-routing\src\utils
node_modules\workbox-routing\src\index.ts
node_modules\workbox-routing\src\NavigationRoute.ts
node_modules\workbox-routing\src\RegExpRoute.ts
node_modules\workbox-routing\src\registerRoute.ts
node_modules\workbox-routing\src\Route.ts
node_modules\workbox-routing\src\Router.ts
node_modules\workbox-routing\src\setCatchHandler.ts
node_modules\workbox-routing\src\setDefaultHandler.ts
node_modules\workbox-routing\src\_types.ts
node_modules\workbox-routing\src\_version.ts
node_modules\workbox-routing\src\utils\constants.ts
node_modules\workbox-routing\src\utils\getOrCreateDefaultRouter.ts
node_modules\workbox-routing\src\utils\normalizeHandler.ts      
node_modules\workbox-routing\utils\constants.d.ts
node_modules\workbox-routing\utils\constants.js
node_modules\workbox-routing\utils\constants.mjs
node_modules\workbox-routing\utils\getOrCreateDefaultRouter.d.tsnode_modules\workbox-routing\utils\getOrCreateDefaultRouter.js  
node_modules\workbox-routing\utils\getOrCreateDefaultRouter.mjs 
node_modules\workbox-routing\utils\normalizeHandler.d.ts        
node_modules\workbox-routing\utils\normalizeHandler.js
node_modules\workbox-routing\utils\normalizeHandler.mjs
node_modules\workbox-strategies\build
node_modules\workbox-strategies\plugins
node_modules\workbox-strategies\src
node_modules\workbox-strategies\utils
node_modules\workbox-strategies\CacheFirst.d.ts
node_modules\workbox-strategies\CacheFirst.js
node_modules\workbox-strategies\CacheFirst.mjs
node_modules\workbox-strategies\CacheOnly.d.ts
node_modules\workbox-strategies\CacheOnly.js
node_modules\workbox-strategies\CacheOnly.mjs
node_modules\workbox-strategies\index.d.ts
node_modules\workbox-strategies\index.js
node_modules\workbox-strategies\index.mjs
node_modules\workbox-strategies\LICENSE
node_modules\workbox-strategies\NetworkFirst.d.ts
node_modules\workbox-strategies\NetworkFirst.js
node_modules\workbox-strategies\NetworkFirst.mjs
node_modules\workbox-strategies\NetworkOnly.d.ts
node_modules\workbox-strategies\NetworkOnly.js
node_modules\workbox-strategies\NetworkOnly.mjs
node_modules\workbox-strategies\package.json
node_modules\workbox-strategies\README.md
node_modules\workbox-strategies\StaleWhileRevalidate.d.ts       
node_modules\workbox-strategies\StaleWhileRevalidate.js
node_modules\workbox-strategies\StaleWhileRevalidate.mjs        
node_modules\workbox-strategies\tsconfig.json
node_modules\workbox-strategies\tsconfig.tsbuildinfo
node_modules\workbox-strategies\_version.d.ts
node_modules\workbox-strategies\_version.js
node_modules\workbox-strategies\_version.mjs
node_modules\workbox-strategies\build\workbox-strategies.dev.js 
node_modules\workbox-strategies\build\workbox-strategies.dev.js.map
node_modules\workbox-strategies\build\workbox-strategies.prod.jsnode_modules\workbox-strategies\build\workbox-strategies.prod.js.map
node_modules\workbox-strategies\plugins\cacheOkAndOpaquePlugin.d.ts
node_modules\workbox-strategies\plugins\cacheOkAndOpaquePlugin.js
node_modules\workbox-strategies\plugins\cacheOkAndOpaquePlugin.mjs
node_modules\workbox-strategies\src\plugins
node_modules\workbox-strategies\src\utils
node_modules\workbox-strategies\src\CacheFirst.ts
node_modules\workbox-strategies\src\CacheOnly.ts
node_modules\workbox-strategies\src\index.ts
node_modules\workbox-strategies\src\NetworkFirst.ts
node_modules\workbox-strategies\src\NetworkOnly.ts
node_modules\workbox-strategies\src\StaleWhileRevalidate.ts     
node_modules\workbox-strategies\src\_version.ts
node_modules\workbox-strategies\src\plugins\cacheOkAndOpaquePlugin.ts
node_modules\workbox-strategies\src\utils\messages.ts
node_modules\workbox-strategies\utils\messages.d.ts
node_modules\workbox-strategies\utils\messages.js
node_modules\workbox-strategies\utils\messages.mjs
node_modules\workbox-streams\build
node_modules\workbox-streams\src
node_modules\workbox-streams\utils
node_modules\workbox-streams\concatenate.d.ts
node_modules\workbox-streams\concatenate.js
node_modules\workbox-streams\concatenate.mjs
node_modules\workbox-streams\concatenateToResponse.d.ts
node_modules\workbox-streams\concatenateToResponse.js
node_modules\workbox-streams\concatenateToResponse.mjs
node_modules\workbox-streams\index.d.ts
node_modules\workbox-streams\index.js
node_modules\workbox-streams\index.mjs
node_modules\workbox-streams\isSupported.d.ts
node_modules\workbox-streams\isSupported.js
node_modules\workbox-streams\isSupported.mjs
node_modules\workbox-streams\LICENSE
node_modules\workbox-streams\package.json
node_modules\workbox-streams\README.md
node_modules\workbox-streams\strategy.d.ts
node_modules\workbox-streams\strategy.js
node_modules\workbox-streams\strategy.mjs
node_modules\workbox-streams\tsconfig.json
node_modules\workbox-streams\tsconfig.tsbuildinfo
node_modules\workbox-streams\_types.d.ts
node_modules\workbox-streams\_types.js
node_modules\workbox-streams\_types.mjs
node_modules\workbox-streams\_version.d.ts
node_modules\workbox-streams\_version.js
node_modules\workbox-streams\_version.mjs
node_modules\workbox-streams\build\workbox-streams.dev.js       
node_modules\workbox-streams\build\workbox-streams.dev.js.map   
node_modules\workbox-streams\build\workbox-streams.prod.js      
node_modules\workbox-streams\build\workbox-streams.prod.js.map  
node_modules\workbox-streams\src\utils
node_modules\workbox-streams\src\concatenate.ts
node_modules\workbox-streams\src\concatenateToResponse.ts       
node_modules\workbox-streams\src\index.ts
node_modules\workbox-streams\src\isSupported.ts
node_modules\workbox-streams\src\strategy.ts
node_modules\workbox-streams\src\_types.ts
node_modules\workbox-streams\src\_version.ts
node_modules\workbox-streams\src\utils\createHeaders.ts
node_modules\workbox-streams\utils\createHeaders.d.ts
node_modules\workbox-streams\utils\createHeaders.js
node_modules\workbox-streams\utils\createHeaders.mjs
node_modules\workbox-sw\build
node_modules\workbox-sw\controllers
node_modules\workbox-sw\index.mjs
node_modules\workbox-sw\LICENSE
node_modules\workbox-sw\package.json
node_modules\workbox-sw\README.md
node_modules\workbox-sw\_types.mjs
node_modules\workbox-sw\_version.mjs
node_modules\workbox-sw\build\workbox-sw.js
node_modules\workbox-sw\build\workbox-sw.js.map
node_modules\workbox-sw\controllers\WorkboxSW.mjs
node_modules\workbox-webpack-plugin\build
node_modules\workbox-webpack-plugin\LICENSE
node_modules\workbox-webpack-plugin\package.json
node_modules\workbox-webpack-plugin\README.md
node_modules\workbox-webpack-plugin\build\lib
node_modules\workbox-webpack-plugin\build\generate-sw.js        
node_modules\workbox-webpack-plugin\build\index.js
node_modules\workbox-webpack-plugin\build\inject-manifest.js    
node_modules\workbox-webpack-plugin\build\lib\get-asset-hash.js 
node_modules\workbox-webpack-plugin\build\lib\get-manifest-entries-from-compilation.js
node_modules\workbox-webpack-plugin\build\lib\get-script-files-for-chunks.js
node_modules\workbox-webpack-plugin\build\lib\get-sourcemap-asset-name.js
node_modules\workbox-webpack-plugin\build\lib\relative-to-output-path.js
node_modules\workbox-webpack-plugin\build\lib\resolve-webpack-url.js
node_modules\workbox-window\build
node_modules\workbox-window\src
node_modules\workbox-window\utils
node_modules\workbox-window\index.d.ts
node_modules\workbox-window\index.js
node_modules\workbox-window\index.mjs
node_modules\workbox-window\LICENSE
node_modules\workbox-window\messageSW.d.ts
node_modules\workbox-window\messageSW.js
node_modules\workbox-window\messageSW.mjs
node_modules\workbox-window\package.json
node_modules\workbox-window\README.md
node_modules\workbox-window\tsconfig.json
node_modules\workbox-window\tsconfig.tsbuildinfo
node_modules\workbox-window\Workbox.d.ts
node_modules\workbox-window\Workbox.js
node_modules\workbox-window\Workbox.mjs
node_modules\workbox-window\_version.d.ts
node_modules\workbox-window\_version.js
node_modules\workbox-window\_version.mjs
node_modules\workbox-window\build\workbox-window.dev.es5.mjs    
node_modules\workbox-window\build\workbox-window.dev.es5.mjs.mapnode_modules\workbox-window\build\workbox-window.dev.mjs        
node_modules\workbox-window\build\workbox-window.dev.mjs.map    
node_modules\workbox-window\build\workbox-window.dev.umd.js     
node_modules\workbox-window\build\workbox-window.dev.umd.js.map 
node_modules\workbox-window\build\workbox-window.prod.es5.mjs   
node_modules\workbox-window\build\workbox-window.prod.es5.mjs.map
node_modules\workbox-window\build\workbox-window.prod.mjs       
node_modules\workbox-window\build\workbox-window.prod.mjs.map   
node_modules\workbox-window\build\workbox-window.prod.umd.js    
node_modules\workbox-window\build\workbox-window.prod.umd.js.mapnode_modules\workbox-window\src\utils
node_modules\workbox-window\src\index.ts
node_modules\workbox-window\src\messageSW.ts
node_modules\workbox-window\src\Workbox.ts
node_modules\workbox-window\src\_version.ts
node_modules\workbox-window\src\utils\urlsMatch.ts
node_modules\workbox-window\src\utils\WorkboxEvent.ts
node_modules\workbox-window\src\utils\WorkboxEventTarget.ts     
node_modules\workbox-window\utils\urlsMatch.d.ts
node_modules\workbox-window\utils\urlsMatch.js
node_modules\workbox-window\utils\urlsMatch.mjs
node_modules\workbox-window\utils\WorkboxEvent.d.ts
node_modules\workbox-window\utils\WorkboxEvent.js
node_modules\workbox-window\utils\WorkboxEvent.mjs
node_modules\workbox-window\utils\WorkboxEventTarget.d.ts       
node_modules\workbox-window\utils\WorkboxEventTarget.js
node_modules\workbox-window\utils\WorkboxEventTarget.mjs        
node_modules\worker-farm\examples
node_modules\worker-farm\lib
node_modules\worker-farm\tests
node_modules\worker-farm\.editorconfig
node_modules\worker-farm\.travis.yml
node_modules\worker-farm\index.d.ts
node_modules\worker-farm\LICENSE.md
node_modules\worker-farm\package.json
node_modules\worker-farm\README.md
node_modules\worker-farm\examples\basic
node_modules\worker-farm\examples\pi
node_modules\worker-farm\examples\basic\child.js
node_modules\worker-farm\examples\basic\index.js
node_modules\worker-farm\examples\pi\calc.js
node_modules\worker-farm\examples\pi\index.js
node_modules\worker-farm\lib\child
node_modules\worker-farm\lib\farm.js
node_modules\worker-farm\lib\fork.js
node_modules\worker-farm\lib\index.js
node_modules\worker-farm\lib\child\index.js
node_modules\worker-farm\tests\child.js
node_modules\worker-farm\tests\debug.js
node_modules\worker-farm\tests\index.js
node_modules\worker-rpc\lib
node_modules\worker-rpc\src
node_modules\worker-rpc\test
node_modules\worker-rpc\.travis.yml
node_modules\worker-rpc\LICENSE
node_modules\worker-rpc\package.json
node_modules\worker-rpc\README.md
node_modules\worker-rpc\tsconfig.json
node_modules\worker-rpc\tsconfig.test.json
node_modules\worker-rpc\typings.json
node_modules\worker-rpc\yarn.lock
node_modules\worker-rpc\lib\index.d.ts
node_modules\worker-rpc\lib\index.js
node_modules\worker-rpc\lib\RpcProvider.d.ts
node_modules\worker-rpc\lib\RpcProvider.js
node_modules\worker-rpc\lib\RpcProviderInterface.d.ts
node_modules\worker-rpc\lib\RpcProviderInterface.js
node_modules\worker-rpc\src\index.ts
node_modules\worker-rpc\src\RpcProvider.ts
node_modules\worker-rpc\src\RpcProviderInterface.ts
node_modules\worker-rpc\test\rpcProvider.ts
node_modules\wrap-ansi\index.js
node_modules\wrap-ansi\license
node_modules\wrap-ansi\package.json
node_modules\wrap-ansi\readme.md
node_modules\wrappy\LICENSE
node_modules\wrappy\package.json
node_modules\wrappy\README.md
node_modules\wrappy\wrappy.js
node_modules\write-file-atomic\CHANGELOG.md
node_modules\write-file-atomic\index.js
node_modules\write-file-atomic\LICENSE
node_modules\write-file-atomic\package.json
node_modules\write-file-atomic\README.md
node_modules\ws\lib
node_modules\ws\browser.js
node_modules\ws\index.js
node_modules\ws\LICENSE
node_modules\ws\package.json
node_modules\ws\README.md
node_modules\ws\lib\buffer-util.js
node_modules\ws\lib\constants.js
node_modules\ws\lib\event-target.js
node_modules\ws\lib\extension.js
node_modules\ws\lib\limiter.js
node_modules\ws\lib\permessage-deflate.js
node_modules\ws\lib\receiver.js
node_modules\ws\lib\sender.js
node_modules\ws\lib\stream.js
node_modules\ws\lib\validation.js
node_modules\ws\lib\websocket-server.js
node_modules\ws\lib\websocket.js
node_modules\xml-name-validator\lib
node_modules\xml-name-validator\LICENSE.txt
node_modules\xml-name-validator\package.json
node_modules\xml-name-validator\README.md
node_modules\xml-name-validator\lib\generated-parser.js
node_modules\xml-name-validator\lib\grammar.pegjs
node_modules\xml-name-validator\lib\xml-name-validator.js       
node_modules\xmlchars\xml
node_modules\xmlchars\xmlns
node_modules\xmlchars\LICENSE
node_modules\xmlchars\package.json
node_modules\xmlchars\README.md
node_modules\xmlchars\xmlchars.d.ts
node_modules\xmlchars\xmlchars.js
node_modules\xmlchars\xmlchars.js.map
node_modules\xmlchars\xml\1.0
node_modules\xmlchars\xml\1.1
node_modules\xmlchars\xml\1.0\ed4.d.ts
node_modules\xmlchars\xml\1.0\ed4.js
node_modules\xmlchars\xml\1.0\ed4.js.map
node_modules\xmlchars\xml\1.0\ed5.d.ts
node_modules\xmlchars\xml\1.0\ed5.js
node_modules\xmlchars\xml\1.0\ed5.js.map
node_modules\xmlchars\xml\1.1\ed2.d.ts
node_modules\xmlchars\xml\1.1\ed2.js
node_modules\xmlchars\xml\1.1\ed2.js.map
node_modules\xmlchars\xmlns\1.0
node_modules\xmlchars\xmlns\1.0\ed3.d.ts
node_modules\xmlchars\xmlns\1.0\ed3.js
node_modules\xmlchars\xmlns\1.0\ed3.js.map
node_modules\xtend\.jshintrc
node_modules\xtend\immutable.js
node_modules\xtend\LICENSE
node_modules\xtend\mutable.js
node_modules\xtend\package.json
node_modules\xtend\README.md
node_modules\xtend\test.js
node_modules\y18n\CHANGELOG.md
node_modules\y18n\index.js
node_modules\y18n\LICENSE
node_modules\y18n\package.json
node_modules\y18n\README.md
node_modules\yallist\iterator.js
node_modules\yallist\LICENSE
node_modules\yallist\package.json
node_modules\yallist\README.md
node_modules\yallist\yallist.js
node_modules\yaml\browser
node_modules\yaml\dist
node_modules\yaml\types
node_modules\yaml\index.d.ts
node_modules\yaml\index.js
node_modules\yaml\LICENSE
node_modules\yaml\map.js
node_modules\yaml\package.json
node_modules\yaml\pair.js
node_modules\yaml\parse-cst.d.ts
node_modules\yaml\parse-cst.js
node_modules\yaml\README.md
node_modules\yaml\scalar.js
node_modules\yaml\schema.js
node_modules\yaml\seq.js
node_modules\yaml\types.d.ts
node_modules\yaml\types.js
node_modules\yaml\types.mjs
node_modules\yaml\util.d.ts
node_modules\yaml\util.js
node_modules\yaml\util.mjs
node_modules\yaml\browser\dist
node_modules\yaml\browser\types
node_modules\yaml\browser\index.js
node_modules\yaml\browser\map.js
node_modules\yaml\browser\pair.js
node_modules\yaml\browser\parse-cst.js
node_modules\yaml\browser\scalar.js
node_modules\yaml\browser\schema.js
node_modules\yaml\browser\seq.js
node_modules\yaml\browser\types.js
node_modules\yaml\browser\util.js
node_modules\yaml\browser\dist\index.js
node_modules\yaml\browser\dist\legacy-exports.js
node_modules\yaml\browser\dist\package.json
node_modules\yaml\browser\dist\parse-cst.js
node_modules\yaml\browser\dist\PlainValue-b8036b75.js
node_modules\yaml\browser\dist\resolveSeq-492ab440.js
node_modules\yaml\browser\dist\Schema-e94716c8.js
node_modules\yaml\browser\dist\types.js
node_modules\yaml\browser\dist\util.js
node_modules\yaml\browser\dist\warnings-df54cb69.js
node_modules\yaml\browser\types\binary.js
node_modules\yaml\browser\types\omap.js
node_modules\yaml\browser\types\pairs.js
node_modules\yaml\browser\types\set.js
node_modules\yaml\browser\types\timestamp.js
node_modules\yaml\dist\Document-9b4560a1.js
node_modules\yaml\dist\index.js
node_modules\yaml\dist\legacy-exports.js
node_modules\yaml\dist\parse-cst.js
node_modules\yaml\dist\PlainValue-ec8e588e.js
node_modules\yaml\dist\resolveSeq-d03cb037.js
node_modules\yaml\dist\Schema-88e323a7.js
node_modules\yaml\dist\test-events.js
node_modules\yaml\dist\types.js
node_modules\yaml\dist\util.js
node_modules\yaml\dist\warnings-1000a372.js
node_modules\yaml\types\binary.js
node_modules\yaml\types\omap.js
node_modules\yaml\types\pairs.js
node_modules\yaml\types\set.js
node_modules\yaml\types\timestamp.js
node_modules\yargs\build
node_modules\yargs\locales
node_modules\yargs\CHANGELOG.md
node_modules\yargs\index.js
node_modules\yargs\LICENSE
node_modules\yargs\package.json
node_modules\yargs\README.md
node_modules\yargs\yargs.js
node_modules\yargs\build\lib
node_modules\yargs\build\lib\apply-extends.d.ts
node_modules\yargs\build\lib\apply-extends.js
node_modules\yargs\build\lib\argsert.d.ts
node_modules\yargs\build\lib\argsert.js
node_modules\yargs\build\lib\command.d.ts
node_modules\yargs\build\lib\command.js
node_modules\yargs\build\lib\common-types.d.ts
node_modules\yargs\build\lib\common-types.js
node_modules\yargs\build\lib\completion-templates.d.ts
node_modules\yargs\build\lib\completion-templates.js
node_modules\yargs\build\lib\completion.d.ts
node_modules\yargs\build\lib\completion.js
node_modules\yargs\build\lib\is-promise.d.ts
node_modules\yargs\build\lib\is-promise.js
node_modules\yargs\build\lib\levenshtein.d.ts
node_modules\yargs\build\lib\levenshtein.js
node_modules\yargs\build\lib\middleware.d.ts
node_modules\yargs\build\lib\middleware.js
node_modules\yargs\build\lib\obj-filter.d.ts
node_modules\yargs\build\lib\obj-filter.js
node_modules\yargs\build\lib\parse-command.d.ts
node_modules\yargs\build\lib\parse-command.js
node_modules\yargs\build\lib\process-argv.d.ts
node_modules\yargs\build\lib\process-argv.js
node_modules\yargs\build\lib\usage.d.ts
node_modules\yargs\build\lib\usage.js
node_modules\yargs\build\lib\validation.d.ts
node_modules\yargs\build\lib\validation.js
node_modules\yargs\build\lib\yargs.d.ts
node_modules\yargs\build\lib\yargs.js
node_modules\yargs\build\lib\yerror.d.ts
node_modules\yargs\build\lib\yerror.js
node_modules\yargs\locales\be.json
node_modules\yargs\locales\de.json
node_modules\yargs\locales\en.json
node_modules\yargs\locales\es.json
node_modules\yargs\locales\fi.json
node_modules\yargs\locales\fr.json
node_modules\yargs\locales\hi.json
node_modules\yargs\locales\hu.json
node_modules\yargs\locales\id.json
node_modules\yargs\locales\it.json
node_modules\yargs\locales\ja.json
node_modules\yargs\locales\ko.json
node_modules\yargs\locales\nb.json
node_modules\yargs\locales\nl.json
node_modules\yargs\locales\nn.json
node_modules\yargs\locales\pirate.json
node_modules\yargs\locales\pl.json
node_modules\yargs\locales\pt.json
node_modules\yargs\locales\pt_BR.json
node_modules\yargs\locales\ru.json
node_modules\yargs\locales\th.json
node_modules\yargs\locales\tr.json
node_modules\yargs\locales\zh_CN.json
node_modules\yargs\locales\zh_TW.json
node_modules\yargs-parser\lib
node_modules\yargs-parser\node_modules
node_modules\yargs-parser\CHANGELOG.md
node_modules\yargs-parser\index.js
node_modules\yargs-parser\LICENSE.txt
node_modules\yargs-parser\package.json
node_modules\yargs-parser\README.md
node_modules\yargs-parser\lib\tokenize-arg-string.js
node_modules\yargs-parser\node_modules\camelcase
node_modules\yargs-parser\node_modules\camelcase\index.d.ts     
node_modules\yargs-parser\node_modules\camelcase\index.js       
node_modules\yargs-parser\node_modules\camelcase\license        
node_modules\yargs-parser\node_modules\camelcase\package.json   
node_modules\yargs-parser\node_modules\camelcase\readme.md      
node_modules\yocto-queue\index.d.ts
node_modules\yocto-queue\index.js
node_modules\yocto-queue\license
node_modules\yocto-queue\package.json
node_modules\yocto-queue\readme.md
public\treinos
public\index.html
public\treinos\abdomen
public\treinos\antebraço
public\treinos\bíceps
public\treinos\costas
public\treinos\glúteos
public\treinos\ombros
public\treinos\panturrilhas
public\treinos\peito
public\treinos\pernas
public\treinos\trapézio
public\treinos\tríceps
public\treinos\abdomen\Abdominal infra solo.gif
public\treinos\abdomen\Abdominal-cruzado.gif
public\treinos\abdomen\Abdominal-declinado.gif
public\treinos\abdomen\Abdominal-infra-nas-paralelas.gif        
public\treinos\abdomen\abdominal-infra-solo2.gif
public\treinos\abdomen\Abdominal-lateral.gif
public\treinos\abdomen\abdominal-maquina.gif
public\treinos\abdomen\abdominal-na-polia.gif
public\treinos\abdomen\abdominal-remador.gif
public\treinos\abdomen\abdominal-reto.gif
public\treinos\abdomen\abdominal-roda.gif
public\treinos\abdomen\Abdominal-tesoura.gif
public\treinos\abdomen\Prancha abdominal.jpg
public\treinos\antebraço\rolo-de-punho.gif
public\treinos\antebraço\rosca-invertida-com-barra.gif
public\treinos\antebraço\rosca-martelo-com-halteres.gif
public\treinos\antebraço\rosca-punho-inversa.gif
public\treinos\antebraço\rosca-zottman.gif
public\treinos\antebraço\rusca-punho-com-barra.gif
public\treinos\antebraço\suspensao-na-barra-dead-hang.gif       
public\treinos\bíceps\chinup-1.gif
public\treinos\bíceps\Rosca direta barra reta ou W.gif
public\treinos\bíceps\Rosca martelo.gif
public\treinos\bíceps\rosca-alternada.gif
public\treinos\bíceps\rosca-arrastada.gif
public\treinos\bíceps\rosca-concentrada.gif
public\treinos\bíceps\rosca-direta-polia.gif
public\treinos\bíceps\rosca-inclinada.gif
public\treinos\bíceps\rosca-scott.gif
public\treinos\bíceps\rosca-simultanea.gif
public\treinos\bíceps\rosca-spider.gif
public\treinos\bíceps\rosca-zottman.gif
public\treinos\costas\Barra fixa supinada.gif
public\treinos\costas\Barra-fixa.gif
public\treinos\costas\Encolhimento ombro.gif
public\treinos\costas\Pull down.gif
public\treinos\costas\Pulley costas.gif
public\treinos\costas\Remada baixa.gif
public\treinos\costas\Remada cavalinho.gif
public\treinos\costas\Remada curvada.gif
public\treinos\costas\Remada serrote.gif
public\treinos\costas\Voador invertido.gif
public\treinos\glúteos\Agachamento livre.gif
public\treinos\glúteos\agachamento-barra-postura.gif
public\treinos\glúteos\agachamento-com-barra.gif
public\treinos\glúteos\avanco-com-halteras.gif
public\treinos\glúteos\Coice quatro apoios.gif
public\treinos\glúteos\coice-no-cabo.gif
public\treinos\glúteos\Levantamento terra com barra.gif
public\treinos\glúteos\Ponte com uma perna só.gif
public\treinos\glúteos\ponte-para-gluteos.gif
public\treinos\glúteos\Subida no step.gif
public\treinos\ombros\Crucifixo invertido com halteres.gif
public\treinos\ombros\Desenvolvimento Arnold.gif
public\treinos\ombros\Desenvolvimento com barra.gif
public\treinos\ombros\Desenvolvimento com halteres.gif
public\treinos\ombros\Elevação frontal com barra.gif
public\treinos\ombros\Elevação frontal com halteres.gif
public\treinos\ombros\Elevação lateral com cabo.gif
public\treinos\ombros\Elevação lateral com halteres.gif
public\treinos\ombros\Elevação lateral inclinada.gif
public\treinos\ombros\Elevação lateral na polia.gif
public\treinos\ombros\Face pull.gif
public\treinos\ombros\Remada alta com barra.gif
public\treinos\ombros\Remada alta com halteres.gif
public\treinos\ombros\Voador invertido.gif
public\treinos\panturrilhas\Elevação  no leg press.gif
public\treinos\panturrilhas\Elevação de  barra livre.gif        
public\treinos\panturrilhas\Elevação de  corpo.gif
public\treinos\panturrilhas\Elevação pé na máquina.gif
public\treinos\panturrilhas\Elevação sentado com halteres.gif   
public\treinos\panturrilhas\Elevação sentado na máquina.gif     
public\treinos\peito\Crucifixo.gif
public\treinos\peito\Flexão de braço.gif
public\treinos\peito\Paralelas.gif
public\treinos\peito\Pullover com halteres.gif
public\treinos\peito\Supino declinado (canadense).gif
public\treinos\peito\Supino inclinado.gif
public\treinos\peito\Supino máquina.gif
public\treinos\peito\Supino reto.gif
public\treinos\peito\Voador ou peck deck.gif
public\treinos\pernas\Afundo.gif
public\treinos\pernas\Agachamento frontal.gif
public\treinos\pernas\Agachamento goblet.gif
public\treinos\pernas\Agachamento hack.gif
public\treinos\pernas\Agachamento livre.gif
public\treinos\pernas\Agachamento sumô.gif
public\treinos\pernas\agachamento-bulgaro.gif
public\treinos\pernas\barbell-good-morning.gif
public\treinos\pernas\Cadeira extensora.gif
public\treinos\pernas\Elevação pélvica com barra.gif
public\treinos\pernas\Flexão nórdica.gif
public\treinos\pernas\Leg press.gif
public\treinos\pernas\Levantamento terra romeno.gif
public\treinos\pernas\Levantamento terra sumô.gif
public\treinos\pernas\Mesa flexora.gif
public\treinos\pernas\Stiff.gif
public\treinos\trapézio\depressao-escapular-na-puxada.gif       
public\treinos\trapézio\elevacao-halteres-banco-inclinado.gif   
public\treinos\trapézio\encolhimento-com-barra.gif
public\treinos\trapézio\encolhimento-por-tras-smith.gif
public\treinos\trapézio\face-pull-na-polia.gif
public\treinos\trapézio\Levantamento terra.gif
public\treinos\trapézio\remada-curvada-com-barra.gif
public\treinos\trapézio\remada-em-pe-com-barra.gif
public\treinos\tríceps\flexao-diamante.gif
public\treinos\tríceps\paralelas-para-triceps.gif
public\treinos\tríceps\rosca-testa-com-barra2.gif
public\treinos\tríceps\supino-fechado-com-barra.gif
public\treinos\tríceps\triceps-banco.gif
public\treinos\tríceps\triceps-coice.gif
public\treinos\tríceps\triceps-corda-na-polia-alta.gif
public\treinos\tríceps\triceps-frances-halter-sentado.gif       
public\treinos\tríceps\triceps-invertido.gif
public\treinos\tríceps\triceps-na-polia-com-barra-reta.gif      
src\assets
src\components
src\data
src\pages
src\styles
src\App.jsx
src\index.js
src\assets\background.jpeg
src\assets\client-bg.jpeg
src\assets\logo.png
src\components\Header.css
src\components\Header.jsx
src\components\ImageGallery.jsx
src\data\workoutData.js
src\pages\AddWorkout.jsx
src\pages\AdminPage.jsx
src\pages\Bioimpedance.jsx
src\pages\ClientPage.jsx
src\pages\Home.jsx
src\pages\Login.jsx
src\pages\ManageClient.jsx
src\pages\WorkoutPlans.jsx
src\styles\AdminPage.css
src\styles\ClientPage.css
src\styles\main.css
src\styles\ManageClient.css
PS C:\Users\Mils\Documents\Progamação\bioimpedance-fitness-website>