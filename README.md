# App Bat-Sinal (React Native + Expo)

Interface mobile que aciona e exibe o Bat‑Sinal de forma interativa e responsiva.

## Objetivos
- Reproduzir e aprimorar o projeto do instrutor.
- Aplicar animações e estado global simples.
- Documentar decisões técnicas.
- Publicar no GitHub como portfólio.

## Como rodar
1. Pré‑requisitos: Node 18+ e Expo CLI (`npm i -g expo-cli`).
2. Instalação:
   ```bash
   npm install
   npm run start
   # leia o QR no Expo Go (Android/iOS) ou use 'w' para web
   ```

## Funcionalidades
- Botão ON/OFF para acionar o feixe do Bat‑Sinal.
- Animação de intensidade (fade + zoom).
- Modo “Alerta” com pulsação contínua.
- Layout responsivo e acessível.

## Estrutura
```
bat-signal-rn/
  assets/               # ícones e splash (placeholders)
  images/               # capturas (opcional)
  src/
    components/
      BatSignal.js      # componente SVG do símbolo
    theme.js            # tokens de estilo
    App.js              # tela principal
  app.json
  package.json
  README.md
```

## Decisões Técnicas
- **Expo** para agilidade e preview no dispositivo.
- **react-native-svg** para símbolo vetorial escalável.
- **Animated API** para opacidade, escala e pulsar.

## Melhorias Sugeridas
- Haptics ao acionar.
- Áudio de sirene (expo-av).
- Estado global (Context) para acoplamento com outras telas.
- Tema claro/escuro.
- Testes e2e (Maestro/Detox).

## Licença
MIT
