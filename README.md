# Que os Caminhos se Cruzem

Experiencia digital cinematografica criada para Mariana a partir da especificacao tecnica e do livro `LIVRO.pdf`.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois abra `http://localhost:3000`.

## Personalizacao

- Textos, datas, capitulos e carta ficam em `lib/content.ts`.
- Caminhos de fotos ficam em `lib/photos.ts`.
- Coloque fotos reais em `public/photos/chapter-06`, `public/photos/chapter-07` e `public/photos/chapter-11`.
- Se quiser musica real, coloque `public/audio/ambient.mp3`. O botao de som tambem tem um ambiente sintetico suave quando nao existe arquivo.

## Deploy

O projeto ja inclui `vercel.json`, metadata privada e headers basicos.

```bash
npm run build
```

Na Vercel, conecte o repositorio e use o preset Next.js.
