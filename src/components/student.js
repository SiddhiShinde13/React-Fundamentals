const Student = (props) => {
    return (
        <div>
            <h1 className='title'>Student name :{props.firstName} {props.lastName}</h1>
            <h2>Student ID: 12345</h2>
            <p>Email: {props.email}</p>
            <button onClick = {() => alert('Button clicked!')}>Click Me</button>
        </div>
    )
};

export default Student;
