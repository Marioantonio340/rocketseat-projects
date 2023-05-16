<!-- PROJECT LOGO -->




## Setup das aplicações

### Extensões importantes Vscode:

* **PostCSS Language Support**

* **Prisma**

* **Tailwind CSS Intellisense**

### Back-End:

Node v18.16.0 LTS

Criando um projeto javascript:

```sh
npm init -y
```
Istalando typescript no pojeto:

```sh
npm i typescript -D
```
Istalando a biblioteca types/node:
```sh
npm i @types/node -D
```
Criando arquivo tsconfig.json, nele estarão contidas as configurações do typescript:

```sh
npx tsc --init
```
Quando criado altere as configurações "target", mude para "es2020" ECMASCRIPT 2020, que é a versão que o node já entende, assim otimizando o projeto.

O node não entende typescript por isso é necessário intalar a biblioteca tsx:
```sh
npm i tsx -D
```
para rodar o projeto com tsx:
```sh
npx tsx ./nomedoarquivo.js
```
você pode criar um script para otimizar o processo:

  ```sh
  "scripts": {
    "dev": "tsx watch src/server.ts"
            }
```
Usando o "watch" o processo não encerra ao terminas e é atualizado ao salvar.

Instale o framwork fastify:
```sh
npx i fastify
```

Istale o ESLint, uma ferramenta de padronização de código:
```sh
npm install eslint -D
```

Configuração da rocketseat para o estlint:
```sh
npm i @rocketseat/eslint-config -D
```
Faça a instalação do prisma:

```sh
npm i prisma -D
```

Configuração do prisma para SQLite:
```sh
 npx prisma init --datasource-provider SQLite
```


