var doacoes = new Array();

var busca, i, cont_doation = 0, cont = 0;

document.getElementById('result').value = "0";

class doaction
{
    constructor()
    {
        this.id;
        this.objeto;
        this.nome;
        this.endereco;
        this.tipo;
        this.quant;
        this.tamanho;
    }

    registro(op)
    {
        this.id = doacoes.length;
        this.objeto = op;
        this.nome = nome.value;
        this.endereco = cep.value;
        this.tipo = tipo.value;
        this.quant = quantidade.value;
        this.tamanho = tamanho.value;
    }

    mostrar()
    {
        cont = 0;
        for(i = 0; i < doacoes.length; i++)
        {
            cont++;
            document.getElementById('result').value = cont;
            document.getElementById('alert').value = "Obrigado pela contribuição!";

        }
    }

    buscar(id)
    {
        for(i = 0; i < doacoes.length; i++)
        {
            if(id == doacoes[i].id)
            {
                return i;
            }

            else
            {
                document.getElementById('n_doa').value = "Doação invalida!";
            }
        }
    }
}


function enviar()
{
    var radioOP = document.getElementsByName('box');

    var op, verificar;

    for(i = 0; i <= 1; i++)
    {
        cont++;

        if(radioOP[i].checked)
        {
        
            if(i == '0')
            {
                op = radioOP[i].value; 
                verificar = "passei"; 
                alert("alo");  
            }

            if(i == '1')
            {
                op = radioOP[i].value;
                verificar = "passei";
                alert("alo");
            }
        }   
    }

    if(verificar != "passei" || nome.value == ""|| cep.value == ""|| quantidade.value == "" || tamanho.value == ""|| tipo.value == "")
        {
            document.getElementById('alert').value = "Os campos estão vazios!";
        }
            else
            {
                var doei = new doaction;

                doei.registro(op);
                doacoes.push(doei);
                doei.mostrar();

                apagar();
            }
        
}

 function apagar()
 {
    document.getElementById('tipo').value = "";
    document.getElementById('quantidade').value = "";
    document.getElementById('tamanho').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('cep').value = "";
 }

 function admin()
 {

    document.getElementById('busca').className = 'invisivel';

    document.getElementById('mostrando').className = "invisivel";
    document.getElementById('but-invi').className = "invisivel";
    document.getElementById('admin').className = "manutencao";
 }

 function entrar()
 {
    var admin = document.getElementById('n_doa').value;

     if(admin == "12345678900");
     {
        document.getElementById('admin').className = 'invisivel';

        document.getElementById('busca').className = 'form-container';
     }
     if(admin != "12345678900");
        {
            document.getElementById('admin').value = "administrador invalido!";
        }
 }

 var global = new doaction();

 function buscar()
 {

    document.getElementById('busca').className = 'invisivel';
    document.getElementById('resul').className = 'form-container';


    var pega = document.getElementById('n_doa').value;

    var achou = global.buscar(pega);

   

 }

 function voltar()
 {
    document.getElementById('mostrando').className = "visivel";
    document.getElementById('but-invi').className = "visivel";
    document.getElementById('but-invi').className = "but-admin";
 }
