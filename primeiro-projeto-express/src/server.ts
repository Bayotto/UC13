//Importar o Express e os tipos request e Responsede ts
//Express: framework que facilita criar servidores HTTP
// Request: representa a requisição que chega do cliente 
// Response: representa a resposta que vamos enviar
//
import express,{Request,Response} from "express";

//Cria uma aplicação Express
//A variável app é o nosso servidor

const app=express();

// Define a porta onde o srvidor vai rodar(3000)
const PORT=3000;

app.get("/sobre", (req, res) => {
    res.json({
        "curso": "Backend com Node",
        "professora": "Dalvana",
        "versao": "1.0"
    });
    
});
app.get("/hora", (req, res)=>{
    res.json({   
        "hora": "20:45:30"    
    })
})

app.get("/", (req:Request,res:Response)=>{
    //Envia uma resposta em JSON para quem chamou a rota
    res.json({mensagem:"Servidor da Dalvana em pleno funcionamento! 🚀"})
    })
    // Inicia o servidor e coloca ele para escutar a porta definida
    app.listen(PORT, ()=>{
          console.log(`🔥 Servidor rodando em http://localhost:3000/bemvindo/Ana${PORT}`)
        })


// Middlewere para permitir que o servior leia JSON no corpo das requisiçoes
// Sem isso o req.body não funciona
app.use(express.json())
/*
Criaremos rota GET no camoinho "/"
Quando acessarmos: http:/localhost:3000/
vamos executar a função abaixo:
req=dados enviados pelo cliente
res=objetos usados para responder o cliente
*/
app.get("/", (req:Request,res:Response)=>{
    //Envia uma resposta em JSON para quem chamou a rota
    res.json({mensagem:"Servidor Express em pleno funcionamento! 🚀"})
    })
    // Inicia o servidor e coloca ele para escutar a porta definida
    app.listen(PORT, ()=>{
          console.log(`🔥 Servidor rodando em http://localhost:${PORT}}`)

          

          
    

})
