// It can be written in two ways by using props or by same name.

// function SayHello (props) {
//     // const name = "Kevadiya"
//     return (
//         <h1>Hello, {props.fname} {props.lname}</h1>
//     )
// }

function SayHello ({fname, lname}) {
    // const name = "Kevadiya"
    const myStyle = {
        color:'red',
        backgroundColor:'lightskyblue'
    }
    return (
        <h1 style={myStyle}>Hello, {fname} {lname}</h1>
    )
}

export default SayHello;