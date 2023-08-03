-- Popular o banco de dados com alguns dados de testes

insert into cliente values
(default,'482.233.990-40','Gustavo Tavares','19-85916-8673,19-70565-8763','13914-124','94','Casa A'),
(default,'255.934.269-37','Brito Teixeira da Silva','19-79784-9268','13058-192','180',NULL),
(default,'071.488.607-68','Evandro Filho','19-03160-9963','13910-007','15',NULL),
(default,'101.984.034-02','Wendy Silva Custódio','19-68900-3317','13911-462','105',NULL),
(default,'989.027.144-38','Luciana Júnior','19-63725-6043,19-74318-4112','13911-470','807','AP 32'),
(default,'000.000.000-00','Comer no Local','19 99999-9999','13914-124','0',NULL); 

insert into motoboy values
(default,'Keli Neto Oliveira','NFM-4A84','CG Titan 160 Honda'),
(default,'Eva Teixeira','EZS-7Z53','Fazer 250 Yamaha'),
(default,'Clóvis Teixeira','GVU-7D70','CG Titan 125 Honda'),
(default,'Sem entrega','AAA-0000','Sem veículo');

insert into cardapio values
(default,'Parmegiana de Frango','Filé de frango empanado, coberto com molho de tomate',30.00),
(default,'Parmegiana de Carne','Filé mignon empanado, coberto com molho de tomate',55.00),
(default,'Parmegiana de Berinjela','Berinjela empanado, coberto com molho de tomate',35.00),
(default,'Contra Filé Acebolado','Contra filé grelhado, com molho de churrasco e farofa',45.00),
(default,'Bisteca de porco','bisteca de porco grelhada com farofa e couve refogada',49.90),
(default,'Refrigerante de 2L','Refrigerante de 2L',15.00),
(default,'Refrigerante de 1L','Refrigerante de 1L',12.00),
(default,'Refrigerante de 600ml','Refrigerante de 600ml',8.00),
(default,'Refrigerante de 350ml','Refrigerante de 350ml',5.00),
(default,'Cerveja de 600ml','Cerveja de 600ml',8.00),
(default,'Cerveja de 350ml','Cerveja de 350ml',5.00);

insert into pedido values
(default, 1 , 1, curtime(), date_add(curtime(), INTERVAL 10 minute), date_add(curtime(), INTERVAL 25 minute),0,5),
(default, 2 , 2, curtime(), date_add(curtime(), INTERVAL 15 minute),null,0,5),
(default, 6, 4, curtime(),null,null,0,0);

insert into itens values
(default, 1, 3, 1, (select preco from cardapio where id=3)),
(default, 1, 8, 1, (select preco from cardapio where id=8));
(default, 2, 8, 1, (select preco from cardapio where id=8));

update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 1) where id = 1;
update pedido set dataCozinha = curtime(), dataEntrega = curtime() where id = 1;