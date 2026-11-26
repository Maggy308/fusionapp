import {useState} from "react";

export default function MyForm() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState("");
    const [flag, setFlag] = useState(false);


    function handleWeightChange(e) {
        setWeight(e.target.value);
    }

    function handleHeightChange(e) {
        setHeight(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        let result = weight / height ** 2
        setBmi(Math.round(result * 100) / 100)
        if (result < 18.5) {
            setCategory("underweight")
            setFlag(true)
        } else if (result > 18.5 && result < 24.9) {
            setCategory("Normal weight")
            setFlag(false)
        } else if (result > 25 && result < 29.9) {
            setCategory("Overweight")
            setFlag(true)
        } else if (result > 30.0 && result < 34.9) {
            setCategory("Obesity class 1")
            setFlag(true)
        } else if (result > 35.0 && result < 39.9) {
            setCategory("Obesity class 2")
            setFlag(true)
        } else {
            setCategory("Obesity class 3")
            setFlag(true)
        }

    }
    let color=flag? "text-danger" : "text-success"; //ternary operator-shortcut for if statement


    return (<div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 border mt-4 p-3">
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleWeightChange} type="number" step="0.01"
                                   className="form-control mb-4 " placeholder="Weight"/>
                            <input onChange={handleHeightChange} type="number" step="0.01" className="form-control mb-4"
                                   placeholder="Height"/>

                            <button className="btn btn-danger">Calculate</button>

                        </form>
                        <h3 className={`text-center ${color}`}>BMI is {bmi}</h3>
                        <p className={`text center ${color}`}> you are {category}</p>
                    </div>
                </div>
            </div>
        </div>
    )


}