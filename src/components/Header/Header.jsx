//* Props are passed inot our function
//* component as an argument
//* Destructuring:
//* const{ textColor, headerText someOtherThing} =props;
//* we can use this in place of (props)
function Header (props) {
    return (
        <header>

            <h1 style={{color:props.textColor}}>
            {props.headerTextProp}</h1>
           
            <h2>{props.someOtherThing}</h2>
        </header>
    );
}
export default Header;