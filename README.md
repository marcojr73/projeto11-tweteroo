
# Tweteroo

<p align="center">
   <img width=350 src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f424.svg"/>
</p>


- Meu primeiro projeto back end é a API tweteroo
- Nela é possivel se inscrever na rede, postar e visualizar os ultimos tweets postados!

***

## Como usar

Instale meu projeto e suas dependências

```bash
  git clone git@github.com:marcojr73/projeto11-tweteroo.git
```

```bash
  npm i
  
  npm run dev
```

***

##	 Tecnologias e Conceitos

- Node.js
- Express

***
    
## API Reference

#### Sign-up

```
  POST /sign-up
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `body` |`username` | `string` |
| `body` |`avatar` | `string` |

#### post tweet

```
  POST /tweets
```
| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `body` |`username` | `string` |
| `body` |`tweet` | `string` |

#### get a list of last tweets

```
  GET /tweets
```


