const BASE_URL = 'https://ig-food-menus.herokuapp.com';

export const fetchMenuItems = async (category = 'burgers') => {
  try {
    const response = await fetch(`${BASE_URL}/${category}`);

    if (!response.ok) {
      throw new Error('Falha ao comunicar com a API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar itens da API:', error);
    return null;
  }
};

export const api = {
  fetchMenuItems,
};
