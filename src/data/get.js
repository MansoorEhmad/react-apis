
export const get =  async (endPoint) => {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/'+endPoint);
        
    const data = await res.json();
    console.log(data);
    return data;
}