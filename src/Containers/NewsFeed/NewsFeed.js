import React, { Component } from "react";
import axios from "axios";
import Post from "../../Components/Post/Post";
import FilterContext from "../../context/FilterContext";
import Filter from "../../Components/Filter/Filter";
import { Button, Spinner } from "react-bootstrap";

import "./NewsFeed.css";
import SearchContext from "../../context/SearchContext";

export default class NewsFeed extends Component {
  state = {
    posts: [],
    currentFilter: "",
    isLoading: true,
  };

  //Life Cycle methods----------------------------------------------------------------
  componentDidMount() {
    this.fetchStories("Top Stories");
  }

  //fetch from hacker new's api--------------------------------------------------------

  fetchStories = (filter) => {
    //clear posts before repopulating, and start loading
    this.setState({
      ...this.state,
      currentFilter: filter,
      posts: [],
      isLoading: true,
    });

    let selectedFilter;

    switch (filter) {
      case "Top Stories":
        selectedFilter = "topstories.json";
        break;
      case "New Stories":
        selectedFilter = "newstories.json";
        break;
      case "Best Stories":
        selectedFilter = "beststories.json";
        break;
      default:
        selectedFilter = "topstories.json";
        break;
    }
    

    //get stories ids
    axios
      .get("https://hacker-news.firebaseio.com/v0/" + selectedFilter)
      .then((res) => {
        const postIDs = res.data.splice(0, 50);

        //get each story object from the id
        postIDs.forEach((postID) => {
          const newUrl =
            "https://hacker-news.firebaseio.com/v0/item/" + postID + ".json";

          axios
            .get(newUrl)
            .then((res) => {
              this.setState({
                posts: [...this.state.posts, res.data],
                isLoading: false,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Prepare posts to be rendered to screen----------------------------------------------------------------
  setPosts = () => {
    //returns all posts if search is empty, otherwise, return filtered posts based on search input
    let fetchPosts;
    let filteredPosts;
    if (!this.context.searchValue === "") {
      fetchPosts = this.state.posts.map((post) => {
        post.favSet = false;
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            points={post.score}
            by={post.by}
            time={this.getPostTime(post)}
            // comments={post.kids.length}
            url={post.url}
            favClicked={() => this.heartIconClickedHandler(post)}
          />
        );
      });
    } else {
      filteredPosts = this.state.posts.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(this.context.searchValue.toLowerCase());
      });
      fetchPosts = filteredPosts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            points={post.score}
            by={post.by}
            time={this.getPostTime(post)}
            // comments={post.kids.length}
            url={post.url}
            favClicked={() => this.heartIconClickedHandler(post.id)}
            isFav={localStorage.getItem(post.id) ? true : false}
          />
        );
      });
    }

    return fetchPosts;
  };

  //Convert time----------------------------------------------------------------
  getPostTime = (post) => {
    const today = new Date();
    const postDate = new Date(post.time);

    if (today.getYear() - postDate.getYear() > 0) {
      return today.getYear() - postDate.getYear() + " years ago";
    } else if (today.getMonth() - postDate.getMonth() > 0) {
      return today.getMonth() - postDate.getMonth() + " months ago";
    } else {
      return today.getDay() - postDate.getDay() + " days ago";
    }
  };

  //Button clicks and handler methods----------------------------------------------------------------
  applyFilterBtnClicked = (filter) => {
    this.fetchStories(filter);
  };

  heartIconClickedHandler = (postID) => {
    if (localStorage.getItem(postID)) {
      localStorage.removeItem(postID);
    } else {
      localStorage.setItem(postID, "true");
    }
  };

  //Other methods----------------------------------------------------------------
  showLoading = () => {
    return <Spinner className={"spin"} animation="border" variant="warning" />;
  };
  //res.data.title, res.data.score, res.data.by, res.data.time, res.data.kids (is an array), res.data.url

  render() {
    let fetchPosts = this.setPosts();

    return (
      <div>
        <FilterContext.Consumer>
          {({ filter }) => (
            <div>
              <div id={"filter-container"}>
                <Filter className={"filter-items"} />
                {filter !== this.state.currentFilter && (
                  <Button
                    id={'apply-filter-btn'}
                    className={"filter-items"}
                    onClick={() => this.applyFilterBtnClicked(filter)}
                  >
                    Apply Changes
                  </Button>
                )}
              </div>
            </div>
          )}
        </FilterContext.Consumer>

        {this.state.isLoading ? this.showLoading() : fetchPosts}
      </div>
    );
  }
}

NewsFeed.contextType = SearchContext;
