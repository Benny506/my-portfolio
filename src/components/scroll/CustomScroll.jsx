export default function CustomScroll(props){
    return (
        <div style={{ overflow: 'auto' }} className="h-100">
            { props.children }
        </div>
    )
}