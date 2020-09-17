import {useState, useEffect, useRef} from "react"

// Returns hovered (boolean representing hovered status and a ref add to the respective component
function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enterElement() {
        setHovered(true)
    }
    
    function leaveElement() {
        setHovered(false)
    }
    
    useEffect(() => {
        ref.current.addEventListener("mouseenter", enterElement)
        ref.current.addEventListener("mouseleave", leaveElement)
        
        return () => {    
            ref.current.removeEventListener("mouseenter", enterElement)
            ref.current.removeEventListener("mouseleave", leaveElement)
        }
    }, [])
    
    return [hovered, ref]
}

export default useHover