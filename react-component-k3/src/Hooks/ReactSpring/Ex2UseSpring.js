import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Ex2UseSpring() {

    let { color, ...propsUseSpring } = useSpring({
        color: [131, 111, 255], // Màu sắc sau animation
        // color: 'rgb(131,111,255)',
        from: {
            color: [238, 99, 99] // Màu sắc bắt đầu
            // color: 'rgb(238,99,99)'
        },
        config: { duration: 2000, delay: 0 }
    })

    // Tăng font chữ tăng độ dài

    let propAimation = useSpring({
        from: {
            width: '0%',
            height: '0%',
            fontSize: '10px',

        },
        to: async (next, cancel) => {
            await next({ width: '100%', height: '100%', fontSize: '50px' });
            await next({ width: '50%', height: '50%', fontSize: '10px' });
            await next({ width: '100%', height: '100%', fontSize: '50px' })
        },
        config: { duration: 1000 }
    })

    return (
        <div>
            <animated.div style={{
                color: color.interpolate((r, g, b) => { return `rgb(${r},${g},${b})` })
                // color: propsUseSpring.color
            }}>
                hello cybersoft
        </animated.div>

            <animated.span style={propAimation} className="bg-dark text-white">
                <span>
                    hello cyberlearn
                    </span>
                <p>
                    Khóa học được thực hiện tại cyberlearn.vn
                    </p>
            </animated.span>
        </div>
    )
}
