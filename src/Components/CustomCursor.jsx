import React, { useEffect } from 'react'

function customCursor() {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = React.useState(false);
    const [isClicking, setIsClicking] = React.useState(false);
    const [isOverLink, setIsOverLink] = React.useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            // console.log(e.clientX, e.clientY);
            
            setPosition({ x: e.clientX, y: e.clientY })
            setIsVisible(true)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        const handleLinkHover = (e) => {
            const target = e.target;
            const isLink = target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') !== null || target.closest('button') !== null;
            setIsOverLink(isLink);
        }

        window.addEventListener('mousemove', updateCursorPosition)
        window.addEventListener('mousemove', handleLinkHover)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseleave', () => setIsVisible(false))
        window.addEventListener('mouseenter', () => setIsVisible(true))

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition)
            window.removeEventListener('mousemove', handleLinkHover)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseleave', () => setIsVisible(false))
            window.removeEventListener('mouseenter', () => setIsVisible(true))
        }
    }, [])

    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
        return null; // Don't show custom cursor on touch devices
    }

    return (
        <>
            <div className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration 150 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isClicking ? 'scale-75' : ''} ${isOverLink ? 'scale-350' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '25px',
                    height: '25px',
                    backgroundColor: '#3B82F6',
                    transform: `translate(-50%, -50%)`,
                }}
            />
            <div className={`fixed pointer-events-none z-40 rounded-full border border-portfolio-accent transition-all duration 300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isOverLink ? 'scale-0' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '35px',
                    height: '35px',
                    backgroundColor: isOverLink ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                    transform: `translate(-50%, -50%)`,
                }}

            />
        </>
    )
}

export default customCursor