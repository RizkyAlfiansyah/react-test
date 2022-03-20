import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Service from '../services';

function Form() {

    const {register,formState: { errors }, handleSubmit} = useForm();
    const [dropDown, setDropDown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const category = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

    

    const onSubmit = data => {
        const formData = {...data, category: selectedOption};
        Service.postData(formData).then(data => {
            if(data) {
                alert('Data submitted successfully');
                window.location.reload();
            } else {
                alert('Data not submitted');
            }
           
        });
    };

  return (
    <div className='form-input'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' name='name' className='form-control' placeholder='Enter Your Name' {...register("name", {required : true})} />
                {errors?.name && <span className="text-red">This field is required</span>}
            </div>
            <div className='dropdown'>
                <label>Category</label>
                <a className='btn form-control' onClick={() => setDropDown(!dropDown)}>
                    <span> {selectedOption !== '' ? selectedOption : "Select Category"} </span>
                    <svg width="14" height="8" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                    <path d="M0,0 l35,50 l35,-50" fill="none" stroke="black" strokeLinecap="round" strokeWidth="5" />
                    </svg>
                </a>
            {dropDown && (<div className='dropdown-content'>
                {category.map((option, key) => (
                        <div 
                        onClick={(e) => 
                        {
                            setSelectedOption(option);
                            setDropDown(false)
                        }} 
                            key={key} 
                            className='dropdown-items'>
                            {option}
                        </div>   
                ))}
                </div>
            )}
            </div>
            <div className='form-group'>
                <label>Availability</label>
                <div className='form-radio'>
                    <input type='radio' name='availability' value='Available' defaultChecked {...register("availability", {required : true})} />
                    <label>Available</label>
                    <input type='radio' name='availability' value='Full' {...register("availability", {required : true})}/>
                    <label>Full</label>
                </div>
            </div>
            <div className='form-group'>
                <label>Arrival</label>
                <input type='text' className='form-control' placeholder="Value Hasn't Arrival" disabled />
            </div>

            <input type='submit' className='btn btn-submit' value="Submit Form"/>
        </form>
    </div>
  )
}

export default Form