import React, { Fragment, useEffect, useState, useRef } from 'react';
import './App.css';
import Input from './input.js';


const HelloWorld = (propiedades) => {

    const [isTrue, setIsTrue] = useState(true);
    const [crowd, setCrowd ] = useState([]);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")

    //refs
    const firstNameRef = useRef();
    const lastNameRef = useRef(null);
    const dobRef = useRef(null);

    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    };

    useEffect(()=>{
        console.log("UseEffect fired!");
        let people = [
            {
                id: 1,
                firstName: "Mary",
                lastName: "Jones",
                dob: "1997-05-02",
            },
            {
                id: 2,
                firstName: "Jack",
                lastName: "Smith",
                dob: "1999-02-04",
            },
        ]
        setCrowd(people);
    },[]);



    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (lastName!==""){
            addPerson(firstName, lastName, dob);
        }
    }

    const addPerson = (newFirst, newLast, newDOB) =>{
        let newPerson= {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDOB,
        }
        const newList = crowd.concat(newPerson);

        const sorted = newList.sort( (a,b)=>{
            if (a.lastName < b.lastName){
                return -1;
            }else if (a.lastName > b.lastName){
                return 1;
            }

            return 0;

        })

        setCrowd(sorted);
        setFirstName("");
        setLastName("");
        setDob("");

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";

        
    }


    return (
        <Fragment>
            <hr />
            <h1 className='h1-green'>{propiedades.msg}</h1>
            <hr />
            {
                isTrue &&
                <Fragment>
                    <p>The current value of isTrue is true</p>
                    <hr />
                </Fragment>
            }
            <hr />
            {
                isTrue ? <p>Is True</p>
                    :
                    <p>Is False</p>
            }
            <hr />
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle is True</a>
            <hr/>

            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="first-name">First Name</label>
                    <input 
                    type ="text" 
                    name="first-name" 
                    id="first-name"                      
                    ref={firstNameRef}                    
                    autoComplete="first-name-new"
                    className="form-control"
                    onChange={(e) =>{
                        setFirstName(e.target.value)
                    }}
                    ></input>
                    <Input
                    title ="Last Name"
                    type="text"
                    ref={lastNameRef}
                    name="last-name"
                    autoComplete="last-name-new"
                    className="form-control"
                    onChange={(e)=>{setLastName(e.target.value)}}                    
                    />
                    <Input
                    title ="Date of Birth"
                    type="date"
                    ref={dobRef}
                    name="dob"
                    autoComplete="dob-new"
                    className="form-control"
                    onChange={(e)=>{setDob(e.target.value)}}                    
                    />

                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
            </form>

            <div>
                First Name: {firstName} <br/>
                Last Name: {lastName} <br/>
                DBO: {dob} <br/>
            </div>


            <h3>People</h3>
            <ul className="list-group">
                {
                    crowd.map( (m) =>{
                       return <li key={m.id} className="list-group-item">{m.firstName} {m.lastName}</li>
                    })
                }
            </ul>
        </Fragment>
    )

}

export default HelloWorld;