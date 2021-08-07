import React, { useState, useCallback } from 'react'
import ChildUseCallBack from './ChildUseCallBack';

export default function DemoHookUseCallBack(props) {
    let [like, setLike] = useState(1);

    const renderNotify = () => {
        return `Bạn đã thả ${like} ♥ !`
    }

    let callBackRenderNotify = useCallback(renderNotify, [like])
    // trong dấu ngoặc vuông, cần thằng nào thay đổi thì liệt kê vào, nếu để rỗng thì nó ko render lại
    // var a = { id: 1 };
    // b = a;
    // b = function() { ...a };
    return (
        <div className="m-5">
            Like:{like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>

            <small>{renderNotify()}</small>
            <br />
            <br />

            <ChildUseCallBack renderNotify={callBackRenderNotify} />
        </div>
    )
}
