import { Component } from 'react';
import './styles.css';
import { Post } from '../../components/Post';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  loadMorePosts = () => {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }
  render() {
    const { allPosts, posts , searchValue} = this.state;
    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    return (
      <section className="container">
        <div className='searchContainer'>
        {!!searchValue && (
          <>
          <h2>Search value: {searchValue}</h2>
          </>
        )}
        
        <SearchInput handleChange={this.handleChange} searchValue={searchValue}/>
        </div>
        {filteredPosts.length == 0 && (
          <h2> Não encontrei nenhum resultado para "{searchValue}" :(</h2>
        )}

        <Post posts={filteredPosts} />
        {!searchValue && (
        <Button
          text="Load more"
          onClick={this.loadMorePosts}
        />)}
      </section>

    );
  }
}
