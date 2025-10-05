# Instagram Clone - React Native Expo

Clone do Instagram desenvolvido com React Native e Expo, incluindo tela de login e feed completo.

## Componentes

- **Login.js**: Tela de login do Instagram
- **Titulo.js**: Cabeçalho com logo e ícones
- **Story.js**: Componente individual de story
- **Stories.js**: Lista horizontal de stories
- **Foto.js**: Componente de postagem com imagem
- **Feed.js**: Feed de postagens
- **Menu.js**: Menu de navegação inferior

## Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente: `npm install -g expo-cli`
- Aplicativo Expo Go instalado no seu smartphone (disponível na App Store e Google Play)

### Passos para executar

1. **Descompacte o arquivo** que você baixou

2. **Navegue até o diretório do projeto**:
   ```bash
   cd instagram-expo
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Inicie o projeto**:
   ```bash
   npx expo start
   ```

5. **Abra o aplicativo no seu dispositivo**:
   - Escaneie o QR Code que aparecerá no terminal com o aplicativo Expo Go
   - No iOS: Use a câmera nativa do iPhone
   - No Android: Use o scanner dentro do aplicativo Expo Go

## Funcionalidades

- ✅ Tela de login funcional
- ✅ Feed de postagens com imagens
- ✅ Stories horizontais
- ✅ Curtir e salvar postagens
- ✅ Menu de navegação inferior
- ✅ Interface idêntica ao Instagram

## Tecnologias utilizadas

- React Native
- Expo
- Expo Vector Icons
- React Hooks (useState)

## Observações

- As imagens são carregadas de APIs públicas (pravatar.cc e picsum.photos)
- O projeto está pronto para ser executado no Expo Go
- Não é necessário configurar Android Studio ou Xcode
