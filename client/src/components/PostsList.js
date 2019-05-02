import React, { Component } from 'react';
import { Grid, Card, Icon, Button, Modal, Segment, Dimmer, Loader, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AddPostModal from './AddPostModal';
import { openAddPostModal } from '../actions/layoutActions';
import openSocket from 'socket.io-client';

class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [{ username: 1 }, { username: 2 }]
        }
    }



    handleClickAddPost = () => {
        const { user, openAddPostModal } = this.props;
        openAddPostModal();

        // const posts = this.state.posts.slice();
        // posts.push({username: user.name })
        // this.setState({
        //     posts: posts
        // })
    }

    renderPostContent = (title, description) => {
        return (
            <Grid.Column>
                <Grid.Row style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                    {title}
                </Grid.Row>
                <Grid.Row>
                    {description}
                </Grid.Row>
            </Grid.Column>
        )

    }

    renderPosts = () => {
        const { posts, postsLoading } = this.props;

        const postsToReturn = posts.map((post) => {

            return (
                <Grid.Row key={post.id} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card>
                        <Card.Content header={post.title} >
                            <Icon name='user' />
                            {post.authorName}

                        </Card.Content>
                        <Card.Content >
                            {this.renderPostContent(post.title, post.description)}
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='heart' />
                            {post.likes}
                        </Card.Content>
                    </Card >
                </Grid.Row>
            )




        })

        if (postsLoading) {
            return <Segment style={{ height: '300px' }}>
                <Dimmer active>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>
            </Segment>
        }

        return postsToReturn

    }

    render() {
        return (
            <>
                <Grid padded centered >
                    <Grid.Row>
                        <Grid.Column width="6" >
                            <Button
                                fluid
                                primary
                                style={{ paddingLeft: '30px', paddingRight: '30px' }}
                                onClick={this.handleClickAddPost}
                            >Add Post</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column width="6" >
                            {this.renderPosts()}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <AddPostModal />
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.auth.user,
        posts: state.posts.posts,
        postsLoading: state.posts.postsLoading
    }
}

export default connect(mapStateToProps, { openAddPostModal })(PostsList);