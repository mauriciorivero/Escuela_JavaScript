
--inner Join
SELECT nombre, email, fecha, valor 
FROM CLIENTES 
INNER JOIN PEDIDOS 
ON CLIENTES.cliente_id = PEDIDOS.cliente_id

--left join
SELECT nombre, email, fecha, valor 
FROM clientes 
LEFT JOIN pedidos 
ON clientes.cliente_id = pedidos.cliente_id

--right join
SELECT nombre, email, fecha, valor 
FROM clientes 
RIGHT JOIN pedidos 
ON clientes.cliente_id = pedidos.cliente_id

--full join
SELECT nombre, email, fecha, valor 
FROM clientes 
FULL JOIN pedidos
ON clientes.cliente_id = pedidos.cliente_id