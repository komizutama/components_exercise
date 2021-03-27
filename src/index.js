import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                </div>
                Do you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatarImage={faker.image.animals()} 
                    author="Sam" 
                    timeAgo="Today at 4:52pm" 
                    commentText="blah" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImage={faker.image.animals()} 
                    author="Alex" 
                    timeAgo="Today at 5:52am" 
                    commentText="Dee" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImage={faker.image.animals()} 
                    author="Jane"
                    timeAgo="Yesterday at 4:52pm" 
                    commentText="Dada" 
                />
            </ApprovalCard>
        </div>

    );
};

ReactDom.render(<App />, document.querySelector('#root'));

