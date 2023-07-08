import React from 'react'

const commentsData= [

    {
        name: "Anshu Gupta",
        text: "lorem ipsum dolor sit amet adip",
        id: "1234",
        replies:[ {
            name: "Anshu Gupta",
            text: "lorem ipsum dolor sit amet adip",
            id: "12345",
            replies:[ {
                name: "Anshu Gupta",
                text: "lorem ipsum dolor sit amet adip",
                id: "123456",
                replies:[],
            },],
        },],
    },
    {
        name: "Anshu Gupta",
        text: "lorem ipsum dolor sit amet adip",
        id:"2345",
        replies:[ {
            name: "Anshu Gupta",
            text: "lorem ipsum dolor sit amet adip",
            id: "1234569",
            replies:[ {
                name: "Anshu Gupta",
                text: "lorem ipsum dolor sit amet adip",
                id: "12345691",
                replies:[ {
                    name: "Anshu Gupta",
                    text: "lorem ipsum dolor sit amet adip",
                    id: "123456913",
                    replies:[ {
                        name: "Anshu Gupta",
                        text: "lorem ipsum dolor sit amet adip",
                        id: "1234569134",
                        replies:[],
                    },],
                },],
            },],
        },],
    },
    {
        name: "Anshu Gupta",
        text: "lorem ipsum dolor sit amet adip",
        id:"399",
        replies:[ {
            name: "Anshu Gupta",
            text: "lorem ipsum dolor sit amet adip",
            id: "12345691349",
            replies:[],
        },],
    },
    {
        name: "Anshu Gupta",
        text: "lorem ipsum dolor sit amet adip",
        id:"4545",
        replies:[ {
            name: "Anshu Gupta",
            text: "lorem ipsum dolor sit amet adip",
            id: "123009",
            replies:[ {
                name: "Anshu Gupta",
                text: "lorem ipsum dolor sit amet adip",
                id: "12300009",
                replies:[ {
                    name: "Anshu Gupta",
                    text: "lorem ipsum dolor sit amet adip",
                    id: "1230000911",
                    replies:[],
                },],
            },],
        },],
    },
];

const Comment = ({data})=>
{
    const {name,text}=data;

    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img  className='h-12 w-12' alt="user" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="/>
    <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p className='font-bold'>{text}</p>
    </div>
    </div>
};

const CommentsList = ({ comments }) => {

    return comments.map((comment) => (
        
        <div key={comment.id}>
        <Comment  data={comment} />
        <div className='pl-5 border-l  border-gray-800 ml-5'>
       <CommentsList comments={comment.replies}/>
        </div>
        </div>
    
       
    ));

};



const CommentsContainer = () =>
{
    return (
    <div className='m-5 p-2'>
        <h1 className="text-2xl font-bold"> Comments Container: </h1>
       <CommentsList comments={commentsData}/>
        </div>
    );
}
export default CommentsContainer;

