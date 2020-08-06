import React, { Component } from 'react';

class Comment extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
            
    //     }
    // }


    render() {
        return (
            <li>
                <div class="plusTypedComment">
                        <div><span>sanghun</span><span class="plusFeedComment">ewqr</span></div>
                        <div>
                            <div class="likeDeleteButton">
                                <img alt = "/"src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" class="plusCommentLike"/>
                            </div>
                            <button class="commentDeleteButton" type="submit">
                                <img alt = "/"class="plusCommentDeleteBtn" src="./img/deletebtn.png"/>
                            </button>
                        </div>
                    </div>
            </li>
        );
    }
}

export default Comment;