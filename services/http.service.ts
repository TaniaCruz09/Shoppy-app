const baseUrl = "http://localhost:3000";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxR0tTVkRHVkU3ODNXMjMwRDdXRFJTRFRSIiwiaWF0IjoxNjcwNjI4OTY3LCJleHAiOjIyNzA2Mjg5Njd9.1hc6ppAirgVpAJqc8tYeZlOlBzj2vvZbAIIw68naVvI";

interface Products {
  id: number;
  nombre: string;
  precio: number;
}

export class HttpClient {
  async get<T>(endPoint = "products") {
    const response = await fetch(`${baseUrl}/${endPoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: T = await response.json();
    return data;
  }
}
