export default class CadastroProfissionalService {

    async cadastrarProfissional(profissional) {
        try {
            var resposta = await fetch('http://localhost:3000/profissional',
                {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(profissional)
                });
            return (resposta.status == 201) ? resposta.json() : null;

        } catch (error) {
            console.log(error);
        }
    }


}