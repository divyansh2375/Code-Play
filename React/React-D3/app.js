const Heading = React.createElement(
    "h1",
    {
        id : "title"
    },
    "Heading 1"
)

const Heading1 = React.createElement(
    "h2",
    {
        id : "title"
    },
    "Heading 2"
)

const container = React.createElement(
    "div",
    {
        id : "title"
    },
    [Heading,Heading1]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading)   //iska matlb he ki modify hua root wala id
// root.render(Heading1)  //we cant do this in this way nothing work so agar dono ko ek sath print krna he to uske liye hume alag se container banake krna hoga ye sab kyonki aise sirf last wala hi print hoga

root.render(container)