import React, {useState, useEffect} from 'react'

const ResizeApp = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const isMobile = windowWidth <768;

    useEffect(() =>{
        const handleResize = () =>{
            setWindowWidth(window.innerWidth)
        }
         window.addEventListener('resize',handleResize )
        return () => {
            window.removeEventListener('resize',handleResize)
        }
        
    }, [])

    return (
        <>
            <h2>ResizeApp</h2>
            <h2>{windowWidth} px</h2>
            { isMobile &&<h3>Only mobile device</h3>}
        </>
    )
}

export default ResizeApp
