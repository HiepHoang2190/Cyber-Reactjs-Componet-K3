import React, { useState, useMemo } from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {
    let [like, setLike] = useState(1);

    // viết dưới dạng function trả về 1 cái mảng
    // const renderCart = () => {
    //     let cart = [
    //         { id: 1, name: 'iphone', price: 1000 },
    //         { id: 2, name: 'htc phone', price: 2000 },
    //         { id: 3, name: 'lg phone', price: 3000 }
    //     ];
    //     return cart;
    // }
    // const cartMemo = useMemo(renderCart, [like]);


    let cart = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'htc phone', price: 2000 },
        { id: 3, name: 'lg phone', price: 3000 },
    ];


    const cartMemo = useMemo(() => cart, []);
    // để []: ko render lại
    // nếu trong [] có giá trị ví dụ như [like] thì khi kích vào nút like làm like thay đổi thì cartMemo truyền vào childUseMemo render lại

    // useMemo: dùng khi trả về là 1 giá trị
    // useCallback: dùng khi trả về là 1 hàm, ko phải là 1 giá trị
    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1);
            }}>♥</span>
            <br />
            <br />
            {/* truyền props là cart thì nó sẽ render lại */}
            {/* <ChildUseMemo cart={cart} />  */}

            {/* truyền props là cartMemo thì trong childUseMemo ko render lại */}
            <ChildUseMemo cart={cartMemo} />
        </div>
    )
}
