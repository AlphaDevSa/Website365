
const API_URL = '/api/contact';

export const submitForm = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json().catch(() => ({}));
    
    if (response.ok) {
      return { success: true, message: result.message };
    } else {
      return { success: false, error: result.error || 'Submission failed' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};
