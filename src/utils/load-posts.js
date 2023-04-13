export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://pixabay.com/api/?key=27212255-6b9514cddef0c894c49ab60f0&q=bird&per_page=200');
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    console.log(photosJson.hits);

    const postsAndPhotos = postsJson.map((post, index) => {
        return { ...post, cover: photosJson.hits[index].webformatURL };
    });
    return postsAndPhotos;
};
