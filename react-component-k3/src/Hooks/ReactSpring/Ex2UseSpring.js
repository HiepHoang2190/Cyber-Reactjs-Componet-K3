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

    return (
        <animated.div style={{
            color: color.interpolate((r, g, b) => { return `rgb(${r},${g},${b})` })
            // color: propsUseSpring.color
        }}>
            hello cybersoft
        </animated.div>
    )
}
