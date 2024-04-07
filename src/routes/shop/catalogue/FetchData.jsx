export const getRequestWithNativeFetch = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error('An error occurred during the request:', error);
        throw error;
    }
};