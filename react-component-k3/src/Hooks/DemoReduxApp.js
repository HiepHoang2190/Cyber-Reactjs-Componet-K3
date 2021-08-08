import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'; // dùng như class component thì xài connect
import { addCommentAction } from "../redux/actions/FakeBookActions";
export default function DemoReduxApp(props) {

    // useSelector  thay cho mapStateToProps
    let comments = useSelector(state => state.FakeBookReducer.comments);

    // lấy hàm dispatch từ useDispatch => để gửi giá trị lên reducer thay thế cho mapDispatchToProps hoặc this.props.dispatch
    let dispatch = useDispatch();
    // Lấy thông tin người dùng nhập vào
    let [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    });
    console.log('userComment', userComment)

    const handleChange = (e) => {
        let { value, name } = e.target;

        setUserComment({
            ...userComment, // nếu ko có dòng này thì nhập tên chỉ có tên, nhập content chỉ có content,phải có dòng này
            [name]: value
        })
    }
    // Submit thông tin người dùng lên reducer
    const handleComment = (e) => {
        e.preventDefault(); // chặn browser reload lại

        let usComment = { ...userComment, avatar: `https://i.pravatar.cc/150?u=${userComment.name}` }
        // let action = {
        //     type: 'add_comment',
        //     userComment: usComment
        // }
        // dispatch(action);
        // ở trên là viết khi chưa dùng action creator
        dispatch(addCommentAction(usComment))
    }
    return (
        <div className="container">
            <h3>Facebook app !</h3>
            <div className="card text-left">
                <div className="card-header">
                    {comments.map((comment, index) => {
                        return <div className="row" key={index}>
                            <div className="col-2">
                                <img src={comment.avatar} style={{ height: 60 }}></img>
                            </div>
                            <div className="col-10">
                                <h6 className="text-danger">{comment.name}</h6>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    })}


                </div>
                <form className="card-body" onSubmit={handleComment}>
                    <div className="form-group">
                        <h4 className="card-title">Name</h4>
                        <input className="form-control" name="name" onChange={handleChange}></input>
                    </div>
                    <div className="form-group">
                        <h4 className="card-title">Content</h4>
                        <input className="form-control" name="content" onChange={handleChange}></input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Send</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

// dùng redux như class component vẫn được
// const mapStateToProps = (state) => {
//     return {
//         comments: state.FakeBookReducer.comments
//     }
// }

// export default connect(mapStateToProps)(DemoReduxApp)