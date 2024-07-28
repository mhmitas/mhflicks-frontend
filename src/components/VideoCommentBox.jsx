import React from 'react';


const CommentsSection = () => {

    return (
        <div className="space-y-4">
            <CommentBox />
            <div className="space-y-2">
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        author={comment.author}
                        text={comment.text}
                        timestamp={comment.timestamp}
                    />
                ))}
            </div>
        </div>
    );
};


export default CommentsSection


const CommentBox = () => {

    return (
        <div className='mt-8'>
            <h3 className='card-title mb-2'>200 Comments </h3>
            <div className="flex flex-col space-y-4 rounded-md">
                <textarea
                    className="textarea textarea-bordered w-full"
                    rows="2"
                    placeholder="Add a public comment..."
                ></textarea>
                <button className="btn btn-secondary btn-sm rounded-full self-end">
                    Comment
                </button>
            </div>
        </div>
    );
};


const Comment = ({ author, text, timestamp }) => {
    return (
        <div className="flex space-x-3 py-4 border-b border-base-200">
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src="https://via.placeholder.com/150" alt="User Avatar" />
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">{author}</span>
                    <span className="text-sm text-color-gray">{timestamp}</span>
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
};


const comments = [
    {
        author: 'Alice',
        text: 'This is a great video! Thanks for sharing.',
        timestamp: '2 hours ago',
    },
    {
        author: 'Bob',
        text: 'I learned a lot from this. Very informative.',
        timestamp: '1 day ago',
    },
    {
        author: 'Charlie',
        text: 'Awesome content! Keep it up!',
        timestamp: '3 days ago',
    },
    {
        author: 'Dave',
        text: 'Can you make a video on a related topic?',
        timestamp: '1 week ago',
    },
    {
        author: 'Eve',
        text: 'This was really helpful, thank you!',
        timestamp: '2 weeks ago',
    },
];