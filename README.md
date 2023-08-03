# Restaurante 3des

## Descrição
Projeto modelo para o terceiro semestre do curso técnico em desenvolvimento de sistemas turma: 3DES 2023

## Regras de negócio

O restaurante XPTO possui um cardápio e atende clientes que comem no local e recebe pedidos por telefone e os entrega em domicílio. Necessita de um sistema para gestão destes pedidos.

- RN01 Nome do sistema: Gestão de pedidos
    - RN01.1 CRUD de pedidos
    - RN01.2 Gerar um BI de pedidos (Relatórios)
- RN02 Separar em página web e aplicativos
    - RN02.1 Página WEB
        - RN02.1.1 Página para fazer pedidos
        - RN02.2.1 Página de relatórios (BI)
    - RN02.3 App para Cozinha
    - RN02.4 App Entregas

## Como testar localmente
### Necessário ter Instalado
- NodeJS 16 LTS
- XAMPP v3.3.0
### Passos

- Clonar este repositório
- Abrir com VsCode
- Navegar até o diretório "api"
```
    bash
cd api
```

- Criar o arquivo **.env** contendo
```
    env
DATABASE_URL="mysql://root@localhost:3306/restaurante?schema=public&timezone=UTC"
```

- Abri o XAMPP Control Panel e dar start em Apache e MySQL
- Executar o comando para criar a implantação/migração do banco de dados
```
    bash
prisma migrate dev --name "descricao"
```
OBS: Antes da migração, deve instalar o ORM prisma globalmente
```
    npm -g prisma
```