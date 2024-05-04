export default function Todo({task}){
    return (
    <div style={{
        margin:'20px',
        padding:'20px',
        border:'2px solid green',
        borderRadius:'16px',
        backgroundColor:'skyblue'
    }}>
        <ul>
            <li>{task}</li>
        </ul>
    </div>
    )
}