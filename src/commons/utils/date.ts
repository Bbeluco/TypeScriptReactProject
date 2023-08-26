export function tempoParaSegundos(tempo: String): number {
    const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");
    const horasParaSegundos = Number(horas) * 3600;
    const minutosParaSegundos = Number(minutos) * 60;
    return horasParaSegundos + minutosParaSegundos + Number(segundos);
}