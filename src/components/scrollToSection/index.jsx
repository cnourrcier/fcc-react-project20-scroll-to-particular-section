import { useRef } from "react"

export default function ScrollToSection() {

    const ref = useRef();

    const data = [
        {
            id: 1,
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            id: 2,
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'grey'
            }
        },
        {
            id: 3,
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            id: 4,
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            id: 5,
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'orange'
            }
        },
    ]

    function handleScrollToSection() {
        let position = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <h1>Scroll To A Particular Section</h1>
            <button onClick={handleScrollToSection}>Click To Scroll</button>
            {
                data.map(item => (
                    <div key={item.id} ref={item.id === 4 ? ref : null} style={item.style}>
                        <h3>{item.label}</h3>
                    </div>
                ))
            }
        </div>
    )
}