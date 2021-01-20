import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../Components/Post/Post';
import FilterContext from '../../context/filterContext';
import Filter from '../../Components/Filter/Filter';
import { Button } from 'react-bootstrap';



export default class NewsFeed extends Component {

    static contextType = FilterContext;

    state = {
        posts: [],
    }

    componentDidMount(){

        this.fetchTopStories();
    }

    fetchTopStories = () => {
        //get top stories ids
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => {
                const postIDs= res.data.splice(0, 20)

                //get each story object from the id
                postIDs.forEach(postID => {
                    const newUrl = 'https://hacker-news.firebaseio.com/v0/item/' + postID +'.json'

                    axios.get(newUrl)
                        .then(res => {
                            this.setState({posts: [...this.state.posts, res.data]})
                        })
                        .catch(error =>{
                            console.log(error)
                        })
                })
                
            })
            .catch(error =>{
                console.log(error)
            })
    }

    getPostTime =(post) => {
        const today = new Date()
        const postDate = new Date(post.time)

        if(today.getYear() - postDate.getYear() > 0){
            return today.getYear() - postDate.getYear() + " years ago"

        } else if(today.getMonth() - postDate.getMonth() > 0){
            return today.getMonth() - postDate.getMonth() + " months ago"

        } else {
            return today.getDay() - postDate.getDay() + " days ago"
        }
    }

    applyFilterBtnClicked = (filter) =>{
        console.log(this.context.filterSelected)
    }

    postClickedHandler = (id) => {
        console.log(id)
    }

    //res.data.title, res.data.score, res.data.by, res.data.time, res.data.kids (is an array), res.data.url

    render() {

        const allPosts = this.state.posts.map( post => {
            return(
                <Post 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    points={post.score}
                    by={post.by}
                    time={this.getPostTime(post)}
                    // comments={post.kids.length}
                    url={post.url}
                    clicked={() => this.postClickedHandler(post.id)}
                />
            ) 
        })
        return (
            <div>
                <Filter />
                <Button onClick={() => this.applyFilterBtnClicked(this.context.filterChosen)}>Apply Changes</Button>

                {allPosts}
            </div>
        )
    }
}
