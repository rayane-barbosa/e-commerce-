const baseUrl: string = "https://viacep.com.br/ws";

export const fetchCep = async (cep: string) => {
  if (cep.length < 8) return null;
  try {
    const response = await fetch(`${baseUrl}/${cep}/json`);
    const data = await response.json();
    if (!data.erro) {
      return {
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
      };
    } else {
      console.error("CEP não encontrado");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
