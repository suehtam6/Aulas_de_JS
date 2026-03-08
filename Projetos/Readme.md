# 📚 Sistema de Aplicações em Node.js (CLI)

Projeto desenvolvido para praticar **JavaScript e Node.js** através de um **menu interativo no terminal (CLI)**.
O usuário pode escolher entre diferentes aplicações matemáticas e escolares digitando um número no menu.

---

# 🚀 Funcionalidades

O sistema possui um **menu principal** que permite acessar 5 aplicações:

| Opção | Aplicação     | Descrição                                            |
| ----- | ------------- | ---------------------------------------------------- |
| 1     | IMC           | Calcula o Índice de Massa Corporal                   |
| 2     | Média Escolar | Calcula média de notas de um aluno                   |
| 3     | Tabuada       | Gera a tabuada de um número                          |
| 4     | Fatorial      | Calcula o fatorial de um número                      |
| 5     | Par ou Ímpar  | Lista números pares e ímpares dentro de um intervalo |

---

# 🖥️ Exemplo do Menu

```
===== MENU DE APLICAÇÕES =====

1 - IMC
2 - Média Escolar
3 - Tabuada
4 - Fatorial
5 - Par ou Ímpar

Digite um número de 1 a 5:
```

---

# 📂 Estrutura do Projeto

```
PROJETOS
│
├── menuApps
│   ├── appFatorial.js
│   ├── appImc.js
│   ├── appImparPar.js
│   ├── appMedia.js
│   └── appTabuada.js
│
├── modulo
│   ├── calcularMedia.js
│   ├── calcularTabuada.js
│   ├── calculoFatorial.js
│   ├── CalculoImc.js
│   └── calculoImparPar.js
│
├── validacao
│   └── validar.js
│
└── app.js
```

---

# 🧠 Organização do Código

### 📁 menuApps

Responsável pela **entrada e saída de dados** utilizando `readline`.

Esses arquivos:

* recebem dados do usuário
* validam os dados
* chamam os módulos de cálculo

---

### 📁 modulo

Responsável apenas pela **lógica do cálculo**.

Exemplos:

* cálculo do IMC
* cálculo da média escolar
* geração da tabuada
* cálculo de fatorial
* identificação de números pares e ímpares

---

### 📁 validacao

Contém funções responsáveis por **validar os dados inseridos pelo usuário**, como:

* validação de strings
* validação de números
* validação de intervalos
* validação de valores permitidos

---

### 📄 app.js

Arquivo **principal do sistema**.

Responsável por:

* mostrar o menu
* receber a escolha do usuário
* executar o aplicativo selecionado

---

# ⚙️ Tecnologias Utilizadas

* JavaScript
* Node.js
* Biblioteca nativa `readline`

---

# ▶️ Como Executar o Projeto

1️⃣ Instale o Node.js.

2️⃣ Clone o projeto.

3️⃣ No terminal, navegue até a pasta do projeto.

4️⃣ Execute o comando:

```
node app.js
```

---

# 📖 Conceitos Praticados

Este projeto aplica conceitos importantes de programação:

* modularização
* separação de responsabilidades
* validação de dados
* interação via terminal (CLI)
* lógica de programação
* estrutura de projetos Node.js

---

# 👨‍💻 Autor

**Matheus Lucas**

Projeto desenvolvido para estudo e prática de **Node.js**.
