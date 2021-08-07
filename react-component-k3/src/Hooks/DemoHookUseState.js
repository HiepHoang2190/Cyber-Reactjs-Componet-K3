import React, { useState } from 'react'

export default function DemoHookUseState(props) {
    //  (1) this.state = {like:0}
    //  (2) this.setState(newState); 

    // tuple
    let [state, setState] = useState({ like: 0 })
    console.log(state.like) // console.log ở đây
    const handleLike = () => {
        // Lấy like tăng lên 1 và setState
        setState({
            like: state.like + 1
        })
        // console.log(state.like); console.log đây là chậm 1 nhịp do setState là phương thức bất đồng bộ
    }

    return (
        <div className="container mt-5">
            <div className="card text-left">
                <img style={{ width: '200px', height: '200px' }} className="card-img-top" src="https://picsum.photos/200/200" alt="picture" />
                <div className="card-body">
                    <h4 className="card-title">Picture</h4>
                    <p style={{ color: 'red' }}>{state.like} ♥ </p>
                </div>
            </div>

            <button onClick={() => { handleLike() }} className="btn btn-danger mt-2">Like</button>
        </div>



    )
}
