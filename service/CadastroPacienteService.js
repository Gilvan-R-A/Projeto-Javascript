export default class CadastroPacienteService {

    async cadastrarPaciente(paciente) {
        try {
            var resposta = await fetch('http://localhost:3000/paciente',
                {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(paciente)
                });
        return (resposta.status == 201) ? resposta.json():null;
           
        } catch (error) {
            console.log(error);
        }

    }

}