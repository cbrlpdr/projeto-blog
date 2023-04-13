import './styles.css';
import { Post } from '../../components/Post';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [allPosts, setAllPosts] = useState([]);
    const [postsPerPage] = useState(6);

    const filteredPosts = searchValue
        ? allPosts.filter((post) => {
              return post.title.toLowerCase().includes(searchValue.toLowerCase());
          })
        : posts;

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postsAndPhotos = await loadPosts();

        setPosts(postsAndPhotos.slice(page, postsPerPage));
        setAllPosts(postsAndPhotos);
    }, []);
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    };

    useEffect(() => {
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, postsPerPage]);

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    };

    return (
        <section className="container">
            <div className="searchContainer">
                {!!searchValue && (
                    <>
                        <h2>Search value: {searchValue}</h2>
                    </>
                )}

                <SearchInput handleChange={handleChange} searchValue={searchValue} />
            </div>
            {filteredPosts.length === 0 && <h2> Não encontrei nenhum resultado :(</h2>}

            <Post posts={filteredPosts} />
            {!searchValue && <Button text="Load more" onClick={loadMorePosts} />}
        </section>
    );
};
