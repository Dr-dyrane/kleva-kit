const API_URL = 'http://localhost:5000/api';

export const createBrand = async (brand) => {
  const response = await fetch(`${API_URL}/brand`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(brand),
  });
  return response.json();
};

export const getBrands = async () => {
  const response = await fetch(`${API_URL}/brand`);
  return response.json();
};

// Add other API endpoints as needed...
