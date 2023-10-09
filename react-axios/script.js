import axios from "axios";

export default async function getData (id) {
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then( response => {
        var user = response.data;
        console.log(user);
    });
    await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then( res => {
        var post = res.data;
        console.log(post);
    });
}