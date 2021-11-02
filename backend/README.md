- O endpoint deve receber a seguinte estrutura:

```json
{
  "city": "city_name",
  "hours": "hours",
  "status": "status"
}
```

O retorno da API de um produto cadastrado com sucesso deverá ser:

```json
{
  "acknowledged": true,
  "insertedId": "61801ac0f6fbadd3c9a21635"
}
```

- O endpoint deve retorna todos os cadastros com a seguinte estrutura: 

```json
{
  "forecast": [
    {
      "_id": "61801254fae1559d53e355cb",
      "city": "Manaus",
      "hours": "12:08",
      "status": "Sem chuva"
    },
    {
      "_id": "618013b71a75db448935060d",
      "city": "Manacapuru",
      "hours": "13:08",
      "status": "Chuva forte"
    }
  ]
}
```
