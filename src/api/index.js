import { API_URL } from "../Utils";

export const searchRecipe = async (query) => {
    try{
        const response = await fetch(API_URL.search(query), {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('API call failed');
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error('API call error:', error);
    }
}

const todoURL = "https://jsonplaceholder.typicode.com/todos";

export const todoList = async () => {
    try{
        const response = await fetch(todoURL, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('API call failed');
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error('API call error:', error);
    }
}