export default function Apple({device, price, isBuy}){
    if(isBuy===true){
        return(
            <div style={{
                margin:'20p x',
                padding:'20px',
                border:'2px solid navy',
                borderRadius:'16px',
                backgroundColor:'green'
            }}>
                <h3>Device: {device}</h3>
                <p>Price: {price}</p>
            </div>
        )
    }
    else{
        return(
            <div style={{
                margin:'20px',
                padding:'20px',
                border:'2px solid navy',
                borderRadius:'16px',
                backgroundColor:'orange'
            }}>
                <h3>Device: {device}</h3>
                <p>Price: {price}</p>
            </div>
        )
    }
}